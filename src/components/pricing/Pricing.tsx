import pricingData from "../../store/pricingData";
import Btn from "../dls/btn/Btn";
import styles from "./Pricing.module.scss";

const Pricing = () => {
  return (
    <section id="pricing" className={styles.main}>
      <Btn nav> Pricing </Btn>
      <h1>Most Popular Packages</h1>
      <p className={styles.p}>Choose The Best Package That Suits You</p>
      <div className={styles.cardHold}>
        {pricingData.map<JSX.Element>((each) => {
          return (
            <div className={styles.card} key={each.id}>
              <h3> {each.speed} </h3>

              {/* === Price */}
              <h1>
                <span className={styles.h1Span1}>৳</span>
                <span className={styles.price}> {each.price} </span>
                <span> / month</span>
              </h1>

              {each.features.map((e, i) => {
                return (
                  <div className={styles.features} key={i}>
                    {e}
                  </div>
                );
              })}

              {/* <button>{each.btnText}</button> */}
              <Btn card> {each.btnText} </Btn>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Pricing;
