const Input = ({ type = "text", className = "", ...props }) => {
  return (
    <input
      type={type}
      {...props}
      className={`border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ${className}`}
    />
  );
};

export default Input;