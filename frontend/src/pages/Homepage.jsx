import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Signup from "../components/Signup";
import Login from "../components/Login";
import { useNavigate } from "react-router-dom";
import CircleImage from "../assets/images/CircleImage.svg"

const Homepage = () => {
  const [logoutView, setLogoutView] = useState("sign");
  let navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem("user")){
      navigate("/chat")
    }
  },[])
  return (
    <>
      <Header setLogoutView={setLogoutView} logoutView={logoutView} />
      {logoutView === "sign" ? <Signup /> : <Login />}
      <img src={CircleImage} alt="" className="w-80 absolute bottom-0" />
    </>
  );
};

export default Homepage;
