import { makeStyles } from "@material-ui/core";

const useHeroStyles = makeStyles((theme) => ({
   categoriesMenuItems: {
      maxWidth: "250px",
      width: "100%",
      backgroundColor: "#f5fcff",
      borderRadius: "0 0 5px 5px",
      boxShadow: theme.shadows[2],
      paddingTop: theme.spacing(0.9),
   },

   categoriesMenuItemLink: {
      width: "100%",
      textDecoration: "none",
      color: theme.palette.primary.main,
      fontSize: "1.2rem",
      marginLeft: theme.spacing(2),
      padding: theme.spacing(1, 0),
   },
   slider: {
      paddingTop: theme.spacing(2),
   },
   image: {
      borderRadius: theme.spacing(1),
   },
}));

export default useHeroStyles;
