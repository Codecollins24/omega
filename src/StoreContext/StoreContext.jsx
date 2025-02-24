import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const navigate = useNavigate();
  const handleApply = () => navigate("/applynow");
  const handleCourses = () => navigate("/courses");
  const handleNavigate = () => navigate("/blog-1");
  const [isActive, setIsActive] = useState("home");
  const toggleActive = (menuItem) => setIsActive(menuItem);
  //context value to share
  //include both the state and the function to update the state
  const contextValue = {
    toggleActive,
    isActive,
    handleNavigate,
    handleApply,
    handleCourses,
  };
  //ensure that props.children is lower case
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
//go to the main.jsx file and wrap the App.jsx component in  the StoreContextProvider
export default StoreContextProvider;
