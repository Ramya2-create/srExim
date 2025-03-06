import React from 'react';
import styles from './Product.module.css'; // Import the CSS module

export const Product = () => {
  return (
    <div className={styles.productPage}>
      <h1 className={styles.productTitle}>Spicy Vegetable & Rice Blend with Coconut and Eggs</h1>
      
      <section className={styles.productDescription}>
        <p>
          A perfect fusion of wholesome ingredients, this <strong>Spicy Vegetable & Rice Blend</strong> is a must-try for anyone who loves bold, vibrant flavors! Combining the rich taste of rice with the earthy flavors of <strong>bittergourd</strong>, <strong>drumsticks</strong>, and <strong>pumpkin</strong>, all balanced by the smooth, natural sweetness of <strong>coconut</strong>, this dish is a feast for both the eyes and the taste buds. Enhanced with a blend of aromatic <strong>spices</strong>, fresh <strong>garlic</strong>, <strong>ginger</strong>, <strong>green chilies</strong>, and a touch of <strong>onion</strong>, this product offers a hearty, healthy meal. Add a boiled <strong>egg</strong> for the perfect protein boost, making this dish both satisfying and nourishing.
        </p>
      </section>

      <section className={styles.keyFeatures}>
        <h2>Key Features:</h2>
        <ul>
          <li><strong>Rice:</strong> A fluffy, aromatic base for the dish.</li>
          <li><strong>Bittergourd:</strong> Adds a touch of bitterness, rich in nutrients.</li>
          <li><strong>Coconut:</strong> Smoothens the flavors with natural sweetness and healthy fats.</li>
          <li><strong>Drumsticks:</strong> Packed with minerals and a natural, earthy flavor.</li>
          <li><strong>Eggs:</strong> A complete source of protein and a filling addition to the dish.</li>
          <li><strong>Spices:</strong> A blend of traditional spices for that perfect Indian kick.</li>
          <li><strong>Garlic & Ginger:</strong> Adds bold and aromatic flavors to the dish.</li>
          <li><strong>Onion & Green Chili:</strong> For an extra punch of flavor and spice.</li>
          <li><strong>Pumpkin:</strong> Soft and sweet, balancing the stronger flavors.</li>
        </ul>
      </section>

      <section className={styles.howToUse}>
        <h2>How to Use:</h2>
        <ol>
          <li><strong>Ready-to-Eat:</strong> Heat and serve as a comforting, nourishing meal.</li>
          <li><strong>Add to Your Favorite Dish:</strong> Use as a base for curries, stir-fries, or as a side dish to your main meal.</li>
          <li><strong>Customization:</strong> Feel free to add your favorite protein or vegetables for a personalized touch.</li>
        </ol>
      </section>

      <section className={styles.ingredients}>
        <h2>Ingredients:</h2>
        <ul>
          <li>Rice</li>
          <li>Bittergourd</li>
          <li>Coconut</li>
          <li>Drumsticks</li>
          <li>Eggs</li>
          <li>Green Chili</li>
          <li>Garlic</li>
          <li>Ginger</li>
          <li>Mirchi (Chili)</li>
          <li>Onion</li>
          <li>Pumpkin</li>
          <li>Spices (Turmeric, Cumin, Coriander, Mustard Seeds, etc.)</li>
        </ul>
      </section>

  


   
    </div>
  );
}


