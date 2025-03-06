import React from "react";
import styles from "./Ginger.module.css";

export const Ginger = () => {
  return (
    <div className={styles.container}>
      {/* Page Title */}
      <h2 className={styles.heading}>Ginger</h2>

      {/* Image Section */}
      <div className={styles.imageContainer}>
        <img src="/ginger.jpg" alt="Fresh Ginger" className={styles.image} />
      </div>

      {/* Introduction Section */}
      <p className={styles.description}>
        Ginger is a popular spice known for its distinct aroma, sharp flavor, and numerous health benefits. 
        It is widely used in culinary dishes across the world, and also praised for its medicinal properties, 
        helping in digestion and promoting overall wellness.
      </p>

      {/* Health Benefits */}
      <h3 className={styles.subheading}>Health Benefits</h3>
      <ul className={styles.list}>
        <li>Rich in bioactive compounds that have antioxidant and anti-inflammatory effects</li>
        <li>Aids in digestion and alleviates nausea</li>
        <li>Helps in reducing muscle pain and soreness</li>
        <li>Supports heart health by improving blood circulation</li>
        <li>May help reduce cholesterol and blood sugar levels</li>
      </ul>

      {/* Why Choose Our Ginger? */}
      <h3 className={styles.subheading}>Why Choose Our Ginger?</h3>
      <ul className={styles.list}>
        <li>Freshly harvested from premium farms</li>
        <li>Organically grown with no harmful chemicals</li>
        <li>Full of flavor and packed with essential nutrients</li>
        <li>Hygienically packed to ensure maximum freshness</li>
        <li>Available in bulk or retail quantities</li>
      </ul>

      {/* Product Specifications */}
      <h3 className={styles.subheading}>Product Specifications</h3>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td><strong>Product Name</strong></td>
            <td>Fresh Ginger</td>
          </tr>
          <tr>
            <td><strong>Origin</strong></td>
            <td>India</td>
          </tr>
          <tr>
            <td><strong>Type</strong></td>
            <td>Fresh Root</td>
          </tr>
          <tr>
            <td><strong>Color</strong></td>
            <td>Light Brown</td>
          </tr>
          <tr>
            <td><strong>Size</strong></td>
            <td>Small to Medium Roots</td>
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
        Our Ginger is carefully packed to maintain its natural flavor and freshness. 
        We offer customized packaging for both bulk and retail buyers. Delivery is available 
        across India and for international export.
      </p>
    </div>
  );
};
