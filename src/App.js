import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./Pages/MainPage";
import Navbar from "./Components/Navbar";
import FooterSection from "./Components/FooterSection";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      {/* <WebsiteProvider> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/milestone-website" element={<MainPage />} />
      </Routes>
      <FooterSection />

      {/* </WebsiteProvider> */}
    </BrowserRouter>
  );
};

export default App;
