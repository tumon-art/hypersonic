import Image from "next/image";
import useStore from "../../store/mainStore";
import Btn from "../dls/btn/Btn";
import styles from "./Navbar.module.scss";
import Sidebar from "../dls/sidebar/Sidebar";
import MenuIcon from "../dls/icon/MenuIcon";
import { useEffect, useRef } from "react";

const Img = () => (
  <Image className={styles.img} src="/roc1.png" layout="fill" alt="img" />
);

const Navbar = () => {
  const setSidebar = useStore((state) => state.setSidebar);
  const sidebar = useStore((state) => state.sidebar);

  const sectionRef = useRef<HTMLDivElement>(null);
  const mainName = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Handle Scroll Function
    const handleScroll = () => {
      if (window.scrollY > 50) {
        sectionRef.current!.classList.add(styles["active"]);
        mainName.current!.style.display = "none";
      } else {
        sectionRef.current!.classList.remove(styles["active"]);
        mainName.current!.style.display = "block";
      }
    };

    // ADD EVENT LISTERNER
    window.addEventListener("scroll", handleScroll);

    // REMOVE EVENT LISTERNER
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <Sidebar />
      <div className={styles.main}>
        <div className={styles.logo}>
          <div className={styles.imgHold}>
            <Img />
          </div>
          <span id="spaaan" ref={mainName}>
            HyperSonic
          </span>
        </div>

        <div className={styles.nav}>
          <Btn nav href="#about">
            About
          </Btn>
          <Btn nav href="/">
            Home
          </Btn>
          <Btn nav href="#contact">
            Contact
          </Btn>
          <Btn nav href="#pricing">
            Pricing
          </Btn>
          <Btn nav>Servers</Btn>

          <div className={styles.server}></div>
        </div>

        <MenuIcon />
      </div>
    </section>
  );
};
export default Navbar;
