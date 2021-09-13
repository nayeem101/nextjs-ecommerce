import { makeStyles } from "@material-ui/core";

const useNav1Styles = makeStyles((theme) => ({
  nav1: {
    backgroundColor: "#fff",
    height: "7rem",

    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 30),
  },

  logo: {
    widht: "auto",
    fontSize: "3rem",
    fontWeight: 700,
    textTransform: "uppercase",

    display: "inline-block",
  },

  searchAndIcon: {
    flexGrow: 1,

    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  searchBar: {
    display: "flex",
  },
  searchArea: {
    border: `2px solid ${theme.palette.primary.main}`,
    outline: "none",
    height: "4.5rem",
    width: "40rem",
    borderRadius: ".5rem 0 0 .5rem",
    paddingLeft: theme.spacing(1),
    fontSize: "1.6rem",
    fontWeight: 600,
  },

  searchIcon: {
    color: "#fff",
    backgroundColor: theme.palette.primary.main,
    height: "4.5rem",
    width: "5rem",
    padding: theme.spacing(1),
    borderRadius: "0 .5rem .5rem 0",
    cursor: "pointer",
  },

  navIcon: {
    fontSize: "3rem",
    borderRadius: "50%",
    backgroundColor: theme.palette.secondary.light,
    marginLeft: theme.spacing(2),
    padding: ".3rem",
  },
}));

export default useNav1Styles;
