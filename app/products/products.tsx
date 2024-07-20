import Grid from "@mui/material/Unstable_Grid2/Grid2";
import getProducts from "./actions/get-products";
import Product from "./product";
import ProductsGrid from "./products-grid";

const Products = async () => {
  const products = await getProducts();

  return <ProductsGrid products={products} />;
};
export default Products;
