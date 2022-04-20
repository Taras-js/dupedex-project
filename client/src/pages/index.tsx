import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout, LayoutRow, LayoutItem } from '../components/Layout';

import Products from '../features/products/Products';

const IndexPage: NextPage = () => (
  <>
    <Head>
      <title>Dupe.dex</title>
    </Head>

    <Layout>
      <LayoutRow rowHeight={80} noResize>
        <LayoutItem itemWidth={0.6}>
          SearchBar
        </LayoutItem>
        <LayoutItem itemWidth={0.4}>
          Toolbar
        </LayoutItem>
      </LayoutRow>
      <LayoutRow rowHeight={700}>
        <LayoutItem itemWidth={0.9}>
          <Products />
        </LayoutItem>
        <LayoutItem itemWidth={370} noResize>
          Library
        </LayoutItem>
      </LayoutRow>
    </Layout>
  </>
);

export default IndexPage;
