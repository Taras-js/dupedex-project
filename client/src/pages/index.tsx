import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout, LayoutRow, LayoutItem } from '../components/Layout';

import Counter from '../features/counter/Counter';
import Icon from '../features/Icon/Icon';

const IndexPage: NextPage = () => (
  <>
    <Head>
      <title>Dupe.dex</title>
    </Head>

    <Layout>
      <LayoutRow rowHeight={80} noResize>
        <LayoutItem itemWidth={0.6}>
          <Icon type="comeAhead" width={28} height={28} />
          <Icon type="comeBack" width={28} height={28} />
          <Icon type="copyURL" width={28} height={28} />
          <Icon type="ellipsis" width={28} height={28} />
          <Icon type="exit" width={28} height={28} />
          <Icon type="darkmode" width={28} height={28} />
          <Icon type="messenger" width={28} height={28} />
          <Icon type="plus" width={28} height={28} />
          <Icon type="negativeReviews" width={28} height={28} />
          <Icon type="positiveReviews" width={28} height={28} />
          <Icon type="productClaims" width={28} height={28} />
          <Icon type="question" width={28} height={28} />
          <Icon type="save" width={28} height={28} />
          <Icon type="search" width={28} height={28} />
          <Icon type="tutorial" width={28} height={28} />
          <Icon type="share" width={28} height={28} />
          <Icon type="showOrHideReviews" width={28} height={28} />
          <Icon type="writeNotes" width={28} height={28} />
        </LayoutItem>
        <LayoutItem itemWidth={0.4}>
          Toolbar
        </LayoutItem>
      </LayoutRow>
      <LayoutRow rowHeight={700}>
        <LayoutItem itemWidth={0.9}>
          <Counter />
        </LayoutItem>
        <LayoutItem itemWidth={370} noResize>
          Library
        </LayoutItem>
      </LayoutRow>
    </Layout>
  </>
);

export default IndexPage;
