import { Divider, Grid, Typography } from "@material-ui/core";
import CartBox from "./CartBox";

import { makeStyles } from "@material-ui/core";

const useProductSectionStyles = makeStyles((theme) => ({
   heading: {
      fontWeight: 600,
      margin: theme.spacing(5, 0),
   },
}));

const Cart = () => {
   const classes = useProductSectionStyles();
   return (
      <div>
         <Typography variant="h4" align="center" className={classes.heading}>
            Top Products
         </Typography>
         <Grid container spacing={5} justifyContent="center">
            {[1, 2, 3, 4].map((el) => (
               <Grid item>
                  <CartBox key={el} />
               </Grid>
            ))}
         </Grid>
      </div>
   );
};

export default Cart;
