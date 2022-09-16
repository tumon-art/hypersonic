import Btn from "../dls/btn/Btn";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section className={styles.section}>
      <Btn nav> Contact </Btn>
      <h1 className={styles.mainH1}>Contact Us</h1>
      <p className={styles.mainP}>
        Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
        adipisci expedita at voluptas atque vitae autem.
      </p>

      <div>
        {/* === Address === */}
        <div></div>
        {/* === EMAIL & CALL */}
        <div></div>
      </div>
    </section>
  );
};
export default Contact;
