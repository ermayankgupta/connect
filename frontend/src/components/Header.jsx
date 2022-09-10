import React from "react";
import LogoBg from '../assets/images/LogoBgImg.svg';

const Header = ({setLogoutView,logoutView}) => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between h-24 items-center">
          <div className="relative">
          <h1 className="text-4xl bg-primary text-white absolute top-20 left-10 z-50">Connect</h1>
            <img src={LogoBg} alt="" className="w-60" />
          </div>
          <div className="flex">
            <p onClick={()=>setLogoutView("login")} className={`text-white text-xl cursor-pointer mr-10 ${logoutView!=="sign" &&"text-primary underline"}`}>Login</p>
            <p onClick={()=>setLogoutView("sign")} className={`text-white text-xl cursor-pointer mr-10 ${logoutView==="sign" &&"text-primary underline"}`}>SignUp</p>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
