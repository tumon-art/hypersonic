import Btn from "../dls/btn/Btn";
import styles from "./About.module.scss";
import Image from "next/image";
import React, { RefObject, useRef } from "react";
import { useInterSect } from "../useInterSect";

const About = ({
  btnElement,
}: {
  btnElement: RefObject<HTMLButtonElement>;
}) => {

  const aboutRef = useRef<HTMLDivElement>(null);

  useInterSect(aboutRef, (entry) => {
    if (entry.boundingClientRect.top < 600) {
      btnElement.current!.style.display = "block";
    }
    if (entry.boundingClientRect.top > 600) {
      btnElement.current!.style.display = "none";
    }
  });

  return (
    <section ref={aboutRef} id="about" className={styles.main}>
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
        <div className={styles.imgCard}>
          <div className={styles.imgHold}>
            <Image
              src="/iot3.png"
              className={styles.img}
              layout="fill"
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
