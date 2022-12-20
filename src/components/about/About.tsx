import Btn from "../dls/btn/Btn";
import styles from "./About.module.scss";
import Image from "next/image";
import React, { RefObject, useEffect, useRef, useState } from "react";
import { UseInterSect } from "../UseInterSect";

const ask = [
  {
    id: "1",
    title: "Triangle Internet For Gamer’s",
    text: "Uninterrupted and smooth online gaming is determined by your internet connection. We are based in Dhaka, Bangladesh and our company is one of the leading internet providers in the city. We are widely known for providing the best internet for gaming and now we make sure that our all user is enjoying the uninterrupted internet connection. Our company is among the top internet service provider with fiber optics infrastructure in Bangladesh and therefore if you are looking for the best broadband internet service providers for online gaming in Dhaka, look no further as we will be here to serve you.",
  },
  {
    id: "2",
    title: "Triangle Care For Customers",
    text: "Perhaps one of the main benefits of investing in our services is that you are sure of top-notch internet connectivity. In particular, we have cutting technologies and protocols that easily make us the perfect solution for your needs. We provide a speed home internet with excellent customer support and reliable installation that experiences no downtime. Our internet services are not capped or controlled in any way. We provide unlimited high-speed internet service for your needs.",
  },
];

const About = ({
  btnElement,
}: {
  btnElement: RefObject<HTMLButtonElement>;
}) => {
  const [show, setShow] = useState("");

  const aboutRef = useRef<HTMLDivElement>(null);

  const onScreen = UseInterSect(aboutRef, (entry) => {
    console.log(entry);
    console.log(entry.boundingClientRect.top, "entry");
    if (entry.boundingClientRect.top < 600) {
      btnElement.current!.style.display = "block";
    }
    if (entry.boundingClientRect.top > 600) {
      btnElement.current!.style.display = "none";
    }
  });
  console.log(onScreen);

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
