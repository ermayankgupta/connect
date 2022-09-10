import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
      <div className="w-24 h-96 bg-primary rounded-3xl ml-4 my-10">
        <div className="flex justify-center mt-10">
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="rounded-full h-12 w-12 mt-6  " />
        </div>
      </div>
    </div>
  );
};

export default Chat;
