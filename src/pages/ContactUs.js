// src/pages/ContactUs.js
import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 600px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: none;
`;

const Button = styled.button`
  padding: 12px;
  background-color: #0073e6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 10px;

  &:hover {
    background-color: #005bb5;
  }
`;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to an API)
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <ContactContainer>
      <h1>Contact Us</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit">Submit</Button>
      </Form>
    </ContactContainer>
  );
};

export default ContactUs;
