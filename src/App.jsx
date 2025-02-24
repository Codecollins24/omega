import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Courses from "./Pages/Courses/Courses";
import Blogs from "./Pages/Blogs/Blogs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import BlogsPage from "./Components/BlogsPage/BlogsPage";
import ApplyNow from "./Components/ApplyNow/ApplyNow";
import ScrollToTop from "./StoreContext/ScrollToTop";

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog-1" element={<BlogsPage />} />
        <Route path="/applynow" element={<ApplyNow />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
