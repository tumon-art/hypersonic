import { useEffect, useRef } from "react";
import { Card } from "../../store/@types";
import featuredData from "../../store/featuredData";
import styles from "./FeaturedCard.module.scss";

const FeaturedCard = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // InterSection Ovserver
    const ovserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log(entry, "entry");
        entry.target.classList.toggle(styles["active"], entry.isIntersecting);
        if (entry.isIntersecting) ovserver.unobserve(entry.target);
      });
    });

    cardsRef.current?.childNodes.forEach((node) => {
      ovserver.observe(node as Element);
    });
  }, []);

  return (
    <div ref={cardsRef} className={styles.main}>
      {featuredData.map((card: Card) => {
        return (
          <div key={card.id} className={styles.card}>
            <div className={styles.topBox}></div>
            <div className={styles.bottomBox}></div>
            <div className={styles.svg}> {card.svg} </div>
            <h1> {card.title} </h1>
            <p> {card.desc} </p>
          </div>
        );
      })}
    </div>
  );
};
export default FeaturedCard;
