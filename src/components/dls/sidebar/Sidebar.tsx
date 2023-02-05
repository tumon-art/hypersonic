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
      {/* TO CLOSE TOP BAR  */}
      <div className={styles.close}></div>

      <div className={`${sidebar ? styles.main : styles.main__hide}`}>
        <div className={styles.nav}>
          <Btn side href="#about">
            About
          </Btn>
          <Btn side href="/">
            Home
          </Btn>
          <Btn side href="#contact">
            Contact
          </Btn>
          <Btn side href="#pricing">
            Pricing
          </Btn>
          <Btn side>Servers</Btn>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
