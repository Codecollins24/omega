import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "auto"; // Disable smooth scrolling
    window.scrollTo({ top: 0, behavior: "auto" }); // Instantly scroll to top
    document.documentElement.style.scrollBehavior = "smooth"; // Restore smooth scrolling
  }, [pathname]);
  return null;
};

export default ScrollToTop;
