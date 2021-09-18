import Link from "next/link";

import { Inbox as InboxIcon } from "@material-ui/icons";
import { List, ListItem, ListItemIcon, Divider } from "@material-ui/core";
import useHeroStyles from "../../styles/heroStyles/useHeroStyles";

const categoriesList = [
   {
      id: "cat-1",
      title: "Casual Shoes",
      url: "/products/shoes/casual",
      icon: "",
   },
   {
      id: "cat-2",
      title: "Sneakers",
      url: "/products/shoes/sneakers",
      icon: "",
   },
   {
      id: "cat-3",
      title: "Loafers",
      url: "/products/shoes/loafers",
      icon: "",
   },
   {
      id: "cat-4",
      title: "Sliders",
      url: "/products/shoes/slider",
      icon: "",
   },
   {
      id: "cat-5",
      title: "Boots",
      url: "/products/shoes/boots",
      icon: "",
   },
   {
      id: "cat-6",
      title: "Gift Items",
      url: "/products/gifti-tems",
      icon: "",
   },
   {
      id: "cat-7",
      title: "Decor Items",
      url: "/products/decor-items",
      icon: "",
   },
   {
      id: "cat-8",
      title: "Accessories",
      url: "/products/accessories",
      icon: "",
   },
];

const Nav2 = () => {
   const classes = useHeroStyles();

   return (
      <List className={classes.categoriesMenuItems}>
         {categoriesList.map((category) => (
            <>
               <ListItem
                  button
                  className={classes.categoriesMenuItem}
                  key={category.id}
               >
                  <ListItemIcon>
                     <InboxIcon />
                  </ListItemIcon>
                  <Link href={category.url}>
                     <a className={classes.categoriesMenuItemLink}>
                        {category.title}
                     </a>
                  </Link>
               </ListItem>

               <Divider />
            </>
         ))}
      </List>
   );
};

export default Nav2;
