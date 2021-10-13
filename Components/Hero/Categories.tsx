import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

import { Inbox as InboxIcon, CardGiftcard } from "@material-ui/icons";
import { List, ListItem, Divider, Box } from "@material-ui/core";
import useHeroStyles from "../../styles/heroStyles/useHeroStyles";

const categoriesList = [
   {
      id: "cat-1",
      title: "Casual Shoes",
      url: "/products/shoes/casual",
      icon: "/assests/images/shoes.png",
   },
   {
      id: "cat-2",
      title: "Sneakers",
      url: "/products/shoes/sneakers",
      icon: "/assests/images/sneakers.png",
   },
   {
      id: "cat-3",
      title: "Loafers",
      url: "/products/shoes/loafers",
      icon: "/assests/images/loafer.png",
   },
   {
      id: "cat-4",
      title: "Sliders",
      url: "/products/shoes/slider",
      icon: "/assests/images/sandals.png",
   },
   {
      id: "cat-5",
      title: "Boots",
      url: "/products/shoes/boots",
      icon: "/assests/images/boots.png",
   },
   {
      id: "cat-6",
      title: "Gift Items",
      url: "/products/gift-tems",
      icon: "/assests/images/gift-box.png",
   },
   {
      id: "cat-7",
      title: "Decor Items",
      url: "/products/decor-items",
      icon: "/assests/images/decor.png",
   },
   {
      id: "cat-8",
      title: "Wallets",
      url: "/products/wallets",
      icon: "/assests/images/wallet.png",
   },
   {
      id: "cat-9",
      title: "Accessories",
      url: "/products/accessories",
      icon: "/assests/images/accessories.png",
   },
];

const Categories = () => {
   const classes = useHeroStyles();

   return (
      <List className={classes.categoriesMenuItems} disablePadding>
         {categoriesList.map((category) => (
            <Fragment key={category.id}>
               <ListItem button style={{ padding: 0, paddingLeft: "12px" }}>
                  <Image src={category.icon} width={40} height={40} />

                  <Link href={category.url}>
                     <a className={classes.categoriesMenuItemLink}>
                        {category.title}
                     </a>
                  </Link>
               </ListItem>
               <Divider />
            </Fragment>
         ))}
      </List>
   );
};

export default Categories;
