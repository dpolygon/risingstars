// EmbeddedMap.js
import React from 'react';

const EmbeddedMap = () => {
  return (
    <div>
      <iframe
        title="Embedded Google Map"
        width="550"
        height="550"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13801.611112686229!2d-97.8073152!3d30.1398985!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b4c6b40ecbd2f%3A0xb810def7e77dece2!2sRising%20Stars%20Bilingual%20Learning%20Center!5e0!3m2!1sen!2sus!4v1701811498558!5m2!1sen!2sus"
        frameBorder="0"
        style={{ border: "7px dotted #99DBF5", borderRadius: "30px", padding: "10px"}}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default EmbeddedMap;
