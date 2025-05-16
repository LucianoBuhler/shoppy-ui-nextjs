import { Stack, Typography } from "@mui/material";
import getProduct from "./get-product";
import Image from "next/image";
import { getProductImage } from "../product-image";
// import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Grid from '@mui/material/Grid';
import Checkout from "../../checkout/checkout";

interface SingleProductProps {
  params: Promise<{ productId: string }>;
}

export default async function SingleProduct({ params }: SingleProductProps) {
  // return <p> Product {params.productId}</p>;
  const { productId } = await params;
  // const product = await getProduct(+params.productId);
  const product = await getProduct(+productId);

  return (
    <Grid container marginBottom={"2rem"} rowGap={3}>
      {/* <Grid md={6} xs={12}> */}
      {product.imageExists && (
        <Grid key={product.id} size={{ xs: 12, md: 6}}>
          <Image
            src={getProductImage(product.id)}
            width={0}
            height={0}
            className="w-full sm:w-3/4 h-auto"
            sizes="100vw"
            alt="Picture of the product"
          />
        </Grid>
      )}
      {/* <Grid md={6} xs={12}> */}
      <Grid key={product.id} size={{ xs: 12, md: 6}}>
        <Stack gap={3}>
          <Typography variant="h2">{product.name}</Typography>
          <Typography>{product.description}</Typography>
          <Typography variant="h4">${product.price}</Typography>
          <Checkout productId={product.id} />
        </Stack>
      </Grid>
    </Grid>
  );
}