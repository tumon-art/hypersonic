import styles from "./Partners.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
import { alvarion, dlink, gp, huawei, teletalk, walton } from "../../../public";

const arr = [alvarion, dlink, gp, huawei, teletalk, walton];

const Partners = (al) => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 5,
  };

  return (
    <section id="partners" className={styles.main}>
      <h1>Our Respected Partners</h1>
      <div>
        <Slider {...settings}>
          {arr.map((e, i) => {
            return (
              <div key={i} className={styles.imgHold}>
                <Image src={e} layout="fill" alt="img" className={styles.img} />
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};
export default Partners;
