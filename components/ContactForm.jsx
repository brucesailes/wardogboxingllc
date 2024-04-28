"use client" 

import React, { useState } from 'react';



export default function ContactForm() {
  const initialFormData = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [emailError, setEmailError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    // Simple regex pattern for email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setEmailError('Invalid email address');
      return;
    }

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Email sent successfully
        setSubmitStatus('success');
        setFormData(initialFormData); // Reset the form
        setEmailError(null); // Clear the email error
      } else {
        // Handle the error
        setSubmitStatus('error');
      }
    } catch (error) {
      // Handle network or other errors
      setSubmitStatus('error');
    }
  };

  return (
    <div className="p-10 mx-auto max-w-7xl transition-all duration-300 transform hover:scale-105">
    <div className="grid grid-cols-1 md:grid-cols-1 gap-10">

        {/* Contact Form Section */}
        <form onSubmit={handleSubmit} className="bg-white text-black rounded-xl shadow-2xl p-8">
          {submitStatus === 'success' && <p className="mb-4 text-green-500 font-bold">Email sent successfully!</p>}
          {submitStatus === 'error' && <p className="mb-4 text-red-500 font-bold">Error sending email. Please try again.</p>}

          {/* Form fields */}
          <div className="space-y-4">
            {/* Name Input */}
            <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />

            {/* Email Input */}
            <input type="email" name="email" placeholder="Your email" value={formData.email} onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${emailError ? 'border-red-500 focus:ring-2 focus:ring-red-500' : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'}`} required />
            {emailError && <p className="text-red-500 text-xs">{emailError}</p>}

            {/* Phone Number Input */}
            <input type="text" name="phonenumber" placeholder="Your phone number" value={formData.phonenumber} onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />

            {/* Message Textarea */}
            <textarea name="message" placeholder="Your message" value={formData.message} onChange={handleChange}
              rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
          </div>

          {/* Submit Button */}
          <div className="text-center mt-4">
            <button type="submit" className="bg-white text-blue-500 hover:text-black font-bold py-2 px-6 shadow-xl rounded-full transition duration-300">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};