/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";

import { connect } from "react-redux";
import ProductSearch from "../../features/Search/ProductSearch";
import {
  Layout, LayoutRow, LayoutItem, Panel,
} from "../../components/UIKit";
import { ProductContainer } from "../../components/ProductContainer";
import { ToolbarContainer } from "../../components/ToolbarContainer";
import { useAppDispatch } from "../../app/hooks";
import { showItem } from "../../components/ToolbarContainer/toolbarSlice";
import { LibraryContainer } from "../../components/LibraryContainer";
import { AppState, wrapper } from "../../app/store";
import { getCopiedProductById } from "../../app/requests";
import {
  setProducts,
  setReviews,
} from "../../components/ProductContainer/productSlice";
import { reviewsMock } from "../../shared/mocks/reviewsmock";

type ProdArray = {
  prodArray: any[];
  idProdArray: any[];
};

const IndexPage: NextPage<AppState & ProdArray> = ({
  prodArray,
  idProdArray,
}: ProdArray) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    prodArray.forEach((el) => {
      dispatch(setProducts(el));
    });

    dispatch(showItem(idProdArray));
    prodArray.map((item) => dispatch(setReviews({ id: item._id, reviews: reviewsMock })));
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
  (store) => async ({ req, res, ...etc }) => {
    const regexp = /\d+/g;
    const requestQueryArray = req.url.match(regexp).map((el) => +el);
    const prodArray = [];
    const idProdArray = [];

    for await (const item of requestQueryArray) {
      await getCopiedProductById(item, req.headers.host).then((response) => {
        prodArray.push(response);
        idProdArray.push(response._id);
      });
    }
    return { props: { prodArray, idProdArray } };
  },
);

export default connect((state) => state)(IndexPage);
