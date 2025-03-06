import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      {/* Left Side - Registration Form */}
      <div className={styles.formSection}>
        <h2>Contact Us</h2>
        <form>
          <div className={styles.formGroup}>
            <label>Company Name *</label>
            <input type="text" placeholder="Enter company name" required />
          </div>

          <div className={styles.formGroup}>
            <label>Name *</label>
            <input type="text" placeholder="Enter your name" required />
          </div>

          <div className={styles.formGroup}>
            <label>Email ID *</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className={styles.formGroup}>
            <label>Street</label>
            <input type="text" placeholder="Enter street address" />
          </div>

          <div className={styles.formGroup}>
            <label>City</label>
            <input type="text" placeholder="Enter city" />
          </div>

          <div className={styles.formGroup}>
            <label>State *</label>
            <input type="text" placeholder="Enter state" required />
          </div>

          <div className={styles.formGroup}>
            <label>Country</label>
            <input type="text" placeholder="Enter country" />
          </div>

          <div className={styles.formGroup}>
            <label>Zip Code *</label>
            <input type="text" placeholder="Enter zip code" required />
          </div>

          <div className={styles.formGroup}>
            <label>Phone Number *</label>
            <input type="text" placeholder="Enter phone number" required />
          </div>


          <div className={styles.formGroup}>
            <label>Message</label>
            <textarea placeholder="Your message" rows="4"></textarea>
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
