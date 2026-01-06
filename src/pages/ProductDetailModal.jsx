import { useParams, useNavigate } from "react-router-dom";

function ProductDetail({ products }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <h2>Sản phẩm không tồn tại</h2>;
  }

  return (
    <div className="pd-container">
      <button className="pd-back" onClick={() => navigate(-1)}>
        ← Quay lại
      </button>

      <div className="pd-box">
        <div className="pd-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="pd-info">
          <h1 className="pd-name">{product.name}</h1>

          <div className="pd-price">
            <span className="price-new">
              {product.price.toLocaleString("vi-VN")}đ
            </span>
            <span className="price-old">
              {product.oldPrice.toLocaleString("vi-VN")}đ
            </span>
          </div>

          <div className="pd-badge">{product.badge}</div>

          <div className="pd-rating">⭐ {product.rating} / 5</div>

          <ul className="pd-policy">
            <li>✔️ Chính hãng VN/A</li>
            <li>✔️ Bảo hành 12 tháng</li>
            <li>✔️ Trả góp 0%</li>
            <li>✔️ Giao hàng toàn quốc</li>
          </ul>

          <a href="tel:0388887484" className="pd-call">
            📞 Gọi mua ngay
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
