import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./custom-carousel-styles.css";
import defaultMarkup from './defaultMarkup';
import smallMarkup from './smallMarkup';

const CarouselWrapper = (props) => {
    const { size } = props;

    return (
        size == "small" ?
            smallMarkup : defaultMarkup
    )
};

export default CarouselWrapper;