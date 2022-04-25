export const getProductBySearch = (state, string) => (
  string && state.filter((product) => product.prod_name.toString().toLowerCase().includes(string.toLowerCase()))
);
