import { useState, createContext, useContext } from "react";

import { GetStaticProps } from "next";

import { Grid, Box, Container, makeStyles } from "@material-ui/core";

import { getAllProducts } from "../utils/apiCalls";
import ProductCard, { Product } from "../components/Product/ProductCard";

import Navfull from "../components/Navbar";
import Hero from "../components/Hero";
import Cart from "../components/Cart";

//type of cart content for context
type CartContent = {
   cartClose: boolean;
   setCartClose: (c: boolean) => void;
};

// cart context
export const CartContext = createContext<CartContent>({
   cartClose: true,
   setCartClose: () => {},
});

// create callable cart context
export const useCartContext = () => useContext(CartContext);

//main function
export default function Index({ products }) {
   const [cartClose, setCartClose] = useState<boolean>(true);

   return (
      <CartContext.Provider value={{ cartClose, setCartClose }}>
         <Cart />
         <Navfull />
         <Hero />
         <Container maxWidth="lg">
            <Box my={2}>
               <Grid container justifyContent="center">
                  {products.map((product: Product) => (
                     <ProductCard product={product} key={product.sys.id} />
                  ))}
               </Grid>
            </Box>
         </Container>
      </CartContext.Provider>
   );
}

// get static properties
export const getStaticProps: GetStaticProps = async (ctx) => {
   const data = await getAllProducts();

   return {
      props: {
         products: data.productsCollection.items,
      },
      revalidate: 30,
   };
};
