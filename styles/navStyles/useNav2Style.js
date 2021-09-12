import { makeStyles } from "@material-ui/core";

const useNav1Styles = makeStyles((theme) => ({
  nav2: {
    backgroundColor: theme.palette.primary.main,
    height: "6rem",

    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 30),
  },

  categoriesMenu: {
    color: "#fff",
    width: "auto",
    cursor: "pointer",
    height: "100%",
    fontSize: "2.5rem",
    fontWeight: 500,
    transition: "all .5s",
    padding: theme.spacing(1),

    position: "relative",

    display: "flex",
    alignItems: "center",

    // "&:not(:firstChild)": {
    //   marginLeft: ".5rem",
    // },

    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },

  categoriesMenuText: {
    padding: theme.spacing(0, 1),
  },

  categoriesMenuItems: {
    position: "absolute",
    top: "39px",
    left: 0,
    listStyle: "none",
    backgroundColor: theme.palette.secondary.light,
    width: "100%",
    padding: theme.spacing(1),
    textAlign: "center",
    borderRadius: "0 0 .5rem .5rem",
  },

  categoriesMenuItem: {
    width: "100%",

    borderBottom: `2px solid ${theme.palette.primary.main}`,
  },

  categoriesMenuItemLink: {
    textDecoration: "none",
    color: theme.palette.primary.light,
    fontSize: "1.8rem",
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
    fontSize: "2rem",
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
