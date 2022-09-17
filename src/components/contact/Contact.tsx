import Btn from "../dls/btn/Btn";
import styles from "./Contact.module.scss";
import Map from "./Map";

const Contact = () => {
  return (
    <section id="contact" className={styles.section}>
      <Btn nav> Contact </Btn>
      <h1 className={styles.mainH1}> Talk to us </h1>
      <p className={styles.mainP}>
        Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
        adipisci expedita at voluptas atque vitae autem.
      </p>

      <div className={styles.flex}>
        {/* === Address === */}
        {/* === ICON & DESC HOLD */}
        <div className={styles.iconNh2__first}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723
                0l.028-.015.071-.041a16.975 16.975 0 001.144-.742
                19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98
                3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837
                3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975
                0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
          <h2>Our Address</h2>
          <p>Wakil Tower, Badda Link Road, Gulshan-1, Dhaka-1212 Bangladesh</p>
        </div>
        {/* === EMAIL & CALL */}
        <div className={styles.iconNh2}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M17.834 6.166a8.25 8.25 0 100 11.668.75.75 0 011.06
                1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98
                0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722
                0 0121.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28
                1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25
                5.25 0 11-.82-6.26V8.25a.75.75 0 011.5 0V12c0 .682.208
                1.27.509 1.671.3.401.659.579.991.579.332 0
                .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.22
                2 0 00-2.416-5.834zM15.75 12a3.75 3.75 0 10-7.5 0 3.75
                3.75 0 007.5 0z"
              clipRule="evenodd"
            />
          </svg>

          <h2>Mail Address</h2>
          <p>info@hypersonic.com.bd</p>
        </div>

        {/* === CALL US  */}
        <div className={styles.iconNh2}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0
                01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-4.72
                4.72a.75.75 0 11-1.06-1.06l4.72-4.72h-2.69a.75.75
                0 01-.75-.75z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819
                1.42l1.105 4.423a1.875 1.875 0 01-.694
                1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285
                11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875
                1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959
                1.42 1.82V19.5a3 3 0 01-3
                3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clipRule="evenodd"
            />
          </svg>

          <h2>Call Address</h2>
          <p> +88-09666770444 </p>
        </div>
      </div>
      <div className={styles.sec}>
        <h1> map </h1>
        <div className={styles.mapHold}></div>
        <Map />
        <div className={styles.formHold}>
          <form className={styles.form}>
            <div>
              <input placeholder="Your Name" type="text" />
              <input placeholder="Your Email" type="text" />
            </div>
            <input
              placeholder="Subject"
              className={styles.iSubject}
              type="text"
            />
            <textarea placeholder="Message" className={styles.textA} />

            <Btn card> Send Message </Btn>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
