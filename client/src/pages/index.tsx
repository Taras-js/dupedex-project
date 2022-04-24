import type { NextPage } from 'next';
import Head from 'next/head';

import {
  Layout, LayoutRow, LayoutItem, Panel,
} from '../components/UIKit';
import { ProductContainer } from '../components/ProductContainer';
import { ToolbarContainer } from '../components/ToolbarContainer';
import { useAppSelector } from '../app/hooks';
import { productState } from '../components/ToolbarContainer/toolbarSlice';

const IndexPage: NextPage = () => {
  const {
    itemsIdList, filter, isReviewShown, historyStep,
  } = useAppSelector(productState);

  return (
    <>
      <Head>
        <title>dupedex | Skincare reviews App</title>
      </Head>

      <Layout>
        <LayoutRow rowHeight={54} noResize>
          <LayoutItem itemWidth={1}>
            <Panel>
              SearchBar
            </Panel>
          </LayoutItem>
          <LayoutItem itemWidth={760} noResize>
            <Panel>
              <ToolbarContainer />
            </Panel>
          </LayoutItem>
        </LayoutRow>
        <LayoutRow rowHeight={700}>
          <LayoutItem itemWidth={1}>
            <div style={{ display: 'flex', height: '100%' }}>
              <ProductContainer
                itemsIdList={itemsIdList}
                currentItemId={1}
                filter={filter}
                isReviewShown={isReviewShown}
              />
            </div>
          </LayoutItem>
          <LayoutItem itemWidth={370} noResize>
            <Panel>
              Library
              <br />
              Step
              {historyStep}
            </Panel>
          </LayoutItem>
        </LayoutRow>
      </Layout>
    </>
  );
};

export default IndexPage;
