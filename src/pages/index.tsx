import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/header/Navbar";
import Hero from "../components/hero/Hero";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hypersonic</title>
        <meta name="description" content="HyperSonic Internet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
