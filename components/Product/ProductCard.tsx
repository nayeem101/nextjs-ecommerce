import { makeStyles } from "@material-ui/core/styles";
import {
   Button,
   Card,
   CardActions,
   CardActionArea,
   CardContent,
   CardMedia,
   Typography,
   Grid,
   IconButton,
} from "@material-ui/core";

import { Favorite, AddShoppingCart } from "@material-ui/icons";

import Image from "next/image";
import Link from "next/link";

import Cardactions from "./CardActions";

const useStyles = makeStyles((theme) => {
   return {
      root: {
         maxWidth: 270,
         margin: theme.spacing(2),
      },
      media: {
         height: 220,
      },
      ogPrice: {
         textDecoration: "line-through",
         marginLeft: theme.spacing(1),
         color: "rgba(0, 0, 0, 0.4)",
      },
   };
});

export interface Product {
   sys: {
      id: string;
      publishedAt: Date;
      firstPublishedAt: Date;
   };
   name: string;
   price: number;
   description: string;
   imageCollection: {
      items: [
         {
            title: string;
            url: string;
            width: number;
            height: number;
         }
      ];
   };
}

interface Props {
   product: Product;
}

export default function ProductCard({ product }: Props) {
   const classes = useStyles();

   let image = product.imageCollection.items[0];

   return (
      <Grid item>
         <Card className={classes.root}>
            <Link href={`/products/${product.sys.id}`}>
               <CardActionArea>
                  <CardMedia className={classes.media} title={image.title}>
                     <Image
                        src={image.url}
                        alt={image.title}
                        width={270}
                        height={500}
                        placeholder="blur"
                     />
                  </CardMedia>

                  <CardContent>
                     <Typography variant="h6" component="h2" noWrap>
                        {product.name}
                     </Typography>

                     <Typography
                        variant="subtitle1"
                        color="textPrimary"
                        component="p"
                     >
                        ৳{product.price}
                        <span className={classes.ogPrice}>
                           ৳{product.price + product.price * 0.2}
                        </span>
                     </Typography>

                     <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                     >
                        {product.description}
                     </Typography>
                  </CardContent>
               </CardActionArea>
            </Link>
            <Cardactions />
         </Card>
      </Grid>
   );
}
