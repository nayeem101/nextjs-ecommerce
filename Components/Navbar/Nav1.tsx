import {
   Box,
   IconButton,
   InputBase,
   Toolbar,
   Typography,
} from "@material-ui/core";
import {
   Notifications,
   Search as SearchIcon,
   ShoppingCart,
   Person,
} from "@material-ui/icons";

import useNav1Styles from "../../styles/navStyles/useNav1Styles";

function Nav1() {
   const classes = useNav1Styles();

   return (
      <Toolbar className={classes.nav1} disableGutters>
         <Box
            sx={{
               maxWidth: "1360px",
               width: "100%",
               padding: "0 3rem",
               display: "flex",
               alignItems: "center",
            }}
         >
            <Typography color='primary' variant='h4' className={classes.logo}>
               El Dorado
            </Typography>

            <Box
               display='flex'
               justifyContent='flex-end'
               alignItems='center'
               flexGrow='1'
            >
               <InputBase
                  className={classes.searchArea}
                  placeholder='search for products'
                  inputProps={{ "aria-label": "search for products" }}
               />
               <IconButton
                  type='submit'
                  className={classes.searchBtn}
                  aria-label='search'
               >
                  <SearchIcon />
               </IconButton>
            </Box>
            <Box m={1}>
               <IconButton aria-label='cart' className={classes.navIconBtn}>
                  <ShoppingCart fontSize='medium' color='primary' />
               </IconButton>
               <IconButton aria-label='notifi' className={classes.navIconBtn}>
                  <Notifications fontSize='medium' color='primary' />
               </IconButton>
               <IconButton aria-label='person' className={classes.navIconBtn}>
                  <Person fontSize='medium' color='primary' />
               </IconButton>
            </Box>
         </Box>
      </Toolbar>
   );
}

export default Nav1;
