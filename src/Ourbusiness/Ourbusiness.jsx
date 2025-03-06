import React from "react";
import styles from "./Ourbusiness.module.css";

export const Ourbusiness = () => {
  return (
    <div className={styles.businessContainer}>
      <h2 className={styles.heading}>Our Business</h2>
      <p className={styles.description}>
        Our main objective is to globally spread the <strong>Purity of Living</strong> that promotes
        <strong> Good Health</strong>, by supplying the <strong>Best Quality of Agro-Food Products</strong> 
        with Delightful Taste, Heavenly Aroma, and Flavors, which are high in nutritional value.
      </p>
      
      <p className={styles.description}>
        Our products, before supplying, are well-tested and certified by <strong>Quality Research 
        Organizations</strong> and have also been <strong>Approved by the Food Safety and Standards Authority of India (FSSAI)</strong>.
      </p>

      <h3 className={styles.subheading}>Our Commitment</h3>
      <p className={styles.description}>
        We care about the <strong>health and dietary satisfaction</strong> of every individual. This is what drives us to create
        <strong> innovative solutions</strong> in the agro sector. We invite Indian and global manufacturers, large or small-scale 
        regional distributors, agro-establishments, and stores to collaborate with us. Together, we can develop the agro-market for 
        the welfare of people worldwide by providing <strong>organic, rich-tasting, and healthy agro-food products</strong>.
      </p>

      <h3 className={styles.subheading}>Sustainability & Innovation</h3>
      <p className={styles.description}>
        For us, <strong>sustainability</strong> means integrating <strong>innovation with entrepreneurial responsibility</strong>.
        Our fundamental contribution to humankind is to continually provide the best resources through a long-term strategy that
        improves the <strong>quality of living</strong>.
      </p>

      <h3 className={styles.subheading}>Delivery Terms</h3>
      <p className={styles.description}>
        We trade and export <strong>all types of agricultural products</strong>. Our operations are not just limited to India;
        we export worldwide using various modes of transport like <strong>roadways and seaways</strong>. 
        Our mission is to promote good health by supplying <strong>pesticide-free, high-quality products</strong> across the globe.
      </p>
    </div>
  );
};


