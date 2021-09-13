import { makeStyles } from "@material-ui/core";

const useHeroStyles = makeStyles((theme) => ({
  slide: {
    display: "flex",
    justifyContent: "flex-end",
    padding: theme.spacing(5, 30),
  },
  image: {
    borderRadius: theme.spacing(1),
  },
}));

export default useHeroStyles;
