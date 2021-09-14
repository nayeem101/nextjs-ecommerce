import { useState } from "react";
import Link from "next/link";

import { Menu as MenuIcon, ExpandMore } from "@material-ui/icons";
import useNav2Styles from "../../styles/navStyles/useNav2Style";

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

   const [showCat, setShowCat] = useState(false);

   const handleShow = () => {
      setShowCat(!showCat);
   };

   return (
      <div className={classes.nav2}>
         <div className={classes.categoriesMenu} onClick={handleShow}>
            <div>
               <MenuIcon fontSize='medium' />
               <span className={classes.categoriesMenuText}>Categories</span>
               <ExpandMore fontSize='medium' />
            </div>

            {showCat && (
               <ul className={classes.categoriesMenuItems}>
                  {categoriesList.map((category) => (
                     <li
                        className={classes.categoriesMenuItem}
                        key={category.id}
                     >
                        <Link href={category.url}>
                           <a className={classes.categoriesMenuItemLink}>
                              {category.title}
                           </a>
                        </Link>
                     </li>
                  ))}
               </ul>
            )}
         </div>
         <ul className={classes.navMenu}>
            {navList.map((item, index) => (
               <li className={classes.navMenuItem} key={index}>
                  <Link href={item.url}>
                     <a className={classes.navMenuItemLink}>{item.title}</a>
                  </Link>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Nav2;
