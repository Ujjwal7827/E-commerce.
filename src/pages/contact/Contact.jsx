import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent form from submitting immediately
    setIsSubmit(true);

    setTimeout(() => {
      setIsSubmit(false);
    }, 3000);

    // allow the form to submit after setting state
    e.target.submit();
  };

  return (
    <div className='contact'>
      {isSubmit ? (
        <div className="confirmation-message">
          ✅ Your order has been confirmed!
        </div>
      ) : (
        <form action='https://formspree.io/f/xbloyljq' method='POST' onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder='Enter Your Name...'
            name='username'
          />
          <input
            required
            type="email"
            placeholder='Email'
            name='email'
          />
          <textarea
            required
            name="message"
            placeholder='Message'
          ></textarea>
          <button type='submit'>Submit</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
