import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";


const sidebarSettings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 800,
  arrows: true, // ❌ tắt arrow slick
  slidesToShow: 2,
  slidesToScroll: 1,
};

const images = [
  
];

export default function SidebarRight() {
  return (
    <div className="sidebar-right">
      <Slider {...sidebarSettings}>
        {images.map((img, index) => (
          <div key={index} className="sidebar-item">
            <img src={img} className="sidebar-img" alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
