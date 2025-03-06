import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Home.module.css"; // Import CSS module

export const Home = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500, // 2 seconds
    arrows: false, // Hide arrows for a clean look
  };

  return (
    <div className={styles.home}>
      {/* Banner Section with Image Slider */}
      <section className={styles.banner}>
        <Slider {...settings}>
          <div className={styles.slide}>
            <img src="rice.avif" alt="rice" />
          </div>
          <div className={styles.slide}>
            <img src="bittergourd.jpg" alt="bittergourd" />
          </div>
          <div className={styles.slide}>
            <img src="coconut1.jpg" alt="coconut" />
          </div>
          <div className={styles.slide}>
            <img src="moringa.webp" alt="drumsticks" />
          </div>
          <div className={styles.slide}>
            <img src="eggs.jpg" alt="eggs" />
          </div>
          <div className={styles.slide}>
            <img src="greenchilli.jpg" alt="greenchilli" />
          </div>
          <div className={styles.slide}>
            <img src="garlic.jpg" alt="garlic" />
          </div>
          <div className={styles.slide}>
            <img src="ginger.jpg" alt="ginger" />
          </div>
          <div className={styles.slide}>
            <img src="mirchi.avif" alt="mirchi" />
          </div>
          <div className={styles.slide}>
            <img src="onion.jpg" alt="onion" />
          </div>
          <div className={styles.slide}>
            <img src="pumpkin.jpg" alt="pumpkin" />
          </div>
          <div className={styles.slide}>
            <img src="spices.avif" alt="spices" />
          </div>
        </Slider>
      </section>
    </div>
  );
};
