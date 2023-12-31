// ContactForm.js
import React, { useEffect } from 'react';

const ContactForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="visme_d" data-title="Website Contact Form" data-url="01q067q9-website-contact-form" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="9097"></div>
  );
};

export default ContactForm;
