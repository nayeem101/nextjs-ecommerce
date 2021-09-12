import { makeStyles } from "@material-ui/core";

const useNavfullStyles = makeStyles((theme) => ({
  navTop: {
    margin: 0,
    padding: theme.spacing(0, 2),
    backgroundColor: theme.palette.secondary.light,
    height: "3.5rem",
    fontSize: "1.4rem",
    letterSpacing: "1px",

    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
}));

export default useNavfullStyles;
