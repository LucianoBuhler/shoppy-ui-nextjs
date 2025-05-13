import { Card, Typography } from "@mui/material";
import { Product as IProduct } from "./interfaces/product.interface";

interface ProductProps {
  product: IProduct;
}

export default function Product({ product }: ProductProps) {
  return (
    // <Card className="p-4">
    <Card sx={{ p: 2, border: '1px solid #ccc' }}>
    {/* // <Card sx={{ p: 2 }}> */}
      <Typography variant="h4">{product.name}</Typography>
      <Typography>{product.description}</Typography>
      <Typography>${product.price}</Typography>
    </Card>
  );
}