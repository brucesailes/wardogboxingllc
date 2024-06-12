"use client" 

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phonenumber: string;
  message: string;
}


export default function ContactForm() {
  const initialFormData = {
    name: '',
    email: '',
    phonenumber: '',
    message: '',
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [file, setFile] = useState<File | null>(null);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email: string) => {
    // Simple regex pattern for email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setEmailError('Invalid email address');
      return;
    }

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phonenumber', formData.phonenumber);
    data.append('message', formData.message);

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setEmailError(null);
        setFormData(initialFormData); // Reset form data
        setFile(null); // Reset file input
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }

    setTimeout(() => {
      setFormData(initialFormData);
      setSubmitStatus(null);
      setEmailError(null);
    }, 5000); // Reset form after a delay
  };

  return (
    <div className="mx-auto max-w-7xl transition-all duration-300 transform hover:scale-105">
    <div className="grid grid-cols-1 md:grid-cols-1 gap-10">

        {/* Contact Form Section */}
        <form onSubmit={handleSubmit} className="bg-white text-black rounded-xl shadow-2xl p-8">
          {submitStatus === 'success' && <p className="mb-4 text-black font-bold">Thank you!</p>}
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
            <button type="submit" className="bg-blue-500 text-white hover:text-black font-bold py-2 px-4 shadow-xl rounded-md transition duration-300">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};