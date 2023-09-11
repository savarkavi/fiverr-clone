import { useState } from "react";
import upload from "../utils/upload.js";
import request from "../utils/request.js";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = await upload(file);
    try {
      await request.post("auth/register", {
        ...user,
        img: url,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-[1280px] mx-auto mt-20 flex justify-center">
      <div className="w-full flex justify-center">
        <form className="flex gap-24" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold mb-4">Create a new account</h2>
            <div className="flex flex-col gap-2">
              <label htmlFor="username">Username</label>
              <input
                name="username"
                type="text"
                className="outline-none border border-black px-3 py-2"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="text"
                className="outline-none border border-black px-3 py-2"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="text"
                className="outline-none border border-black px-3 py-2"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="img">Profile Picture</label>
              <input
                name="img"
                type="file"
                className="outline-none border border-black px-3 py-2"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="country">Country</label>
              <input
                name="country"
                type="text"
                className="outline-none border border-black px-3 py-2"
                onChange={handleChange}
              />
            </div>
            <button className="bg-black px-3 py-2 text-white rounded-lg">
              Submit
            </button>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold mb-4">
              I want to become a seller
            </h2>
            <div className="flex items-center gap-4">
              <span className=" font-bold">Activate the seller account</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer outline-none"
                  onChange={handleSeller}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500"></div>
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone">Phone Number</label>
              <input
                name="phone"
                type="text"
                className="outline-none border border-black px-3 py-2"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="desc">Description</label>
              <textarea
                rows="8"
                name="desc"
                className="outline-none border border-black px-3 py-2"
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
