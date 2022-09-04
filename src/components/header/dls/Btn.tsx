import styles from "./Btn.module.scss";

const Btn = ({ hero, children }: { hero?: boolean; children: string }) => {
  return <div className={hero ? styles.btnHero : styles.btn}> {children} </div>;
};
export default Btn;
