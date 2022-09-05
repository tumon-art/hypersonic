import useStore from "../../../store/mainStore";
import styles from "./MenuIcon.module.scss";

const MenuIcon = () => {
  const { setSidebar } = useStore();
  return (
    <svg
      onClick={setSidebar}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={styles.menuSvg}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75
5.25h16.5m-16.5 4.5h16.5m-16.5
4.5h16.5m-16.5 4.5h16.5"
      />
    </svg>
  );
};
export default MenuIcon;
