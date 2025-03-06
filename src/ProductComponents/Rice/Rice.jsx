import React from "react";
import styles from "./Rice.module.css";

export const Rice = () => {
  return (
    <div className={styles.container}>
      {/* Page Title */}
      <h2 className={styles.heading}>Rices</h2>

      {/* Image Section */}
      <div className={styles.imageContainer}>
        <img src="/rice.jpg" alt="Variety of Rice" className={styles.image} />
      </div>

      {/* Introduction Section */}
      <p className={styles.description}>
        Rice is a staple food in many parts of the world, providing a versatile base for countless dishes. 
        With its numerous varieties, rice is a source of essential carbohydrates and energy, and is enjoyed by people across cultures.
      </p>

      {/* Health Benefits */}
      <h3 className={styles.subheading}>Health Benefits</h3>
      <ul className={styles.list}>
        <li>Rich in carbohydrates, providing a great source of energy</li>
        <li>Contains essential vitamins and minerals, such as B vitamins and magnesium</li>
        <li>High in fiber (especially in brown rice), supporting digestion and gut health</li>
        <li>Low in fat, making it a heart-healthy food choice</li>
        <li>Gluten-free, suitable for those with gluten sensitivities or celiac disease</li>
      </ul>

      {/* Why Choose Our Rice? */}
      <h3 className={styles.subheading}>Why Choose Our Rice?</h3>
      <ul className={styles.list}>
        <li>Sourced from the finest rice-growing regions</li>
        <li>Available in a variety of types, including Basmati, Jasmine, and Long Grain</li>
        <li>Harvested and processed with minimal handling to preserve quality and nutrients</li>
        <li>Free from additives, preservatives, and artificial chemicals</li>
        <li>Perfect for cooking, catering, and retail distribution</li>
      </ul>

      {/* Product Specifications */}
      <h3 className={styles.subheading}>Product Specifications</h3>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td><strong>Product Name</strong></td>
            <td>Premium Rice</td>
          </tr>
          <tr>
            <td><strong>Origin</strong></td>
            <td>India</td>
          </tr>
          <tr>
            <td><strong>Type</strong></td>
            <td>Basmati, Jasmine, Long Grain, Short Grain, Brown Rice, and more</td>
          </tr>
          <tr>
            <td><strong>Color</strong></td>
            <td>White, Brown, and Golden</td>
          </tr>
          <tr>
            <td><strong>Size</strong></td>
            <td>Small, Medium, and Large Grains</td>
          </tr>
          <tr>
            <td><strong>Packing</strong></td>
            <td>1kg, 5kg, 10kg, 25kg bags or customized as per requirement</td>
          </tr>
        </tbody>
      </table>

      {/* Packaging & Delivery */}
      <h3 className={styles.subheading}>Packaging & Delivery</h3>
      <p className={styles.description}>
        Our rice is packaged with care to ensure freshness and prevent spoilage. We offer both retail and bulk packaging options to suit your needs. 
        Delivery services are available across India and for international export.
      </p>
    </div>
  );
};
