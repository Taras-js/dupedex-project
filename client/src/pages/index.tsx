import type { NextPage } from "next";
import Head from "next/head";

import {
  Layout, LayoutRow, LayoutItem, Panel,
} from "../components/UIKit";
import { ProductContainer } from "../components/ProductContainer";
import { ToolbarContainer } from "../components/ToolbarContainer";
import { useAppSelector } from "../app/hooks";
import { productState } from "../components/ToolbarContainer/toolbarSlice";
import { LibraryContainer } from "../components/LibraryContainer";

const IndexPage: NextPage = () => {
  const {
    currentItemId, itemsIdList, filter, isReviewShown,
  } = useAppSelector(productState);

  return (
    <>
      <Head>
        <title>dupedex | Skincare reviews App</title>
      </Head>

      <Layout>
        <LayoutRow rowHeight={54} noResize>
          <LayoutItem itemWidth={1}>
            <Panel>SearchBar</Panel>
          </LayoutItem>
          <LayoutItem itemWidth={760} noResize>
            <Panel padding="0px 25px">
              <ToolbarContainer />
            </Panel>
          </LayoutItem>
        </LayoutRow>
        <LayoutRow rowHeight={700}>
          <LayoutItem itemWidth={1340}>
            <ProductContainer
              itemsIdList={itemsIdList}
              currentItemId={currentItemId}
              filter={filter}
              isReviewShown={isReviewShown}
            />
          </LayoutItem>
          <LayoutItem itemWidth={370} noResize>
            <Panel>
              <LibraryContainer />
            </Panel>
          </LayoutItem>
        </LayoutRow>
      </Layout>
    </>
  );
};

export default IndexPage;
