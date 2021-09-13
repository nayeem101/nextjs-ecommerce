import Image from "next/image";
// import shopImage from "./../public/download.jpg";

import useHeroStyles from "../../styles/useHeroStyles";

const Hero = () => {
  const classes = useHeroStyles();
  return (
    <div className={classes.slide}>
      <Image
        src="/assests/images/shop-image.jpeg"
        alt="shop image"
        height={500}
        width={1000}
        className={classes.image}
      />
    </div>
  );
};

export default Hero;
