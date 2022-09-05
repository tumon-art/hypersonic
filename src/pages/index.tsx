import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/header/Navbar";
import Hero from "../components/hero/Hero";
import useStore from "../store/mainStore";

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
    </div>
  );
};

export default Home;
