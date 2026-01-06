import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductCard from "./ProducCard";
import ProductDetail from "./ProductDetailModal";

function App() {
  const products = [/* danh sách sản phẩm của bạn */];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductCard products={products} />} />
        <Route
          path="/product/:id"
          element={<ProductDetail products={products} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
