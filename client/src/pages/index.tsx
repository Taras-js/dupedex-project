import type { NextPage } from "next";
import Head from "next/head";

import Counter from "../features/counter/Counter";
import styles from "../styles/Home.module.css";

import Icon from "/features/Icon/Icon";

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Counter />
      </header>
      <Icon classname={'test'} type='tutorial' />
    </div>
  );
};

export default IndexPage;