import type { NextPage } from "next";
import Head from "next/head";

import ProductSearch from "../../features/Search/ProductSearch";
import { Layout, LayoutRow, LayoutItem, Panel } from "../../components/UIKit";
import { ProductContainer } from "../../components/ProductContainer";
import { ToolbarContainer } from "../../components/ToolbarContainer";
import { useAppDispatch } from "../../app/hooks";
import { showItem } from "../../components/ToolbarContainer/toolbarSlice";
import { LibraryContainer } from "../../components/LibraryContainer";
import { AppState, wrapper } from "../../app/store";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getCopiedProductById } from "../../app/requests";
import {
  setProducts,
  setReviews,
} from "../../components/ProductContainer/productSlice";
import { randomReviewsMock } from "../../shared/mocks/reviewsmock";

type ProdArray = {
  prodArray: any[];
  idProdArray: any[];
};

const IndexPage: NextPage<AppState & ProdArray> = ({
  prodArray,
  idProdArray,
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    prodArray.forEach((el) => {
      dispatch(setProducts(el));
    });
    setTimeout(() => {
      dispatch(showItem(idProdArray));
      prodArray.map((item) =>
        dispatch(setReviews({ id: item._id, reviews: randomReviewsMock() }))
      );
    }, 0);
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
          <LayoutItem itemWidth={1500}>
            <ProductContainer />
          </LayoutItem>
          <LayoutItem itemWidth={320} noResize>
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
      let regexp = /\d+/g;
      let requestQueryArray = req.url.match(regexp).map((el) => +el);
      let prodArray = [];
      let idProdArray = [];

      for await (const item of requestQueryArray) {
        await getCopiedProductById(item).then((res) => {
          prodArray.push(res);
          idProdArray.push(res._id);
        });
      }
      return { props: { prodArray: prodArray, idProdArray: idProdArray } };
    }
);

export default connect((state) => state)(IndexPage);
