import { Menu as MenuIcon, ExpandMore, Storefront } from "@material-ui/icons";
import { useState } from "react";

import useNav2Styles from "../../styles/navStyles/useNav2Style";

function Nav2() {
  const classes = useNav2Styles();

  const [showCat, setShowCat] = useState(false);

  const handleShow = () => {
    setShowCat(!showCat);
  };

  return (
    <div className={classes.nav2}>
      <div className={classes.categoriesMenu} onClick={handleShow}>
        <MenuIcon fontSize="large" />
        <span className={classes.categoriesMenuText}>Categories</span>
        <ExpandMore fontSize="large" />

        {showCat && (
          <ul className={classes.categoriesMenuItems}>
            <li className={classes.categoriesMenuItem}>
              <a href="#" className={classes.categoriesMenuItemLink}>
                Casual Shoes
              </a>
            </li>
            <li className={classes.categoriesMenuItem}>
              <a href="#" className={classes.categoriesMenuItemLink}>
                Casual Shoes
              </a>
            </li>
            <li className={classes.categoriesMenuItem}>
              <a href="#" className={classes.categoriesMenuItemLink}>
                Casual Shoes
              </a>
            </li>
            <li className={classes.categoriesMenuItem}>
              <a href="#" className={classes.categoriesMenuItemLink}>
                Casual Shoes
              </a>
            </li>
            <li className={classes.categoriesMenuItem}>
              <a href="#" className={classes.categoriesMenuItemLink}>
                Casual Shoes
              </a>
            </li>
            <li className={classes.categoriesMenuItem}>
              <a href="#" className={classes.categoriesMenuItemLink}>
                Casual Shoes
              </a>
            </li>
            <li className={classes.categoriesMenuItem}>
              <a href="#" className={classes.categoriesMenuItemLink}>
                Casual Shoes
              </a>
            </li>
          </ul>
        )}
      </div>
      <ul className={classes.navMenu}>
        <li className={classes.navMenuItem}>
          <a href="#" className={classes.navMenuItemLink}>
            Home
          </a>
        </li>
        <li className={classes.navMenuItem}>
          <a href="#" className={classes.navMenuItemLink}>
            Home
          </a>
        </li>
        <li className={classes.navMenuItem}>
          <a href="#" className={classes.navMenuItemLink}>
            Home
          </a>
        </li>
        <li className={classes.navMenuItem}>
          <a href="#" className={classes.navMenuItemLink}>
            Home
          </a>
        </li>
        <li className={classes.navMenuItem}>
          <a href="#" className={classes.navMenuItemLink}>
            Home
          </a>
        </li>
        <li className={classes.navMenuItem}>
          <a href="#" className={classes.navMenuItemLink}>
            Home
          </a>
        </li>
        <li className={classes.navMenuItem}>
          <a href="#" className={classes.navMenuItemLink}>
            Home
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav2;
