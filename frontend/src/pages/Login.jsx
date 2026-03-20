// custome hooks
import useLogin from "../hooks/useLogin";
import { cn } from "../lib/utils";
// components
import Logo from "../assets/USM.webp";
import Input from "../components/Input";
import Button from "../components/Button";
import PasswordInput from "../components/PasswordInput";
const Login = () => {
  const { formLogin, handleChange, handleSubmit, message } = useLogin();

  return (
    <section>
      <div className="min-h-[calc(100vh-64px)] flex">
        {/* Left Side - Illustration */}
        <div className="hidden lg:flex flex-1 bg-white items-center justify-center p-10">
          <img
            src={Logo}
            alt="LMS Illustration"
            className="max-w-full max-h-150 rounded-xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="flex flex-1 bg-linear-to-r from-blue-400 to-indigo-300 items-center justify-center p-10">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold mb-4">Hello!</h2>
            {message && (
              <h2 className="mb-3 text-green-500 font-medium text-center">
                {message}
              </h2>
            )}
            <p className="mb-6 text-gray-600">Sign Up to Get Started</p>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formLogin.email}
                onChange={handleChange}
              />
              <PasswordInput         
                name="password"
                placeholder="Password"
                value={formLogin.password}
                onChange={handleChange}
                className={cn(
                  "w-full rounded-md border px-3 focus:outline-none focus:ring-2 focus:ring-blue-500",
                )}
              />
              <Button
                type="submit"
                size="medium"
                className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
              >
                Login
              </Button>
            </form>
            <p className="mt-4 text-sm text-gray-500 cursor-pointer hover:underline">
              Forgot Password
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
