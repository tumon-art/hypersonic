import Image from "next/image";
import styles from "./Hero.module.scss";
const Hero = () => {
  return (
    <div className={styles.main}>
      <div>Hello</div>

      <div className={styles.imgHold}>
        <Image
          className={styles.img}
          src="/iot.png"
          height="400px"
          width="400px"
          alt="img"
        />
      </div>
    </div>
  );
};
export default Hero;
