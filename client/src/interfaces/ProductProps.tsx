export interface ProductProps {
  _id: {
    $oid: string;
  };
  id: number;
  brand_name: string;
  prod_name: string;
  prod_link: string;
  price: string;
  category: string;
  img_link: string;
  Benefits: string;
  Details: string;
  Usage: string;
  Ingredients: string;
}
