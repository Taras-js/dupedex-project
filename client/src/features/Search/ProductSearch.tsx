import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import Search, { Results } from "../../components/UIKit/Search/Search";
import { debounce } from "../../utils/helper";
import { getProductBySearch } from "./SearchSelector";
import {
  addIdItem,
  showItem,
  setSearchBarBlurred,
} from "../../components/ToolbarContainer/toolbarSlice";
import {
  searchesState,
  setProducts,
  setReviews,
} from "../../components/ProductContainer/productSlice";

import { randomReviewsMock } from "../../shared/mocks/setMock";

import styles from "./productSearch.module.css";

const ProductSearch = () => {
  const [search, setSearch] = useState<string>("");
  const [result, setResult] = useState<Results[]>();
  const dispatch = useAppDispatch();

  const isSearchBarFocused = useAppSelector(
    (state) => state.toolbar.isSearchBarFocused,
  );
  const productsIdList = useAppSelector(
    (state) => state.toolbar.idItemsOnScreen,
  );

  const onClickResult = (id) => {
    dispatch(setProducts([id]));
    dispatch(setReviews({ id, reviews: randomReviewsMock() }));
    if (isSearchBarFocused) {
      dispatch(addIdItem(id));
    } else {
      dispatch(showItem([id]));
    }
    dispatch(setSearchBarBlurred());
    setSearch("");
  };
  const searches = useAppSelector(searchesState);

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    setResult(getProductBySearch(searches, search));
  }, [search]);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Search
      idProducts={productsIdList}
      onChange={handleChange}
      placeholder="Look for a skincare product name, brand name and etc."
      results={result}
      withDebounce={debounce}
      onClickResult={onClickResult}
      isFocused={isSearchBarFocused}
    />
  );
};

export default ProductSearch;
