import type { NextPage } from "next";
import Head from "next/head";

import Counter from "../features/counter/Counter";
import styles from "../assets/styles/Home.module.css";
import { Header } from "../components/Header";

const IndexPage: NextPage = () => {
  return (
    <>
    <Head>
      <title>Dupe.dex</title>
    </Head>

      <Header />
      <main className={styles.main}>
        <Counter />
      </main>
    </>
  );
};

export default IndexPage;
