import Image from "next/image";
import styles from "./Navbar.module.scss";

const Img = () => (
  <Image
    className={styles.img}
    src="/roc1.png"
    height="40"
    width="70"
    alt="img"
  />
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
   3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
    />
  </svg>
);

const Navbar = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <Img />
        <span> HyperSonic</span>
      </div>

      <div className={styles.nav}>
        <div className={styles.btn}>About</div>
        <div className={styles.btn}>Home</div>
        <div className={styles.btn}>Contact</div>
        <div className={styles.btn}>Pricing</div>

        <div className={styles.server}>
          <ServerSvg />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
