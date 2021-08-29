import { GetStaticProps } from "next";
import Link from "next/link";

import { Grid, Box, Container, makeStyles } from "@material-ui/core";

import { fetcher } from "../utils/apiCalls";
import ProductCard, { Product } from "../Components/Product/ProductCard";
import Navbar from "../Components/Navbar";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

export default function Index({ products }) {
  const styles = useStyles();

  return (
    <>
      <Navbar />
      <div className={styles.offset}></div>
      <Container maxWidth='lg'>
        <Box my={2}>
          <Grid container justify='center'>
            {products.map((product: Product) => (
              <ProductCard product={product} key={product.sys.id} />
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}

//get static properties
export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await fetcher();

  return {
    props: {
      products: data.productsCollection.items,
    },
    revalidate: 30,
  };
};
