import { GetStaticProps } from "next";

import { Grid, Box, Container, makeStyles } from "@material-ui/core";

import { getAllProducts } from "../utils/apiCalls";
import ProductCard, { Product } from "../Components/Product/ProductCard";

import Navfull from "../Components/Navbar";
import Hero from "../Components/Hero";

export default function Index({ products }) {
   return (
      <>
         <Navfull />
         <Container maxWidth='xl' disableGutters>
            <Hero />
            {/* <Box my={2}>
                    <Grid container justifyContent='center'>
                        {products.map((product: Product) => (
                            <ProductCard
                                product={product}
                                key={product.sys.id}
                            />
                        ))}
                    </Grid>
                </Box> */}
         </Container>
      </>
   );
}

//get static properties
// export const getStaticProps: GetStaticProps = async (ctx) => {
//     const data = await getAllProducts();

//     return {
//         props: {
//             products: data.productsCollection.items,
//         },
//         revalidate: 30,
//     };
// };
