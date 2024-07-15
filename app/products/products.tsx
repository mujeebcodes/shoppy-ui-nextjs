import Grid from "@mui/material/Unstable_Grid2/Grid2";
import getProducts from "./actions/get-products";
import Product from "./product";

const Products = async () => {
  const products = await getProducts();

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid key={product.id} sm={6} lg={4} xs={12}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Products;
