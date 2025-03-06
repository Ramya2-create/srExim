import React from "react";
import styles from "./Garlic.module.css";

export const Garlic = () => {
  return (
    <div className={styles.container}>
      {/* Page Title */}
      <h2 className={styles.heading}>Fresh Garlic</h2>

      {/* Image Section */}
      <div className={styles.imageContainer}>
        <img src="/garlic.jpg" alt="Fresh Garlic" className={styles.image} />
      </div>

      {/* Introduction Section */}
      <p className={styles.description}>
        Garlic is a widely used and essential ingredient in various cuisines around the world. 
        Known for its strong flavor and medicinal properties, garlic has been used for centuries 
        to enhance the taste of food and boost health naturally.
      </p>

      {/* Health Benefits */}
      <h3 className={styles.subheading}>Health Benefits</h3>
      <ul className={styles.list}>
        <li>Rich in antioxidants that help strengthen immunity</li>
        <li>Supports heart health by reducing blood pressure and cholesterol</li>
        <li>Has antibacterial and antiviral properties</li>
        <li>Aids in digestion and boosts metabolism</li>
        <li>May help regulate blood sugar levels</li>
      </ul>

      {/* Why Choose Our Garlic? */}
      <h3 className={styles.subheading}>Why Choose Our Garlic?</h3>
      <ul className={styles.list}>
        <li>Freshly harvested from high-quality farms</li>
        <li>Organically grown without harmful pesticides</li>
        <li>Rich in flavor and essential nutrients</li>
        <li>Packed hygienically to retain freshness</li>
        <li>Available for bulk and retail supply</li>
      </ul>

      {/* Product Specifications */}
      <h3 className={styles.subheading}>Product Specifications</h3>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td><strong>Product Name</strong></td>
            <td>Fresh Garlic</td>
          </tr>
          <tr>
            <td><strong>Origin</strong></td>
            <td>India</td>
          </tr>
          <tr>
            <td><strong>Type</strong></td>
            <td>Fresh Vegetable</td>
          </tr>
          <tr>
            <td><strong>Color</strong></td>
            <td>White</td>
          </tr>
          <tr>
            <td><strong>Size</strong></td>
            <td>Small to Large Bulbs</td>
          </tr>
          <tr>
            <td><strong>Packing</strong></td>
            <td>5kg / 10kg / 25kg bags or customized as per requirement</td>
          </tr>
        </tbody>
      </table>

      {/* Packaging & Delivery */}
      <h3 className={styles.subheading}>Packaging & Delivery</h3>
      <p className={styles.description}>
        Our Garlic is carefully packed to maintain its natural flavor and freshness. 
        We provide customized packaging for bulk and retail buyers. Delivery is available 
        across India and for export purposes.
      </p>
    </div>
  );
};
