"use client";

import { Card, CardActionArea, Stack, Typography } from "@mui/material";
import { Product as IProduct } from "./interfaces/product.interface";
import Image from "next/image";
import { getProductImage } from "./product-image";
import { useRouter } from "next/navigation";

interface ProductProps {
  product: IProduct;
}

export default function Product({ product }: ProductProps) {
  const router = useRouter();
  
  return (
    // <Card className="p-4">
    <CardActionArea onClick={() => router.push(`/products/${product.id}`)}>
      <Card sx={{ p: 2, border: '1px solid #ccc' }}>
      {/* // <Card sx={{ p: 2 }}> */}
        <Stack gap={3}>
          <Typography variant="h4">{product.name}</Typography>
          {product.imageExists && (
            <Image
              src={getProductImage(product.id)}
              alt="Picture of the product"
              width="0"
              height="0"
              className="w-full md:w-1/2 h-auto"
              sizes="100w"
            />
          )}
          <Typography>{product.description}</Typography>
          <Typography>${product.price}</Typography>
        </Stack>
      </Card>
    </CardActionArea>
  );
}