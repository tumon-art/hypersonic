import styles from "./Sidebar.module.scss";
import useStore from "../../../store/mainStore";
import Btn from "../btn/Btn";

const Sidebar = () => {
  const { sidebar, setSidebar } = useStore();
  return (
    <div onClick={() => sidebar && setSidebar} className={styles.container}>
      <div
        onClick={setSidebar}
        className={`${sidebar ? styles.main : styles.main__hide}`}
      >
        <div className={styles.nav}>
          <Btn side>About</Btn>
          <Btn side>Home</Btn>
          <Btn side>Contact</Btn>
          <Btn side>Pricing</Btn>
          <Btn side>Servers</Btn>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
