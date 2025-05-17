import CreateProductFab from "./products/create-product/create-product-fab";
import Products from "./products/products";
import authenticated from "./auth/actions/authenticated";


export default async function Home() {
  const isAuthenticated = await authenticated();
  
  return (
    <>
      {isAuthenticated && <Products />}
      <CreateProductFab />
    </>
  )
}
