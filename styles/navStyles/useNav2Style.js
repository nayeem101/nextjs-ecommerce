import { makeStyles } from "@material-ui/core";

const useNav1Styles = makeStyles((theme) => ({
   nav2: {
      backgroundColor: theme.palette.primary.main,
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 3),
   },

   categoriesMenu: {
      color: "#fff",
      width: "auto",
      cursor: "pointer",
      height: "100%",
      fontWeight: 500,
      transition: "all .5s",
      padding: theme.spacing(1),
      position: "relative",
      zIndex: 1,
      display: "flex",
      alignItems: "center",
      "&:hover": {
         backgroundColor: theme.palette.primary.light,
      },
   },

   categoriesMenuText: {
      padding: theme.spacing(0, 1),
      fontSize: "1.5rem",
   },

   categoriesMenuItems: {
      position: "absolute",
      top: "39px",
      left: 0,
      listStyle: "none",
      backgroundColor: theme.palette.secondary.light,
      width: "100%",
      padding: theme.spacing(1),
      borderRadius: "0 0 .5rem .5rem",
   },

   categoriesMenuItem: {
      width: "100%",
      borderBottom: `2px solid ${theme.palette.primary.main}`,
   },

   categoriesMenuItemLink: {
      textDecoration: "none",
      color: theme.palette.primary.light,
      fontSize: "1rem",
   },

   navMenu: {
      listStyle: "none",
      flexGrow: 1,

      display: "flex",
      justifyContent: "flex-end",
   },
   navMenuItem: {
      margin: theme.spacing(0, 2),
   },
   navMenuItemLink: {
      textDecoration: "none",
      color: "#fff",
      fontSize: "1rem",
      padding: theme.spacing(1, 2),
      fontWeight: 500,
      transition: "all .5s",
      borderRadius: ".5rem",

      "&:hover": {
         backgroundColor: theme.palette.primary.light,
      },
   },
}));

export default useNav1Styles;
