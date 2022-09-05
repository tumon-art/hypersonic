import styles from "./Btn.module.scss";
import classNames from "classnames";

interface props {
  nav?: boolean;
  hero?: boolean;
  children: string;
  side?: boolean;
}

const Btn = ({ hero, side, nav, children }: props) => {
  const classes = classNames({
    [styles.btnNav]: nav,
    [styles.btnHero]: hero,
    [styles.btnSidebar]: side,
  });
  return <div className={classes}> {children} </div>;
};
export default Btn;
