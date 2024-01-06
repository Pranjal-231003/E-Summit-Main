import React from 'react'
import  './Contact.css';
import ContactForm from './ContactForm';
import withCursor from '../Cursor/Cursor';

const Contact = () => {
  return (
    <>
    <div id="Contact_Container">
    <div className="contact">
        <h1 className='contact-head'><span className="text_s">Contact Us</span></h1>
        <ContactForm />
    </div>
    </div>
    </>
  )
}

export default withCursor(Contact);