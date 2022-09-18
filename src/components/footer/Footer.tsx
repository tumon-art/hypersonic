import Image from "next/image";
import { AddressSvg, EmailSvg, PhoneSvg } from "../contact/Contact";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer id="footer" className={styles.main}>
      <div className={styles.footerHold}>
        <section className={styles.nameAndDesc}>
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
        </section>

        {/* ==== CONTACT US  */}
        <section className={styles.contSect}>
          <h3> Contact Us </h3>
          <div>
            <AddressSvg />
            <p>Wakil Tower, Badda Link Road</p>
          </div>
          <div>
            <EmailSvg />
            <p>info@hypersonic.com.bd</p>
          </div>
          <div>
            <PhoneSvg />
            <p> +88-09666770444 </p>
          </div>
        </section>

        {/* ==== Partner */}
        <section>
          <h3>We are proud members of</h3>
        </section>
      </div>

      <div className={styles.copyRight}>
        Copyright 2022 Hypersonic Services Ltd. | All Rights Reserved | Powered
        by 2M0N
      </div>
    </footer>
  );
};
export default Footer;
