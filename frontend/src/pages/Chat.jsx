import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Vector from "../assets/images/Vector.svg";
import MessageIcon from "../assets/images/Msg.svg";
import LogoutIcon from "../assets/images/exit.svg";

const Chat = () => {
  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/");
    }
  }, []);

  const handleLogin = async () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <div className="h-screen bg-background">
      <div
        className="text-right cursor-pointer text-white"
        onClick={() => handleLogin()}
      >
        Logout
      </div>
      <div className="w-24 h-4/5 bg-primary rounded-3xl ml-4 my-20 ">
        <div className="flex justify-center mt-10 p 2xl">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="rounded-full h-12 w-12 mt-6  "
          />
        </div>

        <div className="flex justify-center mt-12 border-t-[3.5px] border-green-700   ">
          <img
            src={Vector}
            alt=""
            className="rounded-full h-12 w-12 mt-6    "
          />
        </div>

        <div className="flex justify-center mt-10  border-t-[3.5px] border-green-700   ">
          <img
            src={MessageIcon}
            alt=""
            className="rounded-full h-12 w-12 mt-6  "
          />
        </div>

        <div className="flex justify-center mt-10  border-t-[3.5px] border-green-700  ">
          <img
            src="../assets/images/contact.svg"
            alt=""
            className="rounded-full h-12 w-12 mt-6  "
          />
        </div>

        <div className="flex justify-center mt-10 border-t-[3.5px] border-green-700  ">
          <img
            src="../assets/images/exit.svg"
            alt=""
            className="rounded-full h-12 w-12 mt-6  "
          />
        </div>
        <div className="flex justify-center mt-12  border-t-[3.5px] border-green-700    ">
          <img
            src={LogoutIcon}
            alt=""
            className="rounded-full h-12 w-12 mt-14 "
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
