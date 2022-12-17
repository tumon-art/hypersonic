import styles from "./Btn.module.scss";
import classNames from "classnames";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface props {
  nav?: boolean;
  hero?: boolean;
  children: any;
  side?: boolean;
  card?: boolean;
  href?: string;
}

const Btn = ({ card, hero, side, nav, href = "", children }: props) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(divRef.current!.offsetTop);
  });
  const classes = classNames({
    [styles.btnNav]: nav,
    [styles.btnHero]: hero,
    [styles.btnSidebar]: side,
    [styles.btnHero__card]: card,
  });
  return (
    <Link href={href}>
      <div ref={divRef} className={classes}>
        {" "}
        {children}{" "}
      </div>
    </Link>
  );
};
export default Btn;
