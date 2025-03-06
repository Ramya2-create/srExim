import React from "react";
import styles from "./Drumstic.module.css";

export const Drumstic = () => {
  return (
    <div className={styles.container}>
      {/* Page Title */}
      <h2 className={styles.heading}>Murunga (Drumstick)</h2>

      {/* Image Section */}
      <div className={styles.imageContainer}>
        <img src="/drumsticks.jpg" alt="Fresh Murunga (Drumstick)" className={styles.image} />
      </div>

      {/* Introduction Section */}
      <p className={styles.description}>
        Murunga, also known as <strong>Drumstick</strong>, is a highly nutritious vegetable widely used 
        in South Indian cuisine and Ayurvedic medicine. It is valued for its rich flavor 
        and numerous health benefits.
      </p>

      {/* Health Benefits */}
      <h3 className={styles.subheading}>Health Benefits</h3>
      <ul className={styles.list}>
        <li>Rich in Vitamin C, calcium, and iron</li>
        <li>Strengthens bones and improves joint health</li>
        <li>Boosts immunity and promotes digestion</li>
        <li>Has anti-inflammatory and antioxidant properties</li>
        <li>Supports healthy skin and hair growth</li>
      </ul>

      {/* Why Choose Our Murunga? */}
      <h3 className={styles.subheading}>Why Choose Our Murunga?</h3>
      <ul className={styles.list}>
        <li>Organically grown and pesticide-free</li>
        <li>Freshly harvested and carefully selected</li>
        <li>Hygienically packed to preserve freshness</li>
        <li>Available for bulk and retail supply</li>
      </ul>

      {/* Product Specifications */}
      <h3 className={styles.subheading}>Product Specifications</h3>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td><strong>Product Name</strong></td>
            <td>Murunga (Drumstick)</td>
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
            <td>Green</td>
          </tr>
          <tr>
            <td><strong>Size</strong></td>
            <td>Medium to Large</td>
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
        Our Murunga is carefully packed to maintain its quality and freshness. 
        We offer customized packaging options for bulk and retail buyers. 
        Delivery is available across India and internationally for export.
      </p>
    </div>
  );
};
