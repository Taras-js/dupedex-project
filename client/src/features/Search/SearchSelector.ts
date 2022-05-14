export const getProductBySearch = (state, search: string) => ((state && search && search.length > 1)
  ? state
    .filter(
      (product) => product.prod_name
        .toString()
        .toLowerCase()
        .includes(search.toLowerCase())
        || product.brand_name.toString()
          .toLowerCase()
          .includes(search.toLowerCase()),
    )
    .map((product) => ({
      title: product.brand_name,
      subtitle: product.prod_name,
      image: product.img_link,
      // eslint-disable-next-line no-underscore-dangle
      id: product._id,
    })) : []);
