import styles from "./Sidebar.module.scss";
import useStore from "../../../store/mainStore";
import Btn from "../btn/Btn";
import MenuIcon from "../icon/MenuIcon";
import ServerSvg from "../icon/ServerSvg";

const Sidebar = () => {
  const { sidebar, setSidebar } = useStore();
  return (
    <div
      onClick={setSidebar}
      className={`${sidebar ? styles.main : styles.main__hide}`}
    >
      <div className={styles.nav}>
        <Btn>About</Btn>
        <Btn>Home</Btn>
        <Btn>Contact</Btn>
        <Btn>Pricing</Btn>
      </div>

      <div className={styles.footer}>
        <MenuIcon />
        <ServerSvg />
      </div>
    </div>
  );
};
export default Sidebar;
