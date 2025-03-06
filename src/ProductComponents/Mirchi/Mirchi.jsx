import React from "react";
import styles from "./Mirchi.module.css";

export const Mirchi = () => {
  return (
    <div className={styles.container}>
      {/* Page Title */}
      <h2 className={styles.heading}> Red Mirchi (Chili)</h2>

      {/* Image Section */}
      <div className={styles.imageContainer}>
        <img src="/mirchi.avif" alt="Fresh Red Mirchi" className={styles.image} />
      </div>

      {/* Introduction Section */}
      <p className={styles.description}>
        Red Mirchi (Chili) is a versatile spice that adds heat and flavor to dishes across the world. 
        It is not only known for its bold and spicy taste but also for its numerous health benefits 
        that have been celebrated for centuries in various cuisines and traditional medicine.
      </p>

      {/* Health Benefits */}
      <h3 className={styles.subheading}>Health Benefits</h3>
      <ul className={styles.list}>
        <li>Rich in capsaicin, which has antioxidant and anti-inflammatory properties</li>
        <li>Boosts metabolism and aids in weight loss</li>
        <li>Improves circulation and heart health</li>
        <li>Contains vitamins A and C, which promote immune health</li>
        <li>Can help relieve pain and muscle soreness</li>
      </ul>

      {/* Why Choose Our Red Mirchi? */}
      <h3 className={styles.subheading}>Why Choose Our Red Mirchi?</h3>
      <ul className={styles.list}>
        <li>Freshly harvested from the best farms</li>
        <li>Organically grown without harmful chemicals or pesticides</li>
        <li>Rich in flavor and perfect for enhancing any dish</li>
        <li>Hygienically packed to preserve its natural aroma and freshness</li>
        <li>Available in both bulk and retail packaging</li>
      </ul>

      {/* Product Specifications */}
      <h3 className={styles.subheading}>Product Specifications</h3>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td><strong>Product Name</strong></td>
            <td>Fresh Red Mirchi (Chili)</td>
          </tr>
          <tr>
            <td><strong>Origin</strong></td>
            <td>India</td>
          </tr>
          <tr>
            <td><strong>Type</strong></td>
            <td>Fresh Spice</td>
          </tr>
          <tr>
            <td><strong>Color</strong></td>
            <td>Bright Red</td>
          </tr>
          <tr>
            <td><strong>Size</strong></td>
            <td>Small to Medium Pods</td>
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
        Our Red Mirchi is carefully packed to retain its natural color, aroma, and spice level. 
        We provide customized packaging solutions for both bulk and retail orders. Delivery is available 
        across India and for export worldwide.
      </p>
    </div>
  );
};
