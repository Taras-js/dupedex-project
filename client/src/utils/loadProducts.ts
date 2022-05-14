import { AppDispatch } from "../app/store";
import { showItem } from "../components/ToolbarContainer/toolbarSlice";
import {
  setProducts,
  setReviews,
} from "../components/ProductContainer/productSlice";
import { itemsIdProductsMock } from "../shared/mocks/consts";
import { randomReviewsMock } from "../shared/mocks/reviewsmock";
import { getProductByActualId } from "../app/requests";

export const loadProducts = () => async (dispatch: AppDispatch) => {
  const randomItems = itemsIdProductsMock;

  randomItems.forEach((item) => {
    getProductByActualId(item).then((res) => {
      dispatch(setProducts(res));
    });
  });

  setTimeout(() => {
    dispatch(showItem(randomItems));

    randomItems.map((id) => dispatch(setReviews({ id, reviews: randomReviewsMock() })));
  }, 0);
};
