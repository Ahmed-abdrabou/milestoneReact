import React, { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeaderSection from "../MainPage/HeaderSection";
import ProjectSection from "../MainPage/ProjectSection";
// import Navbar from "../Components/Navbar";
// import FooterSection from "../Components/FooterSection";

// import "./MainPage.css";

const MainPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <HeaderSection />
      <ProjectSection />
      {/* <FooterSection /> */}
    </>
    // <>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/HeaderSection" element={<HeaderSection />} />
    //     <Route path="/ProjectSection" element={<ProjectSection />} />
    //   </Routes>
    //   <FooterSection />
    // </>
  );
};

export default MainPage;
