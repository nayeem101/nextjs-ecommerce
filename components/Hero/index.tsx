import { Grid, makeStyles } from "@material-ui/core";
import Image from "next/image";

import Categories from "./Categories";

import useHeroStyles from "../../styles/heroStyles/useHeroStyles";

const Hero = () => {
   const classes = useHeroStyles();
   return (
      <Grid container className={classes.grid}>
         <Grid item md={3}>
            <Categories />
         </Grid>
         <Grid item md={9} className={classes.imageArea}>
            <img
               src="/assests/images/shop-image.jpeg"
               alt="shop image"
               className={classes.image}
            />
         </Grid>
      </Grid>
   );
};

export default Hero;
