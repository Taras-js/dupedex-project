import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import Counter from '../features/counter/Counter';
import styles from '../assets/styles/Home.module.css';

const IndexPage: NextPage = () => (
  <>
    <Head>
      <title>Dupe.dex</title>
    </Head>
    <main className={styles.main}>
      <Counter />
    </main>
  </>
);

export default IndexPage;
