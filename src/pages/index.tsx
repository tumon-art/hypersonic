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

const Home: NextPage = () => {
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

        {/* ======= Featured Services Section =======  */}
        <section className={styles.featuredSect}>
          <FeaturedCard />
        </section>

        {/* ======= About Section =======  */}
        <About />

        {/* ======= Pricing Section =======  */}
        <Pricing />
      </section>

      {/* ======= Partner Section =======  */}
      <Partners />

      {/* ======= Footer Section =======  */}
      <Footer />
    </div>
  );
};

export default Home;
