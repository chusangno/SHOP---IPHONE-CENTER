import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./variant.css";



export default function ProductVariant() {
  
// THONG THONG CHI SAN PHAm
  

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
            onClick={() =>{
              console.log(c.name)
              setColor(c.id)} }
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
