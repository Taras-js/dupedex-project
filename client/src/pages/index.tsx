import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import {
  Layout, LayoutRow, LayoutItem, Panel, Icon, Button,
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
  const onButtonClickPos = () => { setFilter(filter !== 'positive' ? 'positive' : null); };
  const onButtonClickNeg = () => { setFilter(filter !== 'negative' ? 'negative' : null); };
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
                <Button outlined onClick={onButtonClick1}>
                  <Icon type="comeBack" width={28} height={28} />
                  1 Item
                </Button>
                <Button outlined onClick={onButtonClick4}>
                  <Icon type="comeAhead" width={28} height={28} />
                  4 Items
                </Button>
                <Button outlined onClick={onButtonClickNeg}>
                  <Icon type="negativeReviews" width={28} height={28} />
                </Button>
                <Button outlined onClick={onButtonClickPos}>
                  <Icon type="positiveReviews" width={28} height={28} />
                </Button>
                <Button outlined onClick={onButtonClickRev}>
                  <Icon type="showOrHideReviews" width={28} height={28} />
                </Button>
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
