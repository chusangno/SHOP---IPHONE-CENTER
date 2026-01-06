import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import './index.css'
import App from "./App.jsx";
import SidebarRight from "./Shop-iphone/SidebarRight.jsx";




// hien thi img
import ProductList from "./Shop-iphone/ ProductList.jsx";
import Footer from "./Shop-iphone/Footer.jsx";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ProlistDta from "./Api/ProlistData.jsx"
import Logo from "./Shop-iphone/Logo.jsx";
import HOMEE from "./Shop-iphone/HOMEE.jsx";
import Countdown from "./Shop-iphone/Countdown.jsx";
import LuckyWheel from "./Shop-iphone/Lucky.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Countdown />
    <HOMEE />
    <SidebarRight />
<LuckyWheel />
    <Logo />
    {/* <ProlistDta /> */}
    {/* <ProductList /> */}
    <ProductList />
    {/* <Header /> */}
    <Footer />
  </StrictMode>
);
