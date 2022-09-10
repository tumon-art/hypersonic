import Btn from "../dls/btn/Btn";
import styles from "./About.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className={styles.main}>
      <Btn nav> About </Btn>
      <div className={styles.flexCont}>
        <div className={styles.textHold}>
          <h1>
            Reliable, Safe, Fast High speed broadband internet connection.
          </h1>
          <p>
            Hypersonic changes your lifestyle and letting you focus on the
            growth of your business by providing superfast broadband internet
            service.
          </p>
        </div>

        {/* ===== IMAGE SECTION  */}
        <div>
          <div className={styles.imgHold}>
            <Image src="/iot.png" layout="fill" alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
