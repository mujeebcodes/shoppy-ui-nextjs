"use client";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Product as IProduct } from "./interfaces/product.interface";
import Product from "./product";
import { useEffect } from "react";
import { io, Socket } from "socket.io-client";
import { API_URL } from "../common/constants/api";
import revalidateProducts from "./actions/revalidate-products";
import getAuthentication from "../auth/actions/get-authentication";

interface ProductGridProps {
  products: IProduct[];
}

const ProductsGrid = ({ products }: ProductGridProps) => {
  useEffect(() => {
    let socket: Socket;

    const createSocket = async () => {
      const socket = io(API_URL!, {
        auth: { Authentication: await getAuthentication() },
      });
      socket.on("productsUpdated", () => {
        revalidateProducts();
      });
    };

    createSocket();

    return () => {
      socket?.disconnect();
    };
  }, []);
  return (
    <Grid container spacing={3} sx={{ height: "85vh", overflow: "scroll" }}>
      {products.map((product) => (
        <Grid key={product.id} sm={6} lg={4} xs={12}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
};
export default ProductsGrid;
