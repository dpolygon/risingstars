# Dependencies for task queue functions.
from google.cloud import tasks_v2
import requests, os, json
from firebase_admin import functions, initialize_app
from firebase_functions import https_fn, options, tasks_fn, params
from firebase_functions.options import RetryConfig, RateLimits, SupportedRegion, set_global_options
import google.auth
from google.auth.transport.requests import AuthorizedSession

import smtplib, ssl
from email.mime.application import MIMEApplication
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from requests_toolbelt.multipart.encoder import MultipartEncoder
import base64

# For cost control, you can set the maximum number of containers that can be
# running at the same time. This helps mitigate the impact of unexpected
# traffic spikes by instead downgrading performance. This limit is a per-function
# limit. You can override the limit for each function using the max_instances
# parameter in the decorator, e.g. @https_fn.on_request(max_instances=5).
set_global_options(max_instances=5)

app = initialize_app()

@https_fn.on_request(cors=options.CorsOptions(
    cors_origins=["https://risingstarsaustin.com", "https://www.risingstarsaustin.com", "https://rising-stars-35612.web.app"],
    cors_methods=["get", "post"]
))
def enqueue_text(request: https_fn.Request) -> https_fn.Response:
    try:
        request_json = request.get_json(silent=True)
        if not request_json:
            return "Request body must be valid JSON.", 400

        task_queue = functions.task_queue("sendText")
        print("📤 Queue found")

        payload = {"data": {
            "name": request_json.get("name"),
            "phoneNumber": request_json.get("contactInfo"),
            "message": request_json.get("message")
        }}
        print("✅ Payload created", payload)

        enqueued_task_name = task_queue.enqueue(payload)
        print("✅ Enqueued task")

        return json.dumps({"message": "Order processing enqueued", "taskName": enqueued_task_name}), 200, {'Content-Type': 'application/json'}

    except Exception as e:
        print(f"Error enqueuing task: {e}")
        return json.dumps({"error": str(e)}), 500, {'Content-Type': 'application/json'}

@tasks_fn.on_task_dispatched(retry_config=RetryConfig(max_attempts=1, min_backoff_seconds=60), rate_limits=RateLimits(max_concurrent_dispatches=10))
def sendText(user_data: tasks_fn.CallableRequest) -> str:
        bot_token = os.environ.get('RS_BOT_TOKEN')
        url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
        
        print("sending to...", url)
        
        user_id = os.environ.get('RS_BOT_ID')
        message = {
            "chat_id": user_id,
            "text": (
                "Name: " + user_data.data['name'] + "\n"
                + "Phone Number: " + user_data.data['phoneNumber'] + "\n"
                + "message: " + user_data.data['message']
            )
        }
        
        print("message says...", message)
        
        response = requests.post(url, data=message)
        print(f"Text Task completed")
        return json.dumps({"status_code": response.status_code})


@https_fn.on_request(cors=options.CorsOptions(
    cors_origins=["https://risingstarsaustin.com", "https://www.risingstarsaustin.com", "https://rising-stars-35612.web.app"],
    cors_methods=["get", "post"]
))
def enqueue_mail(request: https_fn.Request) -> https_fn.Response:
    try:
        request_json = request.get_json(silent=True)
        if not request_json:
            return "Request mail body must be valid JSON.", 400

        mail_queue = functions.task_queue("sendMail")
        print("📤 Queue found")
        payload = { "data": request_json}
        print("payload created", payload)
        mail_task_name = mail_queue.enqueue(payload)
        print("✅ Enqueued task")
        
        return json.dumps({"message": "Order processing enqueued", "taskName": mail_task_name}), 200, {'Content-Type': 'application/json'}
    except Exception as e:
        print(f"Error enqueuing mail task: {e}")
        return json.dumps({"error": str(e)}), 500, {'Content-Type': 'application/json'}

@tasks_fn.on_task_dispatched(retry_config=RetryConfig(max_attempts=1, min_backoff_seconds=60), rate_limits=RateLimits(max_concurrent_dispatches=10))
def sendMail(task_data: tasks_fn.CallableRequest) -> str: 
    print(task_data)
    message_data = task_data.data
    message = MIMEMultipart()

    message["From"] = os.environ.get('RS_BOT_EMAIL_USERNAME')
    message["To"] = os.environ.get('RS_BOT_RECIPIENT')
    message["Subject"] = f"{message_data['contactInfo']} {message_data['name']}"

    client_message = MIMEText(message_data['message'])
    message.attach(client_message)

    with smtplib.SMTP_SSL(
        host="smtp.gmail.com", port=465, context=ssl.create_default_context()
    ) as server:
        server.login(os.environ.get('RS_BOT_EMAIL_USERNAME'), os.environ.get('RS_BOT_EMAIL_PASSWORD'))

        server.sendmail(
            from_addr=os.environ.get('RS_BOT_EMAIL_USERNAME'),
            to_addrs=os.environ.get('RS_BOT_RECIPIENT'),
            msg=message.as_string()
        )

    print(f"Mail Task completed")
    return json.dumps({"message": "Success"}), 200



@https_fn.on_request(cors=options.CorsOptions(
    cors_origins=["https://risingstarsaustin.com", "https://www.risingstarsaustin.com", "https://rising-stars-35612.web.app"],
    cors_methods=["get", "post"]
))
def enqueue_application(request: https_fn.Request) -> https_fn.Response:

    file_fields = [{'fileName' : file.filename, 'data' : base64.b64encode(file.read()).decode('utf-8')} for file in request.files.getlist('files')]
    fields = {**data_fields, **{'files' : file_fields}}

    print(f"Created mail task {response.name}")
    return json.dumps({"message": "Success"}), 200

# @tasks_fn.on_task_dispatched(retry_config=RetryConfig(max_attempts=1, min_backoff_seconds=60), rate_limits=RateLimits(max_concurrent_dispatches=10))
# def sendApplication(data):
#         data = data.json
#         print(data)
        
#         message = MIMEMultipart()
#         message["From"] = os.environ.get('RS_BOT_EMAIL_USERNAME')
#         message["To"] = os.environ.get('RS_BOT_RECIPIENT')
#         message["Subject"] = "Enrollment Application"
        
#         client_information = ("Name: " + data['name'] +
#                         "\nPhone Number: " + data['phone'] + 
#                         "\nEmail: " + data['email'] + 
#                         "\nChild's Name: " + data['childName'] + 
#                         "\nChild's Age: " + data['childAge'] + 
#                         "\nDesired Start Date: " + data['date'] + 
#                         "\nMessage: " + data['message'] + "\n")
        
#         client_info_attachment = MIMEText(client_information)
#         message.attach(client_info_attachment)

#         allowed_extensions = [".zip", ".pdf"]

#         for file in data['files']:
#             file_name = file['fileName']
#             _, file_extension = os.path.splitext(file_name)
#             if file_extension.lower() in allowed_extensions:
#                 file_content = base64.b64decode(file['data'].encode('utf-8'))
#                 print(f"Adding Attachment: {file_name}")
                
#                 attachment = MIMEApplication(file_content)
#                 attachment.add_header(
#                     "Content-Disposition",
#                     f"attachment; filename= {file_name}",
#                 )

#                 message.attach(attachment)

#         with smtplib.SMTP_SSL(
#             host="smtp.gmail.com", port=465, context=ssl.create_default_context()
#         ) as server:
#             server.login(os.environ.get('RS_BOT_EMAIL_USERNAME'), os.environ.get('RS_BOT_EMAIL_PASSWORD'))

#             server.sendmail(
#                 from_addr=os.environ.get('RS_BOT_EMAIL_USERNAME'),
#                 to_addrs=os.environ.get('RS_BOT_RECIPIENT'),
#                 msg=message.as_string()
#             )

#         print(f"Application Task completed")
#         return jsonify({"message": "Success"}), 200


@https_fn.on_request(cors=options.CorsOptions(
    cors_origins=["https://risingstarsaustin.com", "https://www.risingstarsaustin.com", "https://rising-stars-35612.web.app"],
    cors_methods=["get", "post"]
))
def get_reviews(_: https_fn.Request) -> https_fn.Response:
    url = "https://api.yelp.com/v3/businesses/rising-stars-bilingual-daycare-manchaca-2/reviews?limit=20&sort_by=newest"
    apiKey  = os.environ.get('REACT_APP_YELP_REVIEWS_API')
    bearerToken = 'Bearer ' + apiKey
    headers = {
        "accept": "application/json",
        "Authorization": bearerToken,
   }

    response = requests.get(url, headers=headers)

    review_data = response.json()
    return https_fn.Response(
        json.dumps(review_data),
        mimetype="application/json"
    )


PDF_FOLDER = os.path.join(os.getcwd(), "documents", "pdfs")

@https_fn.on_request(cors=options.CorsOptions(
    cors_origins=["https://risingstarsaustin.com", "https://www.risingstarsaustin.com", "https://rising-stars-35612.web.app"],
    cors_methods=["get", "post"]
))
def get_pdf(req: https_fn.Request) -> https_fn.Response:
    file_name = req.query.get("file")

    file_path = os.path.join(PDF_FOLDER, file_name)
    if not os.path.isfile(file_path):
        return https_fn.Response("File not found", status=404)

    with open(file_path, "rb") as f:
        data = f.read()

    return https_fn.Response(
        data,
        mimetype="application/pdf",
        headers={
            "Content-Disposition": f"attachment; filename={file_name}"
        }
    )
