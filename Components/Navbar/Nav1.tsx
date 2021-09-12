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
    <div className={classes.nav1}>
      <span className={classes.logo}>El Dorado</span>
      <div className={classes.searchAndIcon}>
        <span className={classes.searchBar}>
          <input
            placeholder="search for products"
            className={classes.searchArea}
          />
          <SearchIcon className={classes.searchIcon} />
        </span>
        <ShoppingCart className={classes.navIcon} />
        <Notifications className={classes.navIcon} />
        <Person className={classes.navIcon} />
      </div>
    </div>
  );
}

export default Nav1;
