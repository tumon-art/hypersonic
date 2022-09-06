import { Card } from "../../store/@types";
import featuredData from "../../store/featuredData";
import Featured from "../dls/card/Featured";
import styles from "./FeaturedCard.module.scss";

const FeaturedCard = () => {
  return (
    <div className={styles.main}>
      {featuredData.map((card: Card) => {
        return <Featured key={card.id} card={card} />;
      })}
    </div>
  );
};
export default FeaturedCard;
