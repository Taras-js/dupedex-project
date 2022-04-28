export const getProductBySearch = (state, search: string) => (
  search.length > 1 && state.filter((product) => (product.prod_name).toString().toLowerCase().includes(search.toLowerCase()))
);
