import Image from "next/image";
import useStore from "../../store/mainStore";
import Btn from "../dls/btn/Btn";
import styles from "./Navbar.module.scss";
import Sidebar from "../dls/sidebar/Sidebar";
import MenuIcon from "../dls/icon/MenuIcon";
import ServerSvg from "../dls/icon/ServerSvg";

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
          <Btn>About</Btn>
          <Btn>Home</Btn>
          <Btn>Contact</Btn>
          <Btn>Pricing</Btn>

          <div className={styles.server}>
            <ServerSvg />
          </div>
        </div>

        <MenuIcon />
      </div>
    </>
  );
};
export default Navbar;
