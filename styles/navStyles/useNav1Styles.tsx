import { makeStyles } from "@material-ui/core";

const useNav1Styles = makeStyles((theme) => ({
   nav1: {
      backgroundColor: "#fff",
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 3),
   },

   logo: {
      fontWeight: 700,
      textTransform: "uppercase",
   },

   searchBar: {
      display: "flex",
   },
   searchArea: {
      border: `2px solid ${theme.palette.secondary.main}`,
      outline: "none",
      height: "45px",
      width: "300px",
      borderRadius: ".5rem 0 0 .5rem",
      paddingLeft: theme.spacing(1),
   },

   searchBtn: {
      color: "#fff",
      backgroundColor: theme.palette.secondary.main,
      padding: theme.spacing(1, 2),
      height: "45px",
      borderRadius: "0 .5rem .5rem 0",
      "&:hover": {
         backgroundColor: "#607d8b",
      },
   },
   navIconBtn: {
      backgroundColor: "#e0f2f1",
      marginLeft: theme.spacing(1),
   },
}));

export default useNav1Styles;
