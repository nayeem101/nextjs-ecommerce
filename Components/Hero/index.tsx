import { Grid } from "@material-ui/core";
import SimpleImageSlider from "react-simple-image-slider";

import Categories from "./Categories";

import useHeroStyles from "../../styles/heroStyles/useHeroStyles";

const sliderList = [
   {
      url: "/assests/images/eldorado.png",
   },
   {
      url: "/assests/images/shop-image.jpeg",
   },
   {
      url: "/assests/images/shop-img2.jpg",
   },
];

const Hero = () => {
   const classes = useHeroStyles();
   return (
      <Grid container style={{ padding: "0 3rem" }}>
         <Grid item md={3}>
            <Categories />
         </Grid>
         <Grid item md={9}>
            <div className={classes.slider}>
               <SimpleImageSlider
                  width={945}
                  height={380}
                  images={sliderList}
                  showBullets={true}
                  showNavs={true}
                  startIndex={0}
               />
            </div>
         </Grid>
      </Grid>
   );
};

export default Hero;
