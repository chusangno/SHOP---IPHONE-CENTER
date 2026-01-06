import React from "react";

export default function Footer() {
  return (
    <footer id="layout-footer" className="bg-neutral-primary">
      <div className="mx-auto max-w-screen-xl">
        {/* TOP */}
        <div className="footer-grid">
         
          <div>
            <h2 className="text-heading">Thông tin về chính sách</h2>
            <ul className="text-body">
              <li><a href="#">Mua hàng trả góp Online</a></li>
              <li><a href="#">Mua hàng trả góp bằng thẻ tín dụng</a></li>
              <li><a href="#">Chính sách giao hàng</a></li>
               <li><a href="./lucky">Vòng quay may mắn</a></li>
          
            </ul>
          </div>

          <div>
            <h2 className="text-heading">Dịch vụ và thông tin khác</h2>
            <ul className="text-body">
              <li><a href="#">Ưu đãi thanh toán</a></li>
              <li><a href="#">Quy chế hoạt động</a></li>
              <li><a href="#">Liên hệ hợp tác kinh doanh</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-heading">Phương thức thanh toán</h2>
            <div className="bank-icons">
              <img src="./bank-icoin/visa.png" alt="Visa" />
              <img src="./bank-icoin/mastercard.png" alt="MasterCard" />
              <img src="./bank-icoin/momo.png" alt="Momo" />
                 <img src="./bank-icoin/zalopay.png" alt="ZaloPay" />
                   <img src="./bank-icoin/VCB.png" alt="VCB" />
    
    
              <img src="./bank-icoin/VNB.png" alt="VNPay" />
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom bg-neutral-secondary-soft">
          <span className="text-body">
            © 2025 SHOP IPHONE CENTER. <br />
            Liên Hệ : 0969787306 <br />
            Công ty TNHH Một Thành Viên IPHONE CENTER 
          </span>
        </div>
      </div>
    </footer>
  );
}
