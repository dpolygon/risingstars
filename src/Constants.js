
const prod = {
	url: {
		BACKEND_URL: 'https://risingstar-backend-cmutwtnqhq-uc.a.run.app',
	},
};

const dev = {
	url: {
		BACKEND_URL: 'http://127.0.0.1:5000',
	},
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;