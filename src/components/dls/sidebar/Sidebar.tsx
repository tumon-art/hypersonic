import styles from "./Sidebar.module.scss";
import useStore from "../../../store/mainStore";
import Btn from "../btn/Btn";

const Sidebar = () => {
  const { sidebar, setSidebar, setSidebarFalse } = useStore();
  return (
    <div
      onClick={setSidebarFalse}
      className={`${sidebar ? styles.container : styles.container__hide}`}
    >
      <div className={`${sidebar ? styles.main : styles.main__hide}`}>
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
