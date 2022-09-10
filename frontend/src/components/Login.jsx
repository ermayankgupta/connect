import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import MailIcon from "../assets/images/MailIcon.svg";
import PasswordIcon from "../assets/images/PasswordIcon.svg";
import { loginUser } from "../api/userApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data)
      debugger;
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data));
        toast("Login Successful");
        navigate(`/chat`);
      }
    } catch (err) {
      toast.error("Email and Password not match");
    }
  };

  return (
    <>
    <ToastContainer />
      <div className="container mx-auto">
        <div className="w-80 mx-auto mt-40">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex item-center">
              <img
                src={MailIcon}
                alt=""
                className="w-6 mt-6 border-b-2 border-white pr-2"
              />
              <input
                type="email"
                placeholder="email"
                className="border-b-2 border-white py-1 text-white text-2xl w-full mt-6 placeholder:text-gray focus:outline-0 bg-background"
                {...register("email")}
              />
            </div>
            <div className="flex item-center">
              <img
                src={PasswordIcon}
                alt=""
                className="w-6 mt-6 border-b-2 border-white pr-2"
              />
              <input
                type="password"
                placeholder="password"
                className="border-b-2 border-white py-1 text-white text-2xl w-full mt-6 placeholder:text-gray bg-background focus:outline-0"
                {...register("password")}
              />
            </div>
            <div>
              <button className="bg-primary mt-6 text-white rounded-full py-2 w-full">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
