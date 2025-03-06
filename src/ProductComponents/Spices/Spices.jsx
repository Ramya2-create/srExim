import React from "react";
import styles from "./Spices.module.css";

export const Spices = () => {
  return (
    <div className={styles.container}>
      {/* Page Title */}
      <h2 className={styles.heading}>Spices</h2>

      {/* Image Section */}
      <div className={styles.imageContainer}>
        <img src="/spices.avif" alt="Variety of Spices" className={styles.image} />
      </div>

      {/* Introduction Section */}
      <p className={styles.description}>
        Spices are essential ingredients in kitchens around the world, adding depth and flavor to dishes. 
        From aromatic and pungent to sweet and earthy, spices not only enhance food but also offer various health benefits.
      </p>

      {/* Health Benefits */}
      <h3 className={styles.subheading}>Health Benefits</h3>
      <ul className={styles.list}>
        <li>Rich in antioxidants that protect cells from damage</li>
        <li>Boost metabolism and support digestion</li>
        <li>Provide anti-inflammatory benefits, helping to reduce pain and swelling</li>
        <li>Support immune health and combat infections</li>
        <li>May improve brain function and help with memory retention</li>
      </ul>

      {/* Why Choose Our Spices? */}
      <h3 className={styles.subheading}>Why Choose Our Spices?</h3>
      <ul className={styles.list}>
        <li>Sourced from the best spice-growing regions</li>
        <li>100% organic and free from artificial additives</li>
        <li>Freshly ground and packed to retain maximum flavor and potency</li>
        <li>Available in a variety of forms – whole, ground, or blended</li>
        <li>High-quality spices that bring authentic taste to your cooking</li>
      </ul>

      {/* Product Specifications */}
      <h3 className={styles.subheading}>Product Specifications</h3>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td><strong>Product Name</strong></td>
            <td>Premium Spices</td>
          </tr>
          <tr>
            <td><strong>Origin</strong></td>
            <td>India</td>
          </tr>
          <tr>
            <td><strong>Type</strong></td>
            <td>Whole, Ground, and Blended Spices</td>
          </tr>
          <tr>
            <td><strong>Varieties</strong></td>
            <td>Cumin, Coriander, Turmeric, Black Pepper, Cinnamon, Cloves, Cardamom, and more</td>
          </tr>
          <tr>
            <td><strong>Packaging</strong></td>
            <td>50g, 100g, 250g, 500g packets or customized packaging as per requirement</td>
          </tr>
        </tbody>
      </table>

      {/* Packaging & Delivery */}
      <h3 className={styles.subheading}>Packaging & Delivery</h3>
      <p className={styles.description}>
        Our spices are carefully packaged to preserve their freshness and flavor. 
        We offer customized packaging options for both retail and bulk orders. Delivery services are available 
        across India and for export purposes.
      </p>
    </div>
  );
};
