import { Card } from "../../../store/@types";
import styles from "./Featured.module.scss";

const Featured = ({ card }: { card: Card }) => {
  return (
    <div className={styles.main}>
      <div className={styles.svg}> {card.svg} </div>
      <h1> {card.title} </h1>
      <p> {card.desc} </p>
    </div>
  );
};
export default Featured;
