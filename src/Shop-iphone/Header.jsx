import { useState } from "react";
import ProductVariant from "../components/ProducVariant";

function ProductCard() {
  const [openDetail, setOpenDetail] = useState(false);
  const [activeProduct, setActiveProduct] = useState({});
const [selectedImage, setSelectedImage] = useState(null);

  const products = [
    {
      id: "1",
      name: "iPhone 11 64GB | Chính hãng VN/A ",
      price: 7990000,
      oldPrice: 25990000,
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-11.png",
      badge: "Ưu đãi sốc",
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
      id: "2",
      name: "iPhone 11 128GB | Chính hãng VN/A ",
      price: 8190000,
      oldPrice: 37599000,
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-11-128gb.png",
      badge: "Ưu đãi sốc",
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
      id: "3",
      name: "iPhone 11 Pro Max 64GB 2 sim 99%",
      price: 7190000,
      oldPrice: 75090000,
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-11-pro-max-gold-select-2019_1_1_3_2_4_5.png",
      badge: "Bán chạy",
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
      id: "4",
      name: "iPhone 11 Pro Max 256GB Cũ đẹp",
      price: 8600000,
      oldPrice: 9990000,
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-11-pro-max-midnight-green-select-2019_1_1_2_2_3.png",
      badge: "Bán chạy",
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
      id: "5",
      name: "iPhone XS 64GB Cũ đẹp",
      price: 6590000,
      oldPrice: 7590000,
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone_xs_max_512gb_1_5.jpg",
      badge: "Bán chạy",
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
      id: "6",
      name: "iPhone 16 Pro Max 256GB",
      price: 27990000,
      oldPrice: 30990000,
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png",
      badge: "Bán chạy",
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
      id: "7",
      name: "iPhone 12 Pro Max 128GB",
      price: 13290000,
      oldPrice: 14990000,
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/1/_/1_251_1.jpg",
      badge: "Bán chạy",
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
      id: "8",
      name: "iPhone 13 Pro Max 256GB",
      price: 14990000,
      oldPrice: 16990000,
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-13-pro-max-256gb.png",
      badge: "Bán chạy",
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
      id: "9",
      name: "iPhone 16 Pro Max 256GB",
      price: 27990000,
      oldPrice: 30990000,
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-13-pro-max.png",
      badge: "Bán chạy",
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
      id: "10",
      name: "iPhone 17 256GB | Chính hãng",
      price: 23590000,
      oldPrice: 25990000,
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone_17_256gb-3_2.jpg",
      badge: "Bán chạy",
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
      id: "11",
      name: "iPhone 17 Pro 256GB",
      price: 3410000,
      oldPrice: 36990000,
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-17-pro-256-gb.png",
      badge: "Bán chạy",
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
      id: "12",
      name: "iPhone 15 128GB | Chính hãng VN/A",
      price: 16280000,
      oldPrice: 20990000,
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1__1.png",
      badge: "Bán chạy",
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
    // 👉 các sản phẩm còn lại giữ nguyên
  ];

  return (
    <>
      {/* ===== PRODUCT LIST ===== */}
      <div className="product-list">
        {products.map((product) => (
          <div className="cp-card" key={product.id}>
            <div className="cp-img-wrap">
              <img
                src={product.image}
                alt={product.name}
                className="cp-img"
                onClick={() => {
                  setActiveProduct(product);
                  setSelectedImage(product.image);
                  setOpenDetail(true);
                }}
              />
            </div>

            <div className="cp-body">
              <h3 className="cp-name">{product.name}</h3>

              <div className="cp-price">
                <span className="price-new">
                  {product.price.toLocaleString("vi-VN")}đ
                </span>
                <span className="price-old">
                  {product.oldPrice.toLocaleString("vi-VN")}đ
                </span>
              </div>

              <div className="cp-badge">{product.badge}</div>

              <div className="cp-installment">
                Trả góp 0% · 0đ phụ thu · 6 tháng
              </div>

              <div className="cp-footer">
                <span className="rating">⭐ {product.rating}</span>

                <span className="like">♡ Yêu thích</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {openDetail && activeProduct && (
        <div className="detail-overlay" onClick={() => setOpenDetail(true)}>
          <div
            className="detail-box"
            onClick={(e) => e.stopPropagation()} 
          >
            <button
              className="detail-close"
              onClick={() => setOpenDetail(false)}
            >
              ✕
            </button>

            <div className="detail-img-wrap">
              <img
                src={selectedImage || activeProduct.image}
    alt={activeProduct.name}
    className="detail-img"
              />
            </div>

            <h2 className="detail-name">{activeProduct.name}</h2>

            {/* ✅ VARIANT HIỆN RA Ở ĐÂY */}
            {activeProduct?.variants && (
              <ProductVariant variants={activeProduct.variants} />
            )}

            {/* ===== CHI TIẾT ===== */}

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
    href="https://zalo.me/0388887484"
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
    </>
  );
}

export default ProductCard;
