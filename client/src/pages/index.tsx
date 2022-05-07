import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";

import {
  Layout, LayoutRow, LayoutItem, Panel,
} from "../components/UIKit";
import { ProductContainer } from "../components/ProductContainer";
import { ToolbarContainer } from "../components/ToolbarContainer";
import { useAppDispatch } from "../app/hooks";
import ProductSearch from "../features/Search/ProductSearch";
import { LibraryContainer } from "../components/LibraryContainer";

import { setMockProduct } from "../shared/mocks/setMock";

const IndexPage: NextPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setMockProduct());
  }, []);

  return (
    <>
      <Head>
        <title>dupedex | Skincare reviews App</title>
      </Head>
      <Layout>
        <LayoutRow rowHeight={54} noResize>
          <LayoutItem itemWidth={1}>
            <Panel>
              <ProductSearch />
            </Panel>
          </LayoutItem>
          <LayoutItem itemWidth={760} noResize>
            <Panel padding="0px 25px">
              <ToolbarContainer />
            </Panel>
          </LayoutItem>
        </LayoutRow>
        <LayoutRow rowHeight={700}>
          <LayoutItem itemWidth={1340}>
            <ProductContainer />
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
