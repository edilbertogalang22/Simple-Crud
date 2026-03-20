import { cn } from "../lib/utils";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 cursor-pointer";

  const variants = {
    primary: "bg-blue-500 text-black hover:bg-blue-600 hover:text-white",
    secondary: "bg-green-500 text-white hover:bg-green-600 hover:text-black",
    danger: "bg-red-500 text-black hover:bg-red-600 hover:text-white",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <button
      {...props}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </button>
  );
};

export default Button;
