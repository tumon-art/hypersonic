import Image from "next/image";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer id="footer" className={styles.main}>
      <div className={styles.footerHold}>
        <div className={styles.nameAndDesc}>
          <div className={styles.ImgAndText}>
            <div className={styles.imgHold}>
              <Image
                src="/roc1.png"
                className={styles.img}
                layout="fill"
                alt="img"
              />
            </div>

            <h3> Hypersonic</h3>
          </div>
          <p>
            Largest data & internet service provider in Bangladesh. We value
            your opinion and this why we want you to give us a call today.
          </p>
          <h4> Follow us on </h4>
        </div>
        {/* ==== CONTACT US  */}
        <div>Contact Us</div>

        {/* ==== Partner */}
        <div>We are proud members of</div>
      </div>

      <div className={styles.copyRight}>
        Copyright 2022 Hypersonic Services Ltd. | All Rights Reserved | Powered
        by 2M0N
      </div>
    </footer>
  );
};
export default Footer;
