import React from "react";
import styles from "./Egg.module.css";

export const Egg = () => {
  return (
    <div className={styles.container}>
      {/* Page Title */}
      <h2 className={styles.heading}>Fresh Farm Eggs</h2>

      {/* Image Section */}
      <div className={styles.imageContainer}>
        <img src="/eggs.jpg" alt="Fresh Eggs" className={styles.image} />
      </div>

      {/* Introduction Section */}
      <p className={styles.description}>
        Eggs are a rich source of protein, vitamins, and essential nutrients. 
        They are widely consumed around the world and used in various culinary dishes. 
        Our farm-fresh eggs are carefully selected to ensure top quality and freshness.
      </p>

      {/* Health Benefits */}
      <h3 className={styles.subheading}>Health Benefits</h3>
      <ul className={styles.list}>
        <li>Excellent source of high-quality protein</li>
        <li>Rich in essential vitamins like B12, D, and choline</li>
        <li>Supports brain function and muscle health</li>
        <li>Helps maintain healthy skin and eyes</li>
        <li>Boosts immune system and energy levels</li>
      </ul>

      {/* Why Choose Our Eggs? */}
      <h3 className={styles.subheading}>Why Choose Our Eggs?</h3>
      <ul className={styles.list}>
        <li>Freshly collected from healthy hens</li>
        <li>Available in different varieties (White, Brown, Organic)</li>
        <li>Hygienically packed for longer shelf life</li>
        <li>Strict quality control and certification</li>
      </ul>

      {/* Product Specifications */}
      <h3 className={styles.subheading}>Product Specifications</h3>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td><strong>Product Name</strong></td>
            <td>Fresh Farm Eggs</td>
          </tr>
          <tr>
            <td><strong>Origin</strong></td>
            <td>India</td>
          </tr>
          <tr>
            <td><strong>Type</strong></td>
            <td>White Eggs / Brown Eggs / Organic Eggs</td>
          </tr>
          <tr>
            <td><strong>Weight</strong></td>
            <td>50-60g per egg</td>
          </tr>
          <tr>
            <td><strong>Packing</strong></td>
            <td>6, 12, 30 eggs per carton</td>
          </tr>
        </tbody>
      </table>

      {/* Packaging & Delivery */}
      <h3 className={styles.subheading}>Packaging & Delivery</h3>
      <p className={styles.description}>
        Our eggs are carefully packed in hygienic trays and cartons to prevent breakage.
        We offer bulk and retail supply, with delivery available within India and for export purposes.
      </p>
    </div>
  );
};
