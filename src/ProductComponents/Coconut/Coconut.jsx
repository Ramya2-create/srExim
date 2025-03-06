import React from "react";
import styles from "./Coconut.module.css";

export const Coconut = () => {
  return (
    <div className={styles.container}>
      {/* Page Title */}
      <h2 className={styles.heading}>Coconut</h2>

      {/* Image Section */}
      <div className={styles.imageContainer}>
        <img src="/coconut1.jpg" alt="Fresh Coconut" className={styles.image} />
      </div>

      {/* Introduction Section */}
      <p className={styles.description}>
        Coconut is a versatile fruit widely used for its nutritional benefits and diverse applications. 
        It is consumed fresh, processed into oil, or used in various culinary dishes and skincare products.
      </p>

      {/* Health Benefits */}
      <h3 className={styles.subheading}>Health Benefits</h3>
      <ul className={styles.list}>
        <li>Rich in healthy fats and fiber</li>
        <li>Boosts immunity and supports digestion</li>
        <li>Hydrates the body with natural electrolytes</li>
        <li>Enhances skin and hair health</li>
        <li>Contains antioxidants for overall wellness</li>
      </ul>

      {/* Why Choose Our Coconuts? */}
      <h3 className={styles.subheading}>Why Choose Our Coconuts?</h3>
      <ul className={styles.list}>
        <li>Organically grown and pesticide-free</li>
        <li>Fresh and handpicked for the best quality</li>
        <li>Available in different varieties (Tender, Mature, and Dry Coconut)</li>
        <li>Hygienically packed and stored</li>
      </ul>

      {/* Product Specifications */}
      <h3 className={styles.subheading}>Product Specifications</h3>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td><strong>Product Name</strong></td>
            <td>Coconut</td>
          </tr>
          <tr>
            <td><strong>Origin</strong></td>
            <td>India</td>
          </tr>
          <tr>
            <td><strong>Type</strong></td>
            <td>Fresh & Dried</td>
          </tr>
          <tr>
            <td><strong>Color</strong></td>
            <td>Brown / Green</td>
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
        Our coconuts are carefully packed to maintain their freshness and quality. 
        We provide customized packaging options for bulk and retail buyers. 
        Delivery is available both within India and for export purposes.
      </p>
    </div>
  );
};
