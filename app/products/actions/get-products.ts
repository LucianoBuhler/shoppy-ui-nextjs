'use server';

import { get } from "../../common/util/fetch";
import { Product } from "../interfaces/product.interface";

export default async function getProducts() {
  const products = await get<Product[]>('products', ['products'], new URLSearchParams({ status: "available" })
  );
  return products;
}