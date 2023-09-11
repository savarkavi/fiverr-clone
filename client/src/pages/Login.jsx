import { useState } from "react";
import request from "../utils/request";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await request.post("auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/");
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto mt-16 flex flex-col gap-14 items-center">
      <h2 className="text-5xl font-bold">Sign In</h2>
      <form
        className="flex flex-col gap-10 border shadow-lg p-14 rounded-xl"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-xl ">
            Username
          </label>
          <input
            name="username"
            type="text"
            className="border border-black outline-none px-2 py-2 w-[300px]"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-xl ">
            Password
          </label>
          <input
            name="Password"
            type="text"
            className="border border-black outline-none px-2 py-2 w-[300px]"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="bg-black p-3 text-white rounded-lg">Submit</button>
        {error && error}
      </form>
    </div>
  );
};

export default Login;
