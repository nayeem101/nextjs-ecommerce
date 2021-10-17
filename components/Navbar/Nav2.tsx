import Link from "next/link";

import { Menu as MenuIcon, ExpandMore } from "@material-ui/icons";

import useNav2Styles from "../../styles/navStyles/useNav2Style";

import {
   Toolbar,
   IconButton,
   Box,
   Typography,
   List,
   ListItem,
   ListItemText,
} from "@material-ui/core";

const navList = [
   {
      title: "Home",
      url: "/",
   },
   {
      title: "Shoes",
      url: "/products/shoes",
   },
   {
      title: "Gift Items",
      url: "/products/gift-items",
   },
   {
      title: "Pre Order",
      url: "/pre-order",
   },
   {
      title: "Track Order",
      url: "/track-order",
   },
   {
      title: "Flat Sale",
      url: "/sale",
   },
];

const Nav2 = () => {
   const classes = useNav2Styles();

   return (
      <Toolbar className={classes.nav2}>
         <IconButton
            color="inherit"
            aria-label="cat-menu"
            className={classes.categoriesMenu}
         >
            <MenuIcon fontSize="medium" />
            <Typography
               variant="h5"
               component="span"
               className={classes.categoriesMenuText}
            >
               Categories
            </Typography>
            <ExpandMore fontSize="medium" />
         </IconButton>

         <List className={classes.navMenu}>
            {navList.map((item, index) => (
               <Link href={item.url}>
                  <ListItem button className={classes.navMenuItem} key={index}>
                     <a className={classes.navMenuItemLink}>{item.title}</a>
                  </ListItem>
               </Link>
            ))}
         </List>
      </Toolbar>
   );
};

export default Nav2;
