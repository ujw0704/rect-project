import React, { useState } from 'react';
import "./Contact1.css"
function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form submitted:', { name, email, subject, message });

        
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    return (
      <div className=' form-container'>

        <div className='form'>
            <form onSubmit={handleSubmit} method='post'>
            <h2>Contact us</h2>
                <input className='name' type="text" placeholder='Enter Your name' value={name} onChange={e => setName(e.target.value)} name="name" />
                <input className='email' type="email" placeholder='Enter Your email' value={email} onChange={e => setEmail(e.target.value)} name="email" />
                <input className='subject' type="text" placeholder='Enter Your subject' value={subject} onChange={e => setSubject(e.target.value)} name="subject" />
                <textarea className='message' placeholder='Enter Your message' value={message} onChange={e => setMessage(e.target.value)} name="message"></textarea>
                <div className='btn'>

                <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
      </div>
    );
}

export default ContactForm;