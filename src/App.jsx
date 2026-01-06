import React, { useState } from "react";
import "./App.css";
import SnowCanvas from "./Shop-iphone/SnowCanvas";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



export default function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [keyword, setKeyword] = useState(""); // ✅ FIX LỖI

  const products = [
  {
    id: 1,
    name: "iPhone 17 Pro Max",
    price: 33990000,
    image:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone_17_pro_max.png",
  },
  {
    id: 2,
    name: "iPhone 15 Pro Max",
    price: 28990000,
    image:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone_15_pro_max.png",
  },
  {
    id: 3,
    name: "iPhone 13",
    price: 15990000,
    image:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone_13.png",
  },
];
 const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );


  return (
    <>
      {/* HEADER */}
      <header className="cs-header">
        {/* LEFT */}
        <div className="cs-left">
          <div className="hamburger" onClick={() => setOpenMenu(true)}>
            ☰
          </div>
          <div className="logo">iPhone Center</div>
        </div>

        {/* SEARCH */}
       <div className="cs-search">
  <i className="fa fa-search search-icon"></i>
  <input
    type="text"
    placeholder="Bạn cần tìm gì?"
    value={keyword}
    onChange={(e) => setKeyword(e.target.value)}
    
  />
</div>


        {/* RIGHT */}
        <div className="cs-right">
          <div className="hotline">
            <span>Gọi mua</span>
            <strong>0388887484</strong>
          </div>
          <div className="cart">
            🛒
            <span className="badge"><i>0</i></span>
          </div>
        </div>
      </header>

      {/* OVERLAY */}
      {openMenu && (
        <div className="overlay" onClick={() => setOpenMenu(false)} />
      )}

      {/* MOBILE MENU */}
      <aside className={`mobile-menu ${openMenu ? "active" : ""}`}>
        <div className="menu-header">
          <span>Danh mục</span>
          <button onClick={() => setOpenMenu(false)}>✕</button>
        </div>

        <a href="#">📱 iPhone</a>
        <a href="#">📲 LH</a>
        <a href="#">💻 Laptop</a>
        <a href="#">🎧 Phụ kiện</a>
        <a href="#">🔥 Khuyến mãi</a>
      </aside>

      {/* BANNER */}
   
{/* BANNER */}
<section className="banner-item">
  
  <Slider
    dots={true}
    infinite={true}
    speed={600}
    slidesToShow={1}
    slidesToScroll={1}
    autoplay={true}
    autoplaySpeed={3000}
    arrows={false}
    pauseOnHover={false}
  >
    <div>
      <img
        src="/1.png"
        alt="Banner 1"
        className="banner-img"
      />
    </div>

    <div>
      <img
        src="/2.png"
        alt="Banner 2"
        className="banner-img"
      />
    </div>

    <div>
      <img
        src="/3.png"
        alt="Banner 3"
        className="banner-img"
      />
    </div>
     <div>
      <img
        src="/4.jpg"
        alt="Banner 4"
        className="banner-img"
      />
    </div>
  </Slider>
</section>
    </>
  );
}
