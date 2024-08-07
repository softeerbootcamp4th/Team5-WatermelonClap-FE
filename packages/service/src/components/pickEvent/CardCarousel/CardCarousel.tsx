import * as style from "./CardCarousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CardCarousel = () => {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: false,

    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div css={style.sliderContainer}>
      <Slider {...settings} css={style.cardWrap}>
        {cardImgsPath.map((path, idx) => (
          <img src={path} key={idx} css={style.cardItem} />
        ))}
      </Slider>
    </div>
  );
};

const cardImgsPath = Array.from(
  { length: 7 },
  (_, idx) => `images/pickEvent/card/card-${idx + 1}.svg`,
);
