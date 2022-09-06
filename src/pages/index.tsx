import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/header/Navbar";
import Hero from "../components/hero/Hero";
import useStore from "../store/mainStore";

import featuredData from "../store/featuredData";
import { Card } from "../store/@types";
import Featured from "../components/dls/card/Featured";
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
      <section>
        {featuredData.map((card: Card) => {
          return <Featured key={card.id} card={card} />;
        })}
      </section>
    </div>
  );
};

export default Home;
