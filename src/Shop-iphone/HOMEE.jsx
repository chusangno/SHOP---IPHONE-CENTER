import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import "./HOME.css";

// SLICK HOME – FIXED
const sliderSettings = {
  
  slidesToShow: 3, // PC

  responsive: [
    {
      breakpoint: 768, // Mobile
      settings: {
        slidesToShow: 2,
        arrows: true, // ✅ TẮT
        dots: true,
      },
    },
  ],
};

const products = [
  {
    id: 1,
    name: "iPhone 11 64GB",
    price: "7.690.000đ", 
    oldPrice: "9.190.000đ",
    discount: "-33%",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-11.png",
    rating: 5,
    variants: {
      screen: "6.1 inch OLED",
      chip: "Apple A18 Pro",
      ram: "8GB",
      storage: "128GB",
      camera: "48MP + 12MP",
      battery: "3274 mAh",
      os: "iOS 18",
    },
  },
  {
    id: 2,
    name: "Phone 12 Pro Max 128GB ",
    price: "10.950.000đ",
    oldPrice: "12.250.000đ",
    discount: "-24%",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/1/_/1_251_1.jpg",
    rating: 5,
    variants: {
      screen: "6.1 inch OLED",
      chip: "Apple A18 Pro",
      ram: "8GB",
      storage: "128GB",
      camera: "48MP + 12MP",
      battery: "3274 mAh",
      os: "iOS 18",
    },
  },
  {
    id: 3,
    name: "iPhone 13 128GB ",
    price: "10.110.000đ",
    oldPrice: "12.250.000đ",
    discount: "-35%",
    img: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/t/_/t_m_19.png",
    rating: 5,
    variants: {
      screen: "6.1 inch OLED",
      chip: "Apple A18 Pro",
      ram: "8GB",
      storage: "128GB",
      camera: "48MP + 12MP",
      battery: "3274 mAh",
      os: "iOS 18",
    },
  },
  {
    id: 4,
    name: "iPhone 14 Pro Max 128GB",
    price: "28.990.000đ",
    oldPrice: "38.250.000đ",
    discount: "-24%",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14-pro_2__5.png",
    rating: 5,
    variants: {
      screen: "6.1 inch OLED",
      chip: "Apple A18 Pro",
      ram: "8GB",
      storage: "128GB",
      camera: "48MP + 12MP",
      battery: "3274 mAh",
      os: "iOS 18",
    },
  },
  {
    id: 5,
    name: "iPhone 15 Pro Max 512GB ",
    price: "28.990.000đ",
    oldPrice: "38.250.000đ",
    discount: "-24%",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_5.png",
    rating: 5,
    variants: {
      screen: "6.1 inch OLED",
      chip: "Apple A18 Pro",
      ram: "8GB",
      storage: "128GB",
      camera: "48MP + 12MP",
      battery: "3274 mAh",
      os: "iOS 18",
    },
  },
  {
    id: 6,
    name: "iPhone 16 Pro 128GB ",
    price: "25.990.000đ",
    oldPrice: "30.250.000đ",
    discount: "-24%",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro_1.png",
    rating: 5,
    variants: {
      screen: "6.1 inch OLED",
      chip: "Apple A18 Pro",
      ram: "8GB",
      storage: "128GB",
      camera: "48MP + 12MP",
      battery: "3274 mAh",
      os: "iOS 18",
    },
  },
  {
    id: 7,
    name: "iPhone 16 Pro Max 256GB ",
    price: "28.990.000đ",
    oldPrice: "35.250.000đ",
    discount: "-24%",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png",
    rating: 5,
    variants: {
      screen: "6.1 inch OLED",
      chip: "Apple A18 Pro",
      ram: "8GB",
      storage: "128GB",
      camera: "48MP + 12MP",
      battery: "3274 mAh",
      os: "iOS 18",
    },
  },
  {
    id: 8,
    name: "iPhone 16 Plus 128GB ",
    price: "23.990.000đ",
    oldPrice: "28.250.000đ",
    discount: "-24%",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-plus-1.png",
    rating: 5,
    variants: {
      screen: "6.1 inch OLED",
      chip: "Apple A18 Pro",
      ram: "8GB",
      storage: "128GB",
      camera: "48MP + 12MP",
      battery: "3274 mAh",
      os: "iOS 18",
    },
  },
  {
    id: 9,
    name: "iPhone 16 Pro Max 512GB ",
    price: "32.990.000đ",
    oldPrice: "38.250.000đ",
    discount: "-24%",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max_1.png",
    rating: 5,
    variants: {
      screen: "6.1 inch OLED",
      chip: "Apple A18 Pro",
      ram: "8GB",
      storage: "128GB",
      camera: "48MP + 12MP",
      battery: "3274 mAh",
      os: "iOS 18",
    },
  },
  {
    id: 10,
    name: "iPhone 14 Pro Max 128GB  ",
    price: "17.190.000đ",
    oldPrice: "25.250.000đ",
    discount: "-24%",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14-pro_2__5.png",
    rating: 5,
    variants: {
      screen: "6.1 inch OLED",
      chip: "Apple A18 Pro",
      ram: "8GB",
      storage: "128GB",
      camera: "48MP + 12MP",
      battery: "3274 mAh",
      os: "iOS 18",
    },
  },
  {
    id: 11,
    name: "iPhone 13 Pro Max 256GB ",
    price: "12.190.000đ",
    oldPrice: "20.250.000đ",
    discount: "-24%",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-13-pro-max-256gb.png",
    rating: 5,
    variants: {
      screen: "6.1 inch OLED",
      chip: "Apple A18 Pro",
      ram: "8GB",
      storage: "128GB",
      camera: "48MP + 12MP",
      battery: "3274 mAh",
      os: "iOS 18",
    },
  },
  {
    id: 12,
    name: "iPhone 12 128GB ",
    price: "8.510.000đ",
    oldPrice: "15.250.000đ",
    discount: "-24%",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/1/_/1_251_1.jpg",
    rating: 5,
    variants: {
      screen: "6.1 inch OLED",
      chip: "Apple A18 Pro",
      ram: "8GB",
      storage: "128GB",
      camera: "48MP + 12MP",
      battery: "3274 mAh",
      os: "iOS 18",
    },
  },
  {
    id: 13,
    name: "iPhone 12 Pro Max ",
    price: "11.590.000đ",
    oldPrice: "15.250.000đ",
    discount: "-24%",
    img: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/1/2/12_xanh_en.jpg",
    rating: 5,
    variants: {
      screen: "6.1 inch OLED",
      chip: "Apple A18 Pro",
      ram: "8GB",
      storage: "128GB",
      camera: "48MP + 12MP",
      battery: "3274 mAh",
      os: "iOS 18",
    },
  },
  {
    id: 14,
    name: "iPhone 15 Pro Max 512GB ",
    price: "28.990.000đ",
    oldPrice: "38.250.000đ",
    discount: "-24%",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-17-pro-max_3.jpg",
    rating: 5,
    variants: {
      screen: "6.1 inch OLED",
      chip: "Apple A18 Pro",
      ram: "8GB",
      storage: "128GB",
      camera: "48MP + 12MP",
      battery: "3274 mAh",
      os: "iOS 18",
    },
  },
  {
    id: 15,
    name: "iPhone 17 Pro Max 256GB ",
    price: "37.590.000đ",
    oldPrice: "42.250.000đ",
    discount: "-24%",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_5.png",
    rating: 5,
    variants: {
      screen: "6.1 inch OLED",
      chip: "Apple A18 Pro",
      ram: "8GB",
      storage: "128GB",
      camera: "48MP + 12MP",
      battery: "3274 mAh",
      os: "iOS 18",
    },
  },
  {
    id: 16,
    name: "iPhone 17 Pro Max 256GB ",
    price: "36.950.000đ",
    oldPrice: " 40.750.000đ",
    discount: "-24%",
    img: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-17-pro-max-1.jpg",
    rating: 5,
    variants: {
      screen: "6.1 inch OLED",
      chip: "Apple A18 Pro",
      ram: "8GB",
      storage: "128GB",
      camera: "48MP + 12MP",
      battery: "3274 mAh",
      os: "iOS 18",
    },
  },
  {
    id: 17,
    name: "iPhone 15 Pro Max 512GB ",
    price: "22.190.000đ",
    oldPrice: "27.250.000đ",
    discount: "-24%",
    img: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone15-pro-max-512gb-titan-den.jpg",
    rating: 5,
    variants: {
      screen: "6.1 inch OLED",
      chip: "Apple A18 Pro",
      ram: "8GB",
      storage: "128GB",
      camera: "48MP + 12MP",
      battery: "3274 mAh",
      os: "iOS 18",
    },
  },
  {
    id: 18,
    name: "iPhone 15 Pro Max 512GB ",
    price: "22.590.000đ",
    oldPrice: "27.250.000đ",
    discount: "-24%",
    img: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone15-pro-max-512gb-titan-nau.jpg",
    rating: 5,
    variants: {
      screen: "6.1 inch OLED",
      chip: "Apple A18 Pro",
      ram: "8GB",
      storage: "128GB",
      camera: "48MP + 12MP",
      battery: "3274 mAh",
      os: "iOS 18",
    },
  },
];

export default function HOMEE() {
   const [showLucky, setShowLucky] = useState(true);
  const [openVariant, setOpenVariant] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
const [selectedStorage, setSelectedStorage] = useState("256GB");
const [selectedColor, setSelectedColor] = useState("Xanh");

  const storages = ["256GB", "512GB", "1TB"];

const colors = [
  {
    name: "Xanh",
    price: "38.990.000đ",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-11.png",
  },
  {
    name: "Vàng",
    price: "38.990.000đ",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-17-pro-max_3.jpg",
  },
  {
    name: "Đen",
    price: "38.990.000đ",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-11.png",
  },
  {
    name: "Trắng",
    price: "38.990.000đ",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-11.png",
  },
];


  
  
  // THOI GIAN GIAM GIA
  const endTime = new Date(Date.now() + 10 * 1000);

  endTime.setHours(23, 59, 59, 59);

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const distance = endTime.getTime() - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(
          2,
          "0"
        ),
        minutes: String(Math.floor((distance / (1000 * 60)) % 60)).padStart(
          2,
          "0"
        ),
        seconds: String(Math.floor((distance / 1000) % 60)).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  // -------------
  return (
    <div className="home">
      {/* HOT SALE */}
      <div className="hot-sale">
        <h2>🔥 HOT SALE CUỐI TUẦN</h2>
        <div className="countdown">
          <span>Kết thúc sau</span>
          <span>{timeLeft.days}</span>:<span>{timeLeft.hours}</span>:
          <span>{timeLeft.minutes}</span>:<span>{timeLeft.seconds}</span>
        </div>
      </div>
      {/* CATEGORY */}
      <div className="category">
        <button className="active">Điện thoại</button>
        <button>Phụ kiện</button>
        <button>iPhone Center</button>
      </div>

      {/* PRODUCT LIST */}
      <div className="product-slider">
        <Slider {...sliderSettings}>
          {products.map((item) => (
            <div key={item.id} className="product-slide">
              <div className="product-card">
                {/* BADGE */}
                <div className="product-badges">
                  <span className="badge discount">{item.discount}</span>
                </div>

                {/* IMAGE */}
                <div
                  className="product-img"
                  onClick={() => {
                    setActiveProduct(item);
                    setOpenVariant(true);
                  }}
                >
                  <img src={item.img} alt={item.name} />
                </div>

              

                {/* CONTENT */}
                <div className="product-body">
                  <h3 className="product-name">{item.name}</h3>

                  <div className="price">
                    <span className="price-new">{item.price}</span>
                    <span className="price-old">{item.oldPrice}</span>
                  </div>

               

                  <div className="product-bottom">
                    <span className="rating">⭐ {item.rating}</span>
                    <span className="like">Yêu thích</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>



      </div>

     
      {/* ONLICK IMG SLICK */}
        {openVariant && activeProduct && (
          
  <div className="variant-overlay" onClick={() => setOpenVariant(false)}>
    <div className="variant-box" onClick={(e) => e.stopPropagation()}>
      <button className="variant-close" onClick={() => setOpenVariant(false)}>
        ✕
      </button>

      <h3>{activeProduct.name}</h3>

      {/* ✅ IMAGE HIỂN THỊ */}
      <div className="variant-image">
        <img src={activeProduct.img} alt={activeProduct.name} />
      </div>

     <div className="variant-block">
  <h3>Phiên bản</h3>
  <div className="version-options">
    {storages.map((s) => (
      <button
        key={s}
        className={selectedStorage === s ? "active" : ""}
        onClick={() => setSelectedStorage(s)}
      >
        {s}
      </button>
    ))}
  </div>
</div>
<div className="variant-block">
  <h3>Màu sắc</h3>
  <div className="color-options">
    {colors.map((c) => (
      <div
        key={c.name}
        className={`color-item ${
          selectedColor === c.name ? "active" : ""
        }`}
        onClick={() => setSelectedColor(c.name)}
      >
        <img src={c.img} alt={c.name} />
        <div>
          <span className="color-name">{c.name}</span>
          <span className="color-price">{c.price}</span>
        </div>
      </div>
    ))}
  </div>
</div>


      <div className="variant-price">
        <span className="price-new">{activeProduct.price}</span>
        <span className="price-old">{activeProduct.oldPrice}</span>
      </div>

<div className="buy-actions">
  <a
    href="https://www.facebook.com/iphonecenerbinhduong/"
    target="_blank"
    rel="noopener noreferrer"
    className="buy-btn full fb"
  >
    💬 Nhắn tin Fanpage
  </a>

  <a
    href="https://zalo.me/0969787306"
    target="_blank"
    rel="noopener noreferrer"
    className="buy-btn full zalo"
  >
    📱 Chat Zalo
  </a>
</div>

    </div>
  </div>
)}

      <div className="floating-actions">
        <img
          src="https://cdn2.cellphones.com.vn/insecure/rs:fill:100:100/q:90/plain/https://cellphones.com.vn/media/wysiwyg/icon_downloadapp.png"
          alt=""
        />
        <button className="btn-top">
          ↑<span>Lên đầu</span>
        </button>

        <button className="btn-contact">
          <a href="tel:0388887484" className="btn-contact">
            <i className="fa fa-headphones"></i>
            <span>Gọi ngay</span>
          </a>
        </button>
      </div>
    </div>
  );
}
