import { makeStyles } from "@material-ui/core";

const useNavStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    maxWidth: 1500,
  },
  logo: {
    color: "#000",
    fontSize: 25,
    flexGrow: 1,
  },
  searchBar: {
    display: "flex",
    height: 50,
    borderRadius: 5,
    border: `2px solid ${theme.palette.secondary.main}`,
  },
  search: {
    // border: `2px solid ${theme.palette.secondary.main}`,
    backgroundColor: theme.palette.secondary.light,
    borderRadius: 2,
    paddingLeft: 10,
    width: 400,
  },
  searchIcon: {
    backgroundColor: theme.palette.secondary.main,
    height: "100%",
    width: 55,
    padding: "0 10px",
    cursor: "pointer",
  },
  navIconList: {
    color: theme.palette.primary.dark,
  },
  navMenu: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.light,
    display: "flex",
    justifyContent: "space-between",
  },
  navMenuCategoryItem: {},
  navMenuItem: {
    fontSize: 25,
  },
}));

export default useNavStyles;
