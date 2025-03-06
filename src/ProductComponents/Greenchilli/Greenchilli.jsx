import React from "react";
import styles from "./Greenchilli.module.css";

export const Greenchilli = () => {
  return (
    <div className={styles.container}>
      {/* Page Title */}
      <h2 className={styles.heading}>Fresh Green Chilli</h2>

      {/* Image Section */}
      <div className={styles.imageContainer}>
        <img src="/greenchilli.jpg" alt="Fresh Green Chilli" className={styles.image} />
      </div>

      {/* Introduction Section */}
      <p className={styles.description}>
        Green Chilli is a key ingredient in various cuisines worldwide, known for its 
        fiery flavor and numerous health benefits. It enhances the taste of dishes and is 
        packed with essential vitamins and antioxidants.
      </p>

      {/* Health Benefits */}
      <h3 className={styles.subheading}>Health Benefits</h3>
      <ul className={styles.list}>
        <li>Rich in Vitamin C, A, and antioxidants</li>
        <li>Boosts metabolism and aids in weight loss</li>
        <li>Promotes better digestion and gut health</li>
        <li>Supports heart health by improving blood circulation</li>
        <li>Has anti-inflammatory and pain-relief properties</li>
      </ul>

      {/* Why Choose Our Green Chilli? */}
      <h3 className={styles.subheading}>Why Choose Our Green Chilli?</h3>
      <ul className={styles.list}>
        <li>Freshly harvested and handpicked</li>
        <li>Organically grown without harmful pesticides</li>
        <li>Packed hygienically to retain freshness and flavor</li>
        <li>Available for bulk and retail supply</li>
      </ul>

      {/* Product Specifications */}
      <h3 className={styles.subheading}>Product Specifications</h3>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td><strong>Product Name</strong></td>
            <td>Fresh Green Chilli</td>
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
            <td>Bright Green</td>
          </tr>
          <tr>
            <td><strong>Size</strong></td>
            <td>5cm - 10cm</td>
          </tr>
          <tr>
            <td><strong>Packing</strong></td>
            <td>5kg / 10kg / 25kg bags</td>
          </tr>
        </tbody>
      </table>

      {/* Packaging & Delivery */}
      <h3 className={styles.subheading}>Packaging & Delivery</h3>
      <p className={styles.description}>
        Our Green Chillies are carefully packed to maintain their spiciness and freshness. 
        We provide customized packaging for bulk and retail buyers. Delivery is available 
        across India and for export purposes.
      </p>
    </div>
  );
};
