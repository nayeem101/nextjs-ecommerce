import { Storefront } from "@material-ui/icons";

import Nav1 from "./Nav1";
import Nav2 from "./Nav2";

import useNavfullStyles from "../../styles/navStyles/useNavfullStyles";

function Navfull() {
  const classes = useNavfullStyles();

  return (
    <>
      <p className={classes.navTop}>
        <Storefront /> Shop no. 6, 6th floor, Ananda City Center, Kandirpar,
        Cumilla
      </p>

      <nav>
        <Nav1 />
        <Nav2 />
      </nav>
    </>
  );
}

export default Navfull;
