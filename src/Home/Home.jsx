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

      {/* Content Sections */}
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Welcome to SR EXIM
          Connecting Global Market</h1>
        </header>

        <section className={styles.intro}>
          <p>
        <strong>SR EXIM Connecting  Global Market </strong>  was newly found in the year 2024, we have been able to efficiently satisfy the requirements for various food-based goods since they are needed practically everywhere. We have constantly been a reputable supplier, trader, and exporter of a wide range of food items.
          </p>
        </section>

        <section className={styles.products}>
          <h2>Our Products</h2>
          <p>
          <strong>SR EXIM Connecting  Global Market </strong>  Overseas is a Prominent & Leading Merchant Manufacturer, Supplier, and Trader of all types of Authentic Agro-products like:
          </p>
          <ul>
            <li>Indian Rice (Basmati & Non-Basmati)</li>
            <li>Bitter Gourd</li>
            <li>coconuts</li>
            <li>Drumstics</li>
            <li>Eggs</li>
            <li>Green chilli</li>
            <li>Garlic,Ginger,mirchi,onion,pumpkin,spices  etc., which are completely Pesticides Free.</li>
          </ul>
        </section>

        <section className={styles.mission}>
          <h2>Our Mission</h2>
          <p>
            As one of the innovation-driven businesses,  <strong>SR EXIM Connecting  Global Market</strong>  Overseas aims to deliver its products and services that significantly improve people’s lives by supplying them the Best Quality Products.
          </p>
        </section>
      </div>
    </div>
  );
};
