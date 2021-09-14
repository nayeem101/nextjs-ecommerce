import { makeStyles } from "@material-ui/core";
import Image from "next/image";

const useHeroStyles = makeStyles((theme) => ({
    slide: {
        display: "flex",
        justifyContent: "flex-end",
    },
    image: {
        borderRadius: theme.spacing(1),
    },
}));

const Hero = () => {
    const classes = useHeroStyles();
    return (
        <div className={classes.slide}>
            <Image
                src='/assests/images/shop-image.jpeg'
                alt='shop image'
                height={500}
                width={1000}
                className={classes.image}
            />
        </div>
    );
};

export default Hero;
