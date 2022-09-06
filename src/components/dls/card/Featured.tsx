import { Card } from "../../../store/@types";
import styles from "./Featured.module.scss";

const Featured = ({ card }: { card: Card }) => {
  return <div key={card.id}> {card.title} </div>;
};
export default Featured;
