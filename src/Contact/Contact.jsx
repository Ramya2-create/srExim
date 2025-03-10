import React, { useState } from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  // Step 2: Initialize state to hold form data
  const [formData, setFormData] = useState({
    companyName: '',
    Name: '',
    EmailID: '',
    Street: '',
    City: '',
    State: '',
    Country: '',
    ZipCode: '',
    phoneNumber: '',
    message: '',
    to: 'shanmukhaciv@gmail.com',  // Your receiver email
    subject: 'SRM Message'
  });

  // Handle input change for each field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await fetch('http://localhost:2020/cont/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again later.');
    }
  };

  return (
    <div className={styles.contactContainer}>
      {/* Left Side - Registration Form */}
      <div className={styles.formSection}>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Company Name *</label>
            <input
              type="text"
              name="companyName"
              placeholder="Enter company name"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Name *</label>
            <input
              type="text"
              name="Name"
              placeholder="Enter your name"
              value={formData.Name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Email ID *</label>
            <input
              type="email"
              name="EmailID"
              placeholder="Enter your email"
              value={formData.EmailID}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Street</label>
            <input
              type="text"
              name="Street"
              placeholder="Enter street address"
              value={formData.Street}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>City</label>
            <input
              type="text"
              name="City"
              placeholder="Enter city"
              value={formData.City}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>State *</label>
            <input
              type="text"
              name="State"
              placeholder="Enter state"
              value={formData.State}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Country</label>
            <input
              type="text"
              name="Country"
              placeholder="Enter country"
              value={formData.Country}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Zip Code *</label>
            <input
              type="text"
              name="ZipCode"
              placeholder="Enter zip code"
              value={formData.ZipCode}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Phone Number *</label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Enter phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Your message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>Send Message</button>
        </form>
      </div>

      {/* Right Side - Location & Contact Details */}
      <div className={styles.infoSection}>
        <h2>Our Location</h2>
        <p><strong>Address:</strong> SR EXIM, H no 1-5-1081, Father Balaiah Nagar Colony, Layola Academy Road, Old Alwal, Secunderabad - 500 010, Telangana.</p>
        <p><strong>Email:</strong> <a href="mailto:sr.exim2024@gmail.com">sr.exim2024@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:8309653117">8309653117</a> | <a href="tel:9908809965">9908809965</a></p>

        {/* Google Map Embed */}
        <iframe
          className={styles.map}
          title="Our Location Map"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3805.016878969225!2d78.49466507516766!3d17.50670768340095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDMwJzI0LjIiTiA3OMKwMjknNTAuMSJF!5e0!3m2!1sen!2sin!4v1741174243693!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};
