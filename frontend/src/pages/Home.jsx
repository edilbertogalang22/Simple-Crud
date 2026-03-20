import Logo from "../assets/USM.webp";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <div className="min-h-[calc(100vh-64px)] flex flex-col justify-center items-center px-6 py-12 text-black">
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
          Simple User Management System
        </h1>
        <img
          src={Logo}
          alt="Logo LMS"
          className="w-60 h-60 mb-6 rounded-full shadow-lg border-4 border-black hover:scale-110 transition-transform duration-500"
        />
        <h2 className="text-3xl font-semibold mb-4">UMS</h2>
        <p className="text-center max-w-lg mb-10 leading-relaxed text-black font-semibold text-2xl">
          This is a simple user management system that allows you to create,
          read, update, and delete users.
        </p>

        <div className="flex space-x-6">
          <Link
            to="/register"
            className="cursor-pointer bg-white border-2 text-black font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-500 hover:text-white hover:scale-105 transition-transform duration-300 drop-shadow-lg"
            aria-label="Register"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="cursor-pointer bg-white border-2  text-black font-semibold px-8 py-3 rounded-lg hover:bg-red-500 hover:text-white hover:scale-105 transition-transform duration-300 drop-shadow-lg"
            aria-label="Login"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
