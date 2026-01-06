import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./variant.css";



export default function ProductVariant({ onChangeColor }) {
  const [storage, setStorage] = useState("1TB");
  const [color, setColor] = useState("blue");
// THONG THONG CHI SAN PHAm
  const storages = ["256GB", "512GB", "1TGB"];

  const colors = [
    {
      id: "blue",
      name: "Vàng",
      price: "7.990.000đ",
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:58:58/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-11-pro-max-gold-select-2019_1_1_3_2_4_5.png",
    },
    {
      id: "yellow",
      name: "Đen",
      price: "7.990.000đ",
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:58:58/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-11-pro-max-silver-select-2019_1_1_3_2_4_5.png",
    },
    {
      id: "black",
      name: "Đen",
      price: "7.990.000đ",
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:58:58/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-11-pro-max-silver-select-2019_1_1_3_2_4_5.png",
    },
    {
      id: "white",
      name: "Trắng",
      price: "7.990.000đ",
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:58:58/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-11-pro-max-silver-select-2019_1_1_3_2_4_5.png",
    },
  ];

  return (
    <div className="variant-box">
      {/* ===== STORAGE ===== */}
      <h4>Phiên bản</h4>
      <div className="storage-list">
        {storages.map((item) => (
          <button
            key={item}
            className={`storage-item ${storage === item ? "active" : ""}`}
            onClick={() => setStorage(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* ===== COLOR ===== */}
      <h4>Màu sắc</h4>
      <div className="color-list">
        {colors.map((c) => (
          <div
            key={c.id}
            className={`color-item ${color === c.id ? "active" : ""}`}
            onClick={() => {
              console.log("setColor(c.id)", c.name )
              setColor(c.id)
              onChangeColor(c.img); 
            } }
          >
            <img src={c.img} alt={c.id} />
            <div className="color-info">
              
              <span>{c.name}</span>
              
              <strong>{c.price}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
