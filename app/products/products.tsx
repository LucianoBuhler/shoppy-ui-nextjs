import Grid from '@mui/material/Grid';
import getProducts from "./actions/get-products";
import Product from "./product";

export default async function Products() {
  const products = await getProducts();

  // console.log("Products", products);
  
  if (!products || products.length === 0) { 
    return (
      <Grid container spacing={3}>
        <Grid size={{ xs: 12 }}>
          <h1>No products found</h1>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid container spacing={3} sx={{ height: "85vh", overflow: "scroll" }}>
        { products.map((product) => (
          // <Grid key={product.id} sm={6} lg={4} xs={12}>
          <Grid key={product.id} size={{ xs: 12, sm: 6, lg: 4}}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    );
  }
}
