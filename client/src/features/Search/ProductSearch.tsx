import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { Search, Results } from "../../components/UIKit";
import { debounce } from "../../utils/helper";
import { getProductBySearch } from "./SearchSelector";
import {
  addIdItem,
  setSearchBarBlurred,
} from "../../components/ToolbarContainer/toolbarSlice";
import {
  searchesState,
  setProducts,
  setReviews,
} from "../../components/ProductContainer/productSlice";

import { randomReviewsMock } from "../../shared/mocks/reviewsmock";
import { getProductByActualId, searchItem } from "../../app/requests";

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

  const placeholder: string = isSearchBarFocused ? 'Start typing a brand or product name to find it and add to collection' : "Look for a skincare product name, brand name and etc.";

  const onClickResult = (id) => {
    getProductByActualId(id).then((res) => {
      dispatch(setProducts(res));
    });
    dispatch(setReviews({ id, reviews: randomReviewsMock() }));

    if (productsIdList.length < 4) {
      dispatch(addIdItem(id));
    }
    dispatch(setSearchBarBlurred());
    setSearch("");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    async function getResults() {
      const searches = await searchItem(search);
      setResult(getProductBySearch(searches, search));
    }
    getResults();
  }, [search]);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Search
      idProducts={productsIdList}
      onChange={handleChange}
      placeholder={placeholder}
      results={result}
      withDebounce={debounce}
      onClickResult={onClickResult}
      isFocused={isSearchBarFocused}
    />
  );
};

export default ProductSearch;
