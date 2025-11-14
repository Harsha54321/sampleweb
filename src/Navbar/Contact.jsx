import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields before submitting!");
      return;
    }
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">

      <h1>Contact One Word Academy</h1>

      <div className="contact-content">

        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            We'd love to hear from you! Whether you have questions about
            admissions, curriculum, or events — feel free to reach out.
          </p>

          <div className="info-group">
            <h4>Address</h4>
            <p>One Word Academy, Green Valley Road, Hyderabad, India</p>
          </div>

          <div className="info-group">
            <h4>Phone</h4>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-group">
            <h4>Email</h4>
            <p>info@onewordacademy.edu.in</p>
          </div>

          
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          {submitted ? (
            <div className="thank-you">
              <h3>Thank you for contacting us!</h3>
              <p>We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                rows="5"
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
