import Image from "next/image";
import Btn from "../dls/btn/Btn";
import styles from "./Hero.module.scss";
const Hero = () => {
  return (
    <div className={styles.main}>
      <div className={styles.titleDiv}>
        <h1>Hypersonic Internet</h1>
        <h1> Services Ltd.</h1>
        <p>
          {`Best internet service provider in Bangladesh which provides 
          fully dedicated, super fast, cost-effective, secured internet
          connection. We are promised to meeting your needs and
          delivering industry-leading customer service.`}
        </p>

        <div>
          <Btn hero> Get Started </Btn>
        </div>
      </div>

      <div className={styles.imgHold}>
        <Image
          className={styles.img}
          src="/iot.png"
          // height="400px"
          // width="400px"
          layout="fill"
          alt="img"
        />
      </div>
    </div>
  );
};
export default Hero;
