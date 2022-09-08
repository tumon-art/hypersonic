import styles from "./Btn.module.scss";
import classNames from "classnames";

interface props {
  nav?: boolean;
  hero?: boolean;
  children: any;
  side?: boolean;
  card?: boolean;
}

const Btn = ({ card, hero, side, nav, children }: props) => {
  const classes = classNames({
    [styles.btnNav]: nav,
    [styles.btnHero]: hero,
    [styles.btnSidebar]: side,
    [styles.btnHero__card]: card,
  });
  return <div className={classes}> {children} </div>;
};
export default Btn;
