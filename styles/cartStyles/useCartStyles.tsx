import { makeStyles } from "@material-ui/core";

const useCartStyles = makeStyles((theme) => ({
   card: {
      height: "auto",
      width: "15rem",
   },
   cartImage: {
      width: "100%",
   },
   prevPrice: {
      textDecoration: "line-through",
      display: "inline-block",
      marginRight: theme.spacing(2),
   },
   curPrice: {
      display: "inline-block",
   },
   cartButton: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.light,
      margin: "0 auto",
      width: "50%",
      borderRadius: "5px",

      "&:hover": {
         backgroundColor: theme.palette.primary.dark,
      },
   },
   cartButtonText: {},
}));

export default useCartStyles;
