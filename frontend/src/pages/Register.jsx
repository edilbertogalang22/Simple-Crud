// custome hooks imported
import useRegister from "../hooks/useRegister";
// components import
import Input from "../components/Input";
import Button from "../components/Button";
import PasswordInput from "../components/PasswordInput";

import { cn } from "../lib/utils";

const Register = () => {
  const {
    formRegister,
    message,
    isError,
    loading,
    handleChange,
    handleSubmit,
  } = useRegister();

  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-200 text-black">
      <div className="border rounded-xl shadow-lg p-9 max-w-2xl w-full">
        {message && (
          <p
            className={cn(
              "text-center mb-4 text-white rounded-xl px-2 py-3",
              isError ? "bg-red-500" : "bg-green-500",
            )}
          >
            {message}
          </p>
        )}
        <h1 className="text-2xl font-semibold mb-8 text-center">
          Register Here for New Users Account!
        </h1>

        <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
          <Input
            type="text"
            name="fullname"
            placeholder="Enter your full name"
            value={formRegister.fullname}
            onChange={handleChange}
            required
          />

          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formRegister.email}
            onChange={handleChange}
            required
          />

          <PasswordInput
            name="password"
            placeholder="Enter your password"
            value={formRegister.password}
            onChange={handleChange}
            className={cn(
              "w-full rounded-md border px-3 focus:outline-none focus:ring-2 focus:ring-blue-500",
            )}
            required
          />

          <PasswordInput
            name="confirm"
            placeholder="Confirm your password"
            value={formRegister.confirm}
            onChange={handleChange}
            className={cn(
              "w-full rounded-md border px-3 focus:outline-none focus:ring-2 focus:ring-blue-500",
            )}
            required
          />

          <Button
            variant="primary"
            className={cn(
              "px-20 py-3 mx-auto",
              loading ? "opcacity-50 cursor-not-allowed" : "opacity-100 ",
            )}
            size="large"
          >
            {loading ? "Loading..." : "Register"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Register;
