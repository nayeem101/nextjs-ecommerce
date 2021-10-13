import { makeStyles } from "@material-ui/core";

const useNav2Styles = makeStyles((theme) => ({
   nav2: {
      backgroundColor: theme.palette.primary.main,
      minHeight: "60px",
   },

   categoriesMenu: {
      color: "#fff",
      width: "250px",
      fontWeight: 500,
      transition: "all .5s",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: theme.spacing(1),
      borderRadius: 0,
      backgroundColor: theme.palette.primary.light,
      "&:hover": {
         backgroundColor: theme.palette.secondary.main,
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
      margin: theme.spacing(0, 1),
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
