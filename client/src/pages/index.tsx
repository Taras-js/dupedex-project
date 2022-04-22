import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout, LayoutRow, LayoutItem } from '../components/UIKit/Layout';
import { Panel } from '../components/UIKit/Panel';

import { ProductComponent } from '../components/ProductComponent';

const IndexPage: NextPage = () => (
  <>
    <Head>
      <title>Dupe.dex</title>
    </Head>

    <Layout>
      <LayoutRow rowHeight={80} noResize>
        <LayoutItem itemWidth={0.6}>
          <Panel>
            SearchBar
          </Panel>
        </LayoutItem>
        <LayoutItem itemWidth={0.4}>
          <Panel>
            Toolbar
          </Panel>
        </LayoutItem>
      </LayoutRow>
      <LayoutRow rowHeight={700}>
        <LayoutItem itemWidth={1}>
          <div style={{ display: 'flex', height: '100%' }}>
            <ProductComponent />
          </div>
        </LayoutItem>
        <LayoutItem itemWidth={370} noResize>
          <Panel>
            Library
          </Panel>
        </LayoutItem>
      </LayoutRow>
    </Layout>
  </>
);

export default IndexPage;
