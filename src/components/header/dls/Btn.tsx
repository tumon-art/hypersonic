import styles from "./Btn.module.scss";

const Btn = ({ children }: { children: string }) => {
  return <div className={styles.btn}> {children} </div>;
};
export default Btn;
