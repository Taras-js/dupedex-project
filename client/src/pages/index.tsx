import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout, LayoutRow, LayoutItem } from '../components/Layout';

import Counter from '../features/counter/Counter';

const IndexPage: NextPage = () => (
  <>
    <Head>
      <title>Dupe.dex</title>
    </Head>

    <Layout>
      <LayoutRow rowHeight={0.1}>
        <LayoutItem itemWidth={0.6}>
          <div>
            SearchBar
          </div>
        </LayoutItem>
        <LayoutItem itemWidth={0.4}>
          <div>
            ToolBar
          </div>
        </LayoutItem>
      </LayoutRow>
      <LayoutRow rowHeight={0.9}>
        <LayoutItem itemWidth={0.8}>
          <div>
            <Counter />
          </div>
        </LayoutItem>
        <LayoutItem itemWidth={0.2}>
          <div>
            Library
          </div>
        </LayoutItem>
      </LayoutRow>
    </Layout>
  </>
);

export default IndexPage;
