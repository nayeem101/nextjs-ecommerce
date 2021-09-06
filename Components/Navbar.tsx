import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  InputBase,
  Container,
  Grid,
  Menu,
  MenuItem,
} from "@material-ui/core";

import {
  Notifications,
  Search,
  ShoppingCart,
  Person,
  Menu as MenuIcon,
  ExpandMore,
} from "@material-ui/icons";
import { useState } from "react";

import useNavStyles from "../styles/useNavStyle";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//     },
//     search: {
//       position: 'relative',
//       borderRadius: theme.shape.borderRadius,
//       marginRight: theme.spacing(2),
//       marginLeft: 0,
//       width: '100%',
//       [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(3),
//         width: 'auto',
//       },
//     },
//     searchIcon: {
//       padding: theme.spacing(0, 2),
//       height: '100%',
//       position: 'absolute',
//       pointerEvents: 'none',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     inputRoot: {
//       color: 'inherit',
//     },
//     inputInput: {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//       transition: theme.transitions.create('width'),
//       width: '100%',
//       [theme.breakpoints.up('md')]: {
//         width: '20ch',
//       },
//     },
//   }),
// );

const Navbar = () => {
  const navStyles = useNavStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleShowMenu = (e) => {
    setAnchorEl(e.currentTarget);
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <>
      <AppBar position="fixed" className={navStyles.appBar}>
        <Toolbar className={navStyles.toolbar}>
          <Typography variant="h6" className={navStyles.logo}>
            ElDorado
          </Typography>

          <div className={navStyles.searchBar}>
            <InputBase
              className={navStyles.search}
              placeholder="Search for Products"
            />
            <div>
              <Search className={navStyles.searchIcon} />
            </div>
          </div>

          <div>
            <Grid container spacing={1} className={navStyles.navIconList}>
              <Grid item>
                <ShoppingCart fontSize="large" />
              </Grid>
              <Grid item>
                <Notifications fontSize="large" />
              </Grid>
              <Grid item>
                <Person fontSize="large" />
              </Grid>
            </Grid>
          </div>
        </Toolbar>

        <Toolbar className={navStyles.navMenu}>
          <div>
            <IconButton
              aria-label="categories"
              aria-controls="categories-menu"
              onClick={handleShowMenu}
              style={{ color: "#fff" }}
            >
              <MenuIcon />
              <Typography variant="h6">Categories</Typography>
              <ExpandMore />
            </IconButton>

            <Menu
              id="categories-menu"
              anchorEl={anchorEl}
              open={showMenu}
              onClose={closeMenu}
              className={navStyles.navMenuItem}
            >
              <MenuItem onClick={closeMenu}>Casual Shoes</MenuItem>
              <MenuItem onClick={closeMenu}>Sneakers</MenuItem>
              <MenuItem onClick={closeMenu}>Loafers</MenuItem>
              <MenuItem onClick={closeMenu}>Sliders</MenuItem>
              <MenuItem onClick={closeMenu}>Boots</MenuItem>
              <MenuItem onClick={closeMenu}>Gift Items</MenuItem>
              <MenuItem onClick={closeMenu}>Decor Items</MenuItem>
              <MenuItem onClick={closeMenu}>Wallets</MenuItem>
              <MenuItem onClick={closeMenu}>Accessories</MenuItem>
            </Menu>
          </div>

          <div>
            <Grid container>
              <Grid item>Home</Grid>
              <Grid item>Shoes</Grid>
              <Grid item>Gift Items</Grid>
              <Grid item>Pre Order</Grid>
              <Grid item>Track Order</Grid>
              <Grid item>Flat Sale</Grid>
            </Grid>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
