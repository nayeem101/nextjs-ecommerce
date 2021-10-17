import { useCartContext } from "../../pages";
import { useCartStyles } from "../Cart";
import useNav1Styles from "../../styles/navStyles/useNav1Styles";

import {
   Box,
   IconButton,
   InputBase,
   Toolbar,
   Typography,
   Badge,
} from "@material-ui/core";

import {
   Notifications,
   Search as SearchIcon,
   ShoppingCart,
   Person,
} from "@material-ui/icons";

function Nav1() {
   //nav1 styles
   const classes = useNav1Styles();

   //cart styles
   const cartClasses = useCartStyles();

   //taking state from cart context
   const { cartClose, setCartClose } = useCartContext();

   //function to opening the cart
   const handleOpen = () => {
      setCartClose(!cartClose);
   };

   return (
      <Toolbar className={classes.nav1}>
         <Typography color="primary" variant="h4" className={classes.logo}>
            El Dorado
         </Typography>

         <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            flexGrow="1"
         >
            <InputBase
               className={classes.searchArea}
               placeholder="search for products"
               inputProps={{ "aria-label": "search for products" }}
            />
            <IconButton
               type="submit"
               className={classes.searchBtn}
               aria-label="search"
            >
               <SearchIcon />
            </IconButton>
         </Box>
         <Box m={1}>
            <IconButton
               aria-label="cart"
               className={
                  cartClose
                     ? cartClasses.cart && classes.navIconBtn
                     : classes.navIconBtn
               }
               onClick={handleOpen}
            >
               <Badge badgeContent={5} color="primary">
                  <ShoppingCart fontSize="medium" />
               </Badge>
            </IconButton>
            <IconButton aria-label="notifi" className={classes.navIconBtn}>
               <Notifications fontSize="medium" />
            </IconButton>
            <IconButton aria-label="person" className={classes.navIconBtn}>
               <Person fontSize="medium" />
            </IconButton>
         </Box>
      </Toolbar>
   );
}

export default Nav1;
