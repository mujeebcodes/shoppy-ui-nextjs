import { Stack, Typography } from "@mui/material";
import getProduct from "./get-product";
import Image from "next/image";
import { getProductImage } from "../product-image";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

interface SingleProductProps {
  params: { productId: string };
}
const SingleProduct = async ({ params }: SingleProductProps) => {
  const product = await getProduct(+params.productId);
  return (
    <Grid container marginBottom={"2rem"} rowGap={3}>
      {product.imageExists && (
        <Grid md={6} xs={12}>
          <Image
            src={getProductImage(product.id)}
            width={0}
            height={0}
            className="w-full sm:w-3/4 h-auto"
            sizes="100vw"
            alt={product.name}
          />
        </Grid>
      )}

      <Grid md={6} xs={12}>
        <Stack gap={3}>
          <Typography variant="h2">{product.name}</Typography>
          <Typography>{product.description}</Typography>
          <Typography variant="h4">${product.price}</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};
export default SingleProduct;
