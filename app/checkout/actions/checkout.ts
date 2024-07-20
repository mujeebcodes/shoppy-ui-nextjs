"use server";
import { post } from "@/app/common/utils/fetch";

export default async function checkout(productId: number) {
  const response = await post("checkout/session", { productId });
  return response;
}
