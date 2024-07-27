"use client";

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phonenumber: string;
  message: string;
}

export default function ContactForm() {
  const initialFormData: FormData = {
    name: '',
    email: '',
    phonenumber: '',
    message: '',
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!validateEmail(formData.email)) {
      setEmailError('Invalid email address');
      return;
    }
  
    try {
      const response = await fetch('/api/submission', {
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
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
  
    setTimeout(() => {
      setSubmitStatus(null);
      setEmailError(null);
    }, 5000); // Reset form after a delay
  };

  return (
    <div className="mx-auto max-w-7xl transition-all duration-300 transform hover:scale-105">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
        <form onSubmit={handleSubmit} className="bg-white text-black rounded-xl shadow-2xl p-8">
          {submitStatus === 'success' && <p className="mb-4 text-black font-bold">Thank you!</p>}
          {submitStatus === 'error' && <p className="mb-4 text-red-500 font-bold">Error sending email. Please try again.</p>}

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${emailError ? 'border-red-500 focus:ring-2 focus:ring-red-500' : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'}`}
              required
            />
            {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
            <input
              type="text"
              name="phonenumber"
              placeholder="Your phone number"
              value={formData.phonenumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="text-center mt-4">
            <button type="submit" className="bg-blue-700 text-white hover:bg-blue-800 font-bold py-2 px-4 shadow-xl rounded-md transition duration-300" aria-label='Send Message'>Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}
