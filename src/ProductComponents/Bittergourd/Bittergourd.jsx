import React from "react";
import styles from "./Bittergourd.module.css";



export  const BitterGourd = () => {
  return (
    <div className={styles.container}>
      {/* Page Title */}
      <h2 className={styles.heading}>Bitter Gourd(Karela) </h2>

      {/* Image Section */}
      <div className={styles.imageContainer}>
  <img src="/bittergourd.jpg" alt="Fresh Bitter Gourd" className={styles.image} />
</div>

      {/* Introduction Section */}
      <p className={styles.description}>
        Bitter Gourd, also known as <strong>Karela</strong>, is a nutrient-rich vegetable
        known for its numerous health benefits. It is widely used in Indian cuisine
        and Ayurvedic medicine for its medicinal properties.
      </p>

      {/* Health Benefits */}
      <h3 className={styles.subheading}>Health Benefits</h3>
      <ul className={styles.list}>
        <li>Rich in vitamins A, C, and essential minerals</li>
        <li>Helps regulate blood sugar levels</li>
        <li>Aids digestion and boosts immunity</li>
        <li>Promotes healthy skin and hair</li>
        <li>Contains powerful antioxidants</li>
      </ul>

      {/* Why Choose Our Bitter Gourd */}
      <h3 className={styles.subheading}>Why Choose Our Bitter Gourd?</h3>
      <ul className={styles.list}>
        <li>Organically grown with no pesticides</li>
        <li>Fresh and handpicked for the best quality</li>
        <li>Hygienically packed to maintain freshness</li>
        <li>Available for bulk and retail supply</li>
      </ul>

      {/* Product Specifications */}
      <h3 className={styles.subheading}>Product Specifications</h3>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td><strong>Product Name</strong></td>
            <td>Bitter Gourd (Karela)</td>
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
            <td>Dark Green</td>
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
        Our Bitter Gourd is packed with the utmost care to retain its freshness.
        We provide customized packaging options for bulk and retail buyers.
        Delivery is available both within India and for export purposes.
      </p>
    </div>
  );
};

