import { makeStyles } from "@material-ui/core";

const useHeroStyles = makeStyles((theme) => ({
   grid: {
      padding: theme.spacing(0, 3),
   },
   imageArea: {
      flexGrow: 1,
      justifyContent: "flex-end",
   },
   image: {
      borderRadius: theme.spacing(1),
      marginTop: theme.spacing(2),
      height: "30rem",
      width: "40rem",
   },
   categoriesMenuItems: {
      backgroundColor: theme.palette.secondary.light,
      padding: theme.spacing(1),
      borderRadius: "0 0 .5rem .5rem",
      width: theme.spacing(27),
   },

   categoriesMenuItem: {
      width: "100%",
      // borderBottom: `2px solid ${theme.palette.primary.main}`,
   },

   categoriesMenuItemLink: {
      textDecoration: "none",
      color: theme.palette.primary.light,
      fontSize: "1rem",
   },
}));

export default useHeroStyles;
