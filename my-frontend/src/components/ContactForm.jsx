'use client';

import { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    messageToSend: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
        const res = await axios.post('http://localhost:1337/api/contact-forms', {
            data: formData,
          });
          
      if (res.status === 200 || res.status === 201) {
        setStatus('Message sent!');
        setFormData({ firstName: '', lastName: '', email: '', messageToSend: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (err) {
      console.error('Error sending message:', err);
      setStatus('Error sending message.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <input
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <textarea
        name="messageToSend"
        value={formData.messageToSend}
        onChange={handleChange}
        placeholder="Your Message"
        required
      />
      <button type="submit">Send Message</button>
      <p>{status}</p>
    </form>
  );
}
