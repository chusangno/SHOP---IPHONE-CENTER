import { useNavigate } from "react-router-dom";

function ProductCard({ products }) {
  const navigate = useNavigate();

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="cp-card" key={product.id}>
          <div className="cp-img-wrap">
            <img
              src={product.image}
              alt={product.name}
              className="cp-img"
              onClick={() => navigate(`/product/${product.id}`)}
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
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
