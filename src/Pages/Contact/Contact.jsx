import "./Contact.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Footer from '../../Components/Footer/Footer';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState(""); 

  const sendEmail = (e) => {
    e.preventDefault();

    const userName = form.current.user_name.value;
    const userEmail = form.current.user_email.value;
    const message = form.current.message.value;
  
    if (!userName || !userEmail || !message) {
      setMessageStatus("Please fill in all fields before submitting.");
      return; 
    }

    emailjs
      .sendForm('service_zb5j7z3', 'template_bifmllw', form.current, {
        publicKey: 'bwlBW7nYcPWciNF-d',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setMessageStatus("Your message has been sent successfully!"); 
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMessageStatus("Oops! Something went wrong. Please try again."); 
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>We would love to hear from you! Reach out to us using the form below.</p>
      </div>
      <div className="contact-box">
        <p className="contact-title">Contact Us</p>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div>
            <input type="text" name="user_name" placeholder="Name"/>
          </div>
          <div>
            <input type="email" name="user_email" placeholder="Email" />
          </div>
          <div>
            <textarea name="message" placeholder="Your message"></textarea>
          </div>
          <button type="submit" className="contact-button">Send Message</button>
        </form>
        {messageStatus && <p className="confirmation-message">{messageStatus}</p>}
      </div>
      <div className="social-media">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="#" className="social-icon"><FaFacebook /></a>
          <a href="#" className="social-icon"><FaTwitter /></a>
          <a href="#" className="social-icon"><FaInstagram /></a>
          <a href="#" className="social-icon"><FaLinkedin /></a>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Contact;
