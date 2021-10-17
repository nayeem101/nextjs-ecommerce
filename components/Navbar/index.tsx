import { makeStyles, AppBar, Typography } from "@material-ui/core";
import { Storefront } from "@material-ui/icons";

import Nav1 from "./Nav1";
import Nav2 from "./Nav2";

const useNavfullStyles = makeStyles((theme) => ({
   navTop: {
      margin: 0,
      backgroundColor: theme.palette.secondary.light,
      padding: theme.spacing(0, 3),
      height: "40px",
      fontSize: ".9rem",
      letterSpacing: "1px",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
   },
   offset: theme.mixins.toolbar,
}));

function Navfull() {
   const classes = useNavfullStyles();

   return (
      <>
         <nav className={classes.navTop}>
            <Storefront color='secondary' />
            <Typography component='span' variant='subtitle1' color='secondary'>
               Shop no. 6, 5th floor, Ananda City Center, Kandirpar, Cumilla
            </Typography>
         </nav>
         {/* <div className={classes.offset}></div> */}
         <AppBar position='sticky'>
            <Nav1 />
            <Nav2 />
         </AppBar>
      </>
   );
}

export default Navfull;
