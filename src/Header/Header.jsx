import styles from "./Header.module.css"; // Import CSS module

export const Header = () => {
  return (
    <div className={styles.headContainer}>
      {/* Logo Section */}
      <div className={styles.logoSection}>
        <img src="EXIM 02.jpg" alt="Company Logo" className={styles.logo} />
      </div>

      {/* Content Section */}
      <div className={styles.contentSection}>
  
        <h1>SR EXIM</h1>
        <p>Connecting  Global Market</p>
        
      </div>
    </div>
  );
};
