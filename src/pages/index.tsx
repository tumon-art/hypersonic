import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/header/Navbar";
import Hero from "../components/hero/Hero";
import FeaturedCard from "../components/featured/FeaturedComp";
import About from "../components/about/About";
import Pricing from "../components/pricing/Pricing";
import Footer from "../components/footer/Footer";
import Partners from "../components/partners/Partners";
import { useEffect, useRef } from "react";
import OurBlog from "../components/ourBlog/OurBlog";
import Contact from "../components/contact/Contact";

const Home: NextPage = () => {
  const btnElement = useRef<HTMLButtonElement>(null);

  const onBtnClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // === WINDOW EVENT
  useEffect(() => {
    function handleScroll() {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 1200) {
        btnElement.current!.style.display = "block";
      } else {
        btnElement.current!.style.display = "none";
      }
    }

    // Add Event Listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Head>
        <title>Hypersonic</title>
        <meta name="description" content="HyperSonic Internet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.section}>
        <Navbar />

        <section id="main">
          <Hero />
        </section>

        {/* ======= Featured Services Section ======= */}
        <section className={styles.featuredSect}>
          <FeaturedCard />
        </section>

        {/* ======= About Section =======  */}
        <About />

        {/* ======= Pricing Section =======  */}
        <Pricing />

        {/* ======= Our Blog Section =======  */}
        <OurBlog />

        {/* ======= Contact Section =======  */}
        <Contact />
      </section>

      {/* ======= Partner Section =======  */}
      <Partners />

      {/* ======= Footer Section =======  */}
      <Footer />

      <button onClick={onBtnClick} ref={btnElement} className={styles.top}>
        ^
      </button>
    </div>
  );
};

export default Home;
