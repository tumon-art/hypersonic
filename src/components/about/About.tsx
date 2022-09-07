import Btn from "../dls/btn/Btn";
import styles from "./About.module.scss";
const About = () => {
  return (
    <section id="about" className={styles.main}>
      <Btn nav> About </Btn>
      <h1>Reliable, Safe, Fast High speed broadband internet connection.</h1>
      <p>
        Hypersonic changes your lifestyle and letting you focus on the growth of
        your business by providing superfast broadband internet service.
      </p>
    </section>
  );
};
export default About;
