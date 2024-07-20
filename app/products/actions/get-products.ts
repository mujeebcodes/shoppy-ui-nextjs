"use server";

import { get } from "@/app/common/utils/fetch";
import { Product } from "../interfaces/product.interface";

export default async function getProducts() {
  return get<Product[]>(
    "products",
    ["products"],
    new URLSearchParams({ status: "available" })
  );
}
