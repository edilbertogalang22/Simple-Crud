import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-4">Oops! Page not found.</p>
      <Link to="/" className="text-blue-600 hover:underline text-lg">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
