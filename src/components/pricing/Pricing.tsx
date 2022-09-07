import pricingData from "../../store/pricingData";
import styles from "./Pricing.module.scss";

const Pricing = () => {
  return (
    <section id="pricing" className={styles.main}>
      <div className={styles.cardHold}>
        {pricingData.map<JSX.Element>((each) => {
          return (
            <div className={styles.card} key={each.id}>
              <h3> {each.speed} </h3>

              {/* === Price */}
              <div>
                <h1>
                  {each.price}
                  <span> / month</span>
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Pricing;
