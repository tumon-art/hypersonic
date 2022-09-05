import Image from "next/image";
import useStore from "../../store/mainStore";
import Btn from "../dls/btn/Btn";
import styles from "./Navbar.module.scss";
import Sidebar from "../dls/sidebar/Sidebar";
import MenuIcon from "../dls/icon/MenuIcon";

const Img = () => (
  <Image className={styles.img} src="/roc1.png" layout="fill" alt="img" />
);

const Navbar = () => {
  const { sidebar, setSidebar } = useStore();
  console.log(sidebar);
  return (
    <>
      <Sidebar />
      <div className={styles.main}>
        <div className={styles.logo}>
          <div className={styles.imgHold}>
            <Img />
          </div>
          <span> HyperSonic</span>
        </div>

        <div className={styles.nav}>
          <Btn nav>About</Btn>
          <Btn nav>Home</Btn>
          <Btn nav>Contact</Btn>
          <Btn nav>Pricing</Btn>
          <Btn nav>Servers</Btn>

          <div className={styles.server}></div>
        </div>

        <MenuIcon />
      </div>
    </>
  );
};
export default Navbar;
