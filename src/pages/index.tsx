import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/header/Navbar";
import Hero from "../components/hero/Hero";
import useStore from "../store/mainStore";
import FeaturedCard from "../components/featured/FeaturedComp";
import About from "../components/about/About";
import Pricing from "../components/pricing/Pricing";

const Home: NextPage = () => {
  const { sidebar } = useStore();
  return (
    <div>
      <Head>
        <title>Hypersonic</title>
        <meta name="description" content="HyperSonic Internet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
    </div>
  );
};

export default Home;
