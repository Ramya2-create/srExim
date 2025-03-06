import React from "react";
import styles from "./Onion.module.css";

export const Onion = () => {
  return (
    <div className={styles.container}>
      {/* Page Title */}
      <h2 className={styles.heading}>Onions</h2>

      {/* Image Section */}
      <div className={styles.imageContainer}>
        <img src="/onion.jpg" alt="Fresh Onion" className={styles.image} />
      </div>

      {/* Introduction Section */}
      <p className={styles.description}>
        Onion is a staple vegetable used in kitchens worldwide for its distinctive flavor and versatility in cooking. 
        Known for its rich aroma and sweetness when cooked, onion is a key ingredient in countless dishes 
        and has various health benefits.
      </p>

      {/* Health Benefits */}
      <h3 className={styles.subheading}>Health Benefits</h3>
      <ul className={styles.list}>
        <li>Rich in antioxidants and compounds that promote heart health</li>
        <li>Helps improve digestive health and regulate blood sugar levels</li>
        <li>Contains vitamins C and B6, essential for immunity and energy production</li>
        <li>Has anti-inflammatory properties, promoting overall well-being</li>
        <li>May help reduce the risk of certain cancers and improve bone health</li>
      </ul>

      {/* Why Choose Our Onion? */}
      <h3 className={styles.subheading}>Why Choose Our Onion?</h3>
      <ul className={styles.list}>
        <li>Freshly harvested from top-quality farms</li>
        <li>Grown organically without the use of harmful pesticides</li>
        <li>Natural flavor and nutrients retained with hygienic packaging</li>
        <li>Available in various sizes, suited for bulk or retail supply</li>
        <li>Provides a rich, natural taste to enhance your dishes</li>
      </ul>

      {/* Product Specifications */}
      <h3 className={styles.subheading}>Product Specifications</h3>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td><strong>Product Name</strong></td>
            <td>Fresh Onion</td>
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
            <td>White, Red, or Yellow</td>
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
        Our onions are carefully packed to maintain freshness and prevent spoilage. 
        Customized packaging is available for both bulk and retail orders. Delivery services are available 
        across India and for export purposes.
      </p>
    </div>
  );
};
