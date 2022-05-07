import { AppDispatch } from "../../app/store";
import { showItem } from "../../components/ToolbarContainer/toolbarSlice";
import { setProducts, setReviews, setSearches } from "../../components/ProductContainer/productSlice";
import { randomItemsIdProductsMock } from "./consts";
import { productsMock, reviewsMock } from "./productmock";

export const randomReviewsMock = () => reviewsMock.filter(() => Math.random() > 0.5);

export const setMockProduct = () => async (dispatch: AppDispatch) => {
  const randomItems = randomItemsIdProductsMock(4);
  setTimeout(() => {
    dispatch(showItem(randomItems));

    dispatch(setProducts(randomItems));

    randomItems.map((id) => (
      dispatch(setReviews({ id, reviews: randomReviewsMock() }))
    ));

    const searchesMock = productsMock.map((product) => ({
      id: product.id,
      title: product.brand_name,
      subtitle: product.prod_name,
    }));
    dispatch(setSearches(searchesMock));
  }, 500);
};
