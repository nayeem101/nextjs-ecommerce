import { useCartContext } from "../../pages";

import { Box, makeStyles, IconButton } from "@material-ui/core";

import { Close } from "@material-ui/icons";

export const useCartStyles = makeStyles((theme) => ({
   close: {
      display: "none",
   },
   cart: {
      position: "fixed",
      right: 0,
      zIndex: 9999,
      backgroundColor: theme.palette.primary.main,
      width: "30vw",
      height: "100vh",
      color: theme.palette.secondary.light,
   },
}));

const Cart = () => {
   //cart styles
   const classes = useCartStyles();

   // taking state from context
   const { cartClose, setCartClose } = useCartContext();

   // function to change the state
   const handleClose = () => {
      setCartClose(!cartClose);
   };

   return (
      <Box className={cartClose ? classes.close : classes.cart}>
         <IconButton aria-label="close" onClick={handleClose}>
            <Close fontSize="large" color="secondary" />
         </IconButton>
      </Box>
   );
};

export default Cart;
