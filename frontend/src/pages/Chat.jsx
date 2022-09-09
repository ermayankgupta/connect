import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/");
    }
  }, []);
  return <div>Chat</div>;
};

export default Chat;
