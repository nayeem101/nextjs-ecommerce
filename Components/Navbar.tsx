import {
  AppBar, Button, IconButton,
  Toolbar, Typography, InputBase
} from "@material-ui/core"

import { makeStyles, Theme, createStyles, } from '@material-ui/core/styles';

import { Person, Menu, Search } from "@material-ui/icons";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }),
);

const Navbar = () => {
  const styles = useStyles();

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={styles.menuButton}
            color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h6" className={styles.title}>
            ElDorado
          </Typography>
          <div className={styles.search}>
            <div className={styles.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: styles.inputRoot,
                input: styles.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Button color="secondary" variant='contained' startIcon={<Person />}>
            Login
          </Button>
        </Toolbar>
      </AppBar>

    </>
  )
}

export default Navbar;
