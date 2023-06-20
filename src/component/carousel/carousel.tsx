import OwlCarousel from "react-owl-carousel";

import "./carousel.scss";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

export const Carousel = (props: {
    items?: number;
    loop?: boolean;
    autoplay?: boolean;
}) => {
    return (
        <OwlCarousel
            items={props.items}
            loop={props.loop}
            autoplay={props.autoplay}
            autoplayTimeout={5000}
        >
            <div className="item carouselItem">
                <img
                    className="imgCarousel"
                    src={
                        process.env.PUBLIC_URL +
                        "/media/introduction/nura-true-intro.jpeg"
                    }
                    alt="nura true"
                />
            </div>

            <div className="item carouselItem">
                <img
                    className="imgCarousel"
                    src={
                        process.env.PUBLIC_URL +
                        "/media/introduction/nuraloop-intro.jpg"
                    }
                    alt="nuraloop"
                />
            </div>

            <div className="item carouselItem">
                <img
                    className="imgCarousel"
                    src={
                        process.env.PUBLIC_URL +
                        "/media/introduction/nuraphone-intro.jpg"
                    }
                    alt="nuraphone"
                />
            </div>
        </OwlCarousel>
    );
};
