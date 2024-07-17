"use client";

import { Card, CardActionArea, Stack, Typography } from "@mui/material";
import { Product as IProduct } from "./interfaces/product.interface";
import Image from "next/image";
import { API_URL } from "../common/constants/api";
import { getProductImage } from "./product-image";
import { useRouter } from "next/navigation";

interface ProductProps {
  product: IProduct;
}

const Product = ({ product }: ProductProps) => {
  const router = useRouter();
  return (
    <CardActionArea onClick={() => router.push(`/products/${product.id}`)}>
      <Card className="p-4">
        <Stack gap={3}>
          <Typography variant="h4">{product.name}</Typography>
          {product.imageExists && (
            <Image
              src={getProductImage(product.id)}
              width="0"
              height="0"
              className="w-full h-auto"
              sizes="100vw"
              alt={product.name}
            />
          )}
          <Typography>{product.description}</Typography>
          <Typography>${product.price}</Typography>
        </Stack>
      </Card>
    </CardActionArea>
  );
};
export default Product;
