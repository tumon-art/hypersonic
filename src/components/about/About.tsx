import Btn from "../dls/btn/Btn";
import styles from "./About.module.scss";
import Image from "next/image";
import { RefObject, useEffect, useRef, useState } from "react";

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

  useEffect(() => {
    // InterSection Ovserver
    const ovserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry.boundingClientRect.top, "entry");
        if (entry.isIntersecting) {
          console.log("show");
          btnElement.current!.style.display = "block";
        }
        if (entry.boundingClientRect.top > 600) {
          console.log("hide");
          btnElement.current!.style.display = "none";
        }

        // if (entry.isIntersecting) ovserver.unobserve(entry.target);
      });
    });

    ovserver.observe(aboutRef.current as Element);
  }, []);

  return (
    <section ref={aboutRef} id="about" className={styles.main}>
      <Btn nav> About </Btn>
      {/* ===== ASK QUESTIONS SECTION  */}
      {/* <div className={styles.ask}> */}
      {/*   {ask.map((e) => { */}
      {/*     return ( */}
      {/*       <div key={e.id}> */}
      {/*         <div className={styles.titleHold}> */}
      {/*           <h4 onClick={() => setShow(e.id)}> {e.title} </h4> */}
      {/*           <span */}
      {/*             onClick={() => (show == e.id ? setShow("") : setShow(e.id))} */}
      {/*           > */}
      {/*             {show == e.id ? "-" : "+"} */}
      {/*           </span> */}
      {/*         </div> */}

      {/*         {show == e.id && <p> {e.text}</p>} */}
      {/*       </div> */}
      {/*     ); */}
      {/*   })} */}
      {/* </div> */}
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
