import type { NextPage } from "next";
import Head from "next/head";

import ProductSearch from "../../features/Search/ProductSearch";
import { Layout, LayoutRow, LayoutItem, Panel } from "../../components/UIKit";
import { ProductContainer } from "../../components/ProductContainer";
import { ToolbarContainer } from "../../components/ToolbarContainer";
import { useAppSelector } from "../../app/hooks";
import {
  changeIdList,
  productState,
} from "../../components/ToolbarContainer/toolbarSlice";
import { LibraryContainer } from "../../components/LibraryContainer";
import { AppState, wrapper } from "../../app/store";
import { connect } from "react-redux";

const IndexPage: NextPage<AppState> = (props) => {
  const { currentItemId, itemsIdList, filter, isReviewShown } =
    useAppSelector(productState);

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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...etc }) => {
      let result = await fetch(`http://localhost:5000${req.url}`) // запрос на получение товаров с данным id
      let json = await result.json();
      store.dispatch(changeIdList(json.map((el) => +el))); // сохранение товаров в store
      return { props: {} };
    }
);

export default connect((state) => state)(IndexPage);
