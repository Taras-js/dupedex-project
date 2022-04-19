import type { NextPage } from "next";
import Head from "next/head";

import Counter from "../features/counter/Counter";
import styles from "../styles/Home.module.css";
import Products from "../features/products/Products";

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {/*<Counter />*/}
          <Products />
      </header>
    </div>
  );
};

export default IndexPage;
