import styles from "./Partners.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { alvarion, dlink, gp, huawei, teletalk, walton } from "../../../public";

const arr = [alvarion, dlink, gp, huawei, teletalk, walton];

const Partners = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    arrow: false,
    bottom: false,
    slidesToShow: 4,
  };

  return (
    <section id="partners" className={styles.main}>
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
