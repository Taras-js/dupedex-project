import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout, LayoutRow, LayoutItem } from '../components/Layout';

import Counter from '../features/counter/Counter';
import Library from '../components/Library/Library';
const sets = [
  {
    products: [
      {
        img: "https://kartinkin.net/uploads/posts/2021-07/thumbs/1625151191_43-kartinkin-com-p-drakon-art-art-krasivo-50.jpg",
      },
      {
        img: "https://kartinkin.net/uploads/posts/2021-07/thumbs/1625151191_43-kartinkin-com-p-drakon-art-art-krasivo-50.jpg",
      },
      {
        img: "https://kartinkin.net/uploads/posts/2021-07/thumbs/1625151191_43-kartinkin-com-p-drakon-art-art-krasivo-50.jpg",
      },
      {
        img: "https://kartinkin.net/uploads/posts/2021-07/thumbs/1625151191_43-kartinkin-com-p-drakon-art-art-krasivo-50.jpg",
      },
    ],
    title: "title1",
  },
  {
    products: [
      {
        img: "https://kartinkin.net/uploads/posts/2021-07/thumbs/1625151191_43-kartinkin-com-p-drakon-art-art-krasivo-50.jpg",
      },
      {
        img: "https://kartinkin.net/uploads/posts/2021-07/thumbs/1625151191_43-kartinkin-com-p-drakon-art-art-krasivo-50.jpg",
      },
      {
        img: "https://kartinkin.net/uploads/posts/2021-07/thumbs/1625151191_43-kartinkin-com-p-drakon-art-art-krasivo-50.jpg",
      },
      {
        img: "https://kartinkin.net/uploads/posts/2021-07/thumbs/1625151191_43-kartinkin-com-p-drakon-art-art-krasivo-50.jpg",
      },
    ],
    title: "title2",
  },
  {
    products: [
      {
        img: "https://kartinkin.net/uploads/posts/2021-07/thumbs/1625151191_43-kartinkin-com-p-drakon-art-art-krasivo-50.jpg",
      },
      {
        img: "https://kartinkin.net/uploads/posts/2021-07/thumbs/1625151191_43-kartinkin-com-p-drakon-art-art-krasivo-50.jpg",
      },
      {
        img: "https://kartinkin.net/uploads/posts/2021-07/thumbs/1625151191_43-kartinkin-com-p-drakon-art-art-krasivo-50.jpg",
      },
      {
        img: "https://kartinkin.net/uploads/posts/2021-07/thumbs/1625151191_43-kartinkin-com-p-drakon-art-art-krasivo-50.jpg",
      },
    ],
    title: "title3",
  },
];

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
          <Counter />
        </LayoutItem>
        <Library content={sets}/>
      </LayoutRow>
    </Layout>
  </>
);

export default IndexPage;
