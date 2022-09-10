import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import MailIcon from "../assets/images/MailIcon.svg";
import PasswordIcon from "../assets/images/PasswordIcon.svg";
import UserIcon from "../assets/images/UserIcon.svg";
import { registerUser } from "../api/userApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const response = await registerUser(data);
      debugger;
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate(`/chat`);
      }
      debugger;
    } catch (err) {
      toast.error("Failed to Create");
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
                src={UserIcon}
                alt=""
                className="w-6 mt-6 border-b-2 border-white pr-2"
              />
              <input
                type="text"
                placeholder="name"
                className="border-b-2 border-white py-1 text-white bg-background text-2xl w-full mt-6 placeholder:text-gray focus:outline-0"
                {...register("name")}
              />
            </div>
            <div className="flex item-center">
              <img
                src={MailIcon}
                alt=""
                className="w-6 mt-6 border-b-2 border-white pr-2"
              />
              <input
                type="email"
                placeholder="email"
                className="border-b-2 border-white py-1 text-white bg-background text-2xl w-full mt-6 placeholder:text-gray focus:outline-0"
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
                className="border-b-2 border-white py-1 text-white bg-background text-2xl w-full mt-6 placeholder:text-gray focus:outline-0"
                {...register("password")}
              />
            </div>
            <div>
              <button className="bg-primary mt-6 text-white rounded-full py-2 w-full">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
