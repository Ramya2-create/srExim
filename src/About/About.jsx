import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h2>About Us</h2>
      <p>
        We at <strong>SR EXIM Connecting international Markets</strong> have been
        researching the steadily rising need for various types of food products in
        the market, and as a consequence, started to impart our expertise in the field.
        For a long time, we have provided a comprehensive range of food-based goods, including:
      </p>
      <ul>
        <li>Creamy Sela Rice</li>
        <li>Chana Dal</li>
        <li>HMT Rice</li>
        <li>Rawa Rice</li>
        <li>And many more...</li>
      </ul>
      <p>
        At our facility, based in <strong>Secunderabad, Telangana, India</strong>, we only receive
        the highest quality products from the most recognised and trustworthy market vendors.
        We do, however, ensure that we test the procured batches on our end as well.
        Our affordable, high-quality products have helped us significantly advance our position in the market.
      </p>
      <h3>Key Facts of SR EXIM Connecting international Markets:</h3>
      <table className={styles.infoTable}>
        <tbody>
          <tr>
            <td><strong>Nature of Business</strong></td>
            <td>Supplier, Trader and Exporter</td>
          </tr>
          <tr>
            <td><strong>Year of Establishment</strong></td>
            <td>2024</td>
          </tr>
          <tr>
            <td><strong>Company Location</strong></td>
            <td>SR EXIM, H no 1-5-1081, Father Balaiah Nagar Colony, Layola Academy Road, Old Alwal, Secunderabad - 500 010, Telangana.</td>
          </tr>
          <tr>
            <td><strong>Brand Name</strong></td>
            <td>Multiple Brands</td>
          </tr>
          <tr>
            <td><strong>No. of Employees</strong></td>
            <td></td>
          </tr>
          <tr>
            <td><strong>Import Export Code</strong></td>
            <td></td>
          </tr>
          <tr>
            <td><strong>Banker</strong></td>
            <td></td>
          </tr>
          <tr>
            <td><strong>GST No.</strong></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default About;
