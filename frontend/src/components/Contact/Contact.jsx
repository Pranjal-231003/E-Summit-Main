import React from 'react'
import  './Contact.css';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className="contact">
        <h1 className='contact-head'><span className="text_s">Contact Us</span></h1>
        <ContactForm />
    </div>
  )
}

export default Contact