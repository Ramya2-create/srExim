import React from "react";
import styles from "./Pumpkin.module.css";

export const Pumpkin = () => {
  return (
    <div className={styles.container}>
      {/* Page Title */}
      <h2 className={styles.heading}>Pumpkins</h2>

      {/* Image Section */}
      <div className={styles.imageContainer}>
        <img src="/pumpkin.jpg" alt="Fresh Pumpkin" className={styles.image} />
      </div>

      {/* Introduction Section */}
      <p className={styles.description}>
        Pumpkin is a vibrant and nutritious vegetable commonly used in soups, pies, and savory dishes. 
        It is a rich source of vitamins, minerals, and antioxidants, contributing to overall health and wellness.
      </p>

      {/* Health Benefits */}
      <h3 className={styles.subheading}>Health Benefits</h3>
      <ul className={styles.list}>
        <li>High in vitamins A and C, which support eye health and immunity</li>
        <li>Rich in fiber, promoting digestive health and satiety</li>
        <li>Contains antioxidants like beta-carotene that help combat free radicals</li>
        <li>Supports heart health due to its potassium and magnesium content</li>
        <li>May help regulate blood pressure and blood sugar levels</li>
      </ul>

      {/* Why Choose Our Pumpkin? */}
      <h3 className={styles.subheading}>Why Choose Our Pumpkin?</h3>
      <ul className={styles.list}>
        <li>Freshly harvested from trusted farms</li>
        <li>Grown organically without the use of harmful pesticides</li>
        <li>Natural sweetness and flavor preserved through hygienic packaging</li>
        <li>Available in a range of sizes to suit different needs</li>
        <li>Perfect for both cooking and decoration, offering versatility</li>
      </ul>

      {/* Product Specifications */}
      <h3 className={styles.subheading}>Product Specifications</h3>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td><strong>Product Name</strong></td>
            <td>Fresh Pumpkin</td>
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
            <td>Orange, Yellow</td>
          </tr>
          <tr>
            <td><strong>Size</strong></td>
            <td>Small to Large</td>
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
        Our pumpkins are carefully packed to maintain their freshness and quality. 
        We offer customized packaging for both bulk and retail orders. Delivery services are available 
        across India and for export purposes.
      </p>
    </div>
  );
};
