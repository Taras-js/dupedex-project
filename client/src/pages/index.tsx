import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import {
  Layout, LayoutRow, LayoutItem, Panel, Button,
} from '../components/UIKit';
import { ProductContainer } from '../components/ProductContainer';
import { itemsIdList, isReviewShown } from '../shared/mocks/consts';
import { FilterType } from '../shared/types';

const IndexPage: NextPage = () => {
  const [items, setItems] = useState(itemsIdList);
  const [filter, setFilter] = useState<FilterType>(null);
  const [review, setReview] = useState(isReviewShown);
  const onButtonClick1 = () => { setItems([1]); };
  const onButtonClick4 = () => { setItems([1, 2, 3, 4]); };
  const onButtonClickPos = () => { setFilter('positive'); };
  const onButtonClickNeg = () => { setFilter('negative'); };
  const onButtonClickRev = () => { setReview(!review); };

  return (
    <>
      <Head>
        <title>dupedex | Skincare reviews App</title>
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
              <div style={{ display: 'flex' }}>
                <Button onClick={onButtonClick1}>1 Item</Button>
                <Button onClick={onButtonClick4}>4 Items</Button>
                <Button onClick={onButtonClickNeg}>Negative</Button>
                <Button onClick={onButtonClickPos}>Positive</Button>
                <Button onClick={onButtonClickRev}>Review</Button>
              </div>
            </Panel>
          </LayoutItem>
        </LayoutRow>
        <LayoutRow rowHeight={700}>
          <LayoutItem itemWidth={1}>
            <div style={{ display: 'flex', height: '100%' }}>
              <ProductContainer itemsIdList={items} currentItemId={1} filter={filter} isReviewShown={review} />
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
};

export default IndexPage;
