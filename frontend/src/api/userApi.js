import axios from "axios";
let hostURL = "http://localhost:5000/";

export const loginUser = async (data) => {
  const response = await axios.post(
    `${hostURL}api/user/login`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};

export const registerUser = async (data)=>{
  const response = await axios.post(
    `${hostURL}api/user`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response;
}
