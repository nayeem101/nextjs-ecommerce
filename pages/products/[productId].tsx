import { GetStaticPaths, GetStaticProps } from "next";
import { Product } from "../../components/Product/ProductCard";
import { getProductPaths, getSingleProduct } from "../../utils/apiCalls";
import Image from "next/image";
import { Container, Grid, makeStyles } from "@material-ui/core";

interface props {
   product: Product;
}

const useStyles = makeStyles((theme) => {
   return {
      root: {
         height: "100%",
      },
      imgViewer: {
         padding: theme.spacing(3),
         backgroundColor: "teal",
         display: "flex",
         flexDirection: "column",
         justifyContent: "center",
      },
   };
});

const SingleProduct = ({ product }: props) => {
   const styles = useStyles();

   return (
      <div className="root">
         <Container maxWidth="lg">
            <Grid container>
               <Grid item xs={12} sm={6}>
                  <div className={styles.imgViewer}>
                     <p>Product image</p>
                     <Image
                        width={300}
                        height={300}
                        objectFit="cover"
                        src={product.imageCollection.items[0].url}
                        alt={product.name}
                        placeholder="blur"
                     />
                  </div>
               </Grid>
               <Grid item xs={12} sm={6}>
                  <h1>Product Details</h1>
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
               </Grid>
            </Grid>
         </Container>
      </div>
   );
};

export default SingleProduct;

//get static properties
export const getStaticProps: GetStaticProps = async (ctx) => {
   const { params } = ctx;
   const { productId } = params;
   const data = await getSingleProduct(productId as string);

   return {
      props: {
         product: data.products,
      },
      revalidate: 10,
   };
};

export const getStaticPaths: GetStaticPaths = async () => {
   const data = await getProductPaths();

   const products = data.productsCollection.items;

   const paths = products.map((product) => ({
      params: { productId: product.sys.id },
   }));

   return {
      paths,
      fallback: "blocking",
   };
};
