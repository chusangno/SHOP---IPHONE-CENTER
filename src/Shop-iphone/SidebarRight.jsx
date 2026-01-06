import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sidebarSettings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 600,
  arrows: true,

  slidesToShow: 3, // PC
  slidesToScroll: 1,

  swipe: true,
  swipeToSlide: true,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3, // mobile
      },
    },
  ],
};

const images = [
     "/banner4.JPG",
   "/2.png", 
     "/1.png",
     "/3.png"

 
  ];

export default function SidebarRight() {
  return (
    <div className="sidebar-right">
      <Slider {...sidebarSettings}>
        {images.map((img, index) => (
          <div key={index} className="sidebar-slide">
            <img src={img} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
