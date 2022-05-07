export const getProductBySearch = (state, search: string) => (
  search.length > 1
  && state
    .filter(
      (product) => product.subtitle
        .toString()
        .toLowerCase()
        .includes(search.toLowerCase())
        || product.title
          .toString()
          .toLowerCase()
          .includes(search.toLowerCase()),
    )
    .map((product) => ({
      title: product.title,
      subtitle: product.subtitle,
      image: product.img_link,
      id: product.id,
    })));
