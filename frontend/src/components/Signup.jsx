import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Header from "./Header";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const response = await axios.post("http://localhost:5000/api/user", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    debugger;
    console.log(data);
  };
  return (
    <>
    <Header/>
      <div className="container mx-auto">
        <div className="w-80 mx-auto mt-40">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                type="text"
                placeholder="name"
                className="border-b-2 border-white py-1 text-white text-2xl w-full mt-6 placeholder:text-gray focus:outline-0"
                {...register("name")}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="email"
                className="border-b-2 border-white py-1 text-white text-2xl w-full mt-6 placeholder:text-gray focus:outline-0"
                {...register("email")}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="password"
                className="border-b-2 border-white py-1 text-white text-2xl w-full mt-6 placeholder:text-gray focus:outline-0"
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
