import { makeStyles } from "@material-ui/core";

const useNav2Styles = makeStyles((theme) => ({
   nav2: {
      backgroundColor: theme.palette.primary.main,
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 3),
   },

   categoriesMenu: {
      color: "#fff",
      height: "100%",
      width: theme.spacing(27),
      fontWeight: 500,
      transition: "all .5s",
      position: "relative",
      display: "flex",
      alignItems: "center",
      borderRadius: 0,

      "&:hover": {
         backgroundColor: theme.palette.primary.light,
      },
   },

   categoriesMenuText: {
      padding: theme.spacing(0.5, 1),
      fontWeight: 500,
   },

   navMenu: {
      flexGrow: 1,

      display: "flex",
      justifyContent: "flex-end",
   },
   navMenuItem: {
      margin: theme.spacing(0, 2),
      width: "auto",
      transition: "all .5s",
      borderRadius: ".5rem",

      "&:hover": {
         backgroundColor: theme.palette.primary.light,
      },
   },
   navMenuItemLink: {
      textDecoration: "none",
      color: "#fff",
      fontSize: "1.2rem",
      // padding: theme.spacing(1, 2),
      fontWeight: 500,
   },
}));

export default useNav2Styles;
