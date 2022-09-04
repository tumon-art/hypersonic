import Image from "next/image";
import Btn from "./dls/Btn";
import styles from "./Navbar.module.scss";

const Img = () => (
  <Image className={styles.img} src="/roc1.png" layout="fill" alt="img" />
);

const ServerSvg = () => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={styles.serverSvg}
  >
    <title> FTP Servers</title>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25
   3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 
   3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 
   15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0
    00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0
     002.25 2.25zm.75-12h9v9h-9v-9z"
    />
  </svg>
);

const MenuSvg = () => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={styles.menuSvg}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 4.5h14.25M3 
  9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
    />
  </svg>
);

const Navbar = () => {
  return (
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

      <MenuSvg />
    </div>
  );
};
export default Navbar;
