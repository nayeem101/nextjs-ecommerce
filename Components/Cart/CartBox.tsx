import {
   Card,
   CardActionArea,
   CardMedia,
   CardContent,
   Typography,
   CardActions,
   Button,
   IconButton,
} from "@material-ui/core";

import { ShoppingCart } from "@material-ui/icons";

import React from "react";
import useCartStyles from "../../styles/cartStyles/useCartStyles";

const CartBox = () => {
   const classes = useCartStyles();

   return (
      <Card raised className={classes.card}>
         <CardActionArea>
            <CardMedia
               component="img"
               image="vim.jpeg"
               height="150"
               alt="product"
               className={classes.cartImage}
            />
            <CardContent>
               <Typography gutterBottom variant="body1" component="div">
                  Vim Dishwash Liquid poly pack - 250 ml
               </Typography>
               <Typography variant="body2" color="primary">
                  In Stock
               </Typography>
               <Typography variant="subtitle2" className={classes.prevPrice}>
                  $20
               </Typography>
               <Typography variant="subtitle2" className={classes.curPrice}>
                  $19.99
               </Typography>
            </CardContent>
         </CardActionArea>
         <CardActions>
            <IconButton
               color="inherit"
               aria-label="cart-button"
               className={classes.cartButton}
            >
               <ShoppingCart fontSize="small" />
               <Typography
                  variant="body2"
                  component="span"
                  className={classes.cartButtonText}
               >
                  Buy Now
               </Typography>
            </IconButton>
         </CardActions>
      </Card>
   );
};

export default CartBox;
