import { useState } from "react";
import { userStore } from "../../store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = userStore();
  const navigate = useNavigate();

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      setUser({ email, name: "Mathew", role: "Admin" });
      toast.success("Login successful!");
      setEmail("");
      setPassword("");
      navigate("/dashboard");
    } else {
      toast.error("Please Enter correct values");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 to-green-100 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center text-green-600">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 text-sm mt-2">
          Sign in to continue to your dashboard
        </p>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              value={email}
              onChange={onEmailChange}
              placeholder="Enter any email"
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              required
              value={password}
              onChange={onPasswordChange}
              placeholder="Enter any password"
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
            />
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer bg-green-600 hover:bg-green-500 text-white font-semibold py-2 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
