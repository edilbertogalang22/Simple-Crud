import { useState } from "react";
import ModalWrapper from "../components/ModalWrapper";
import Input from "../components/Input";
import Button from "../components/Button";
import PasswordInput from "../components/PasswordInput";

// open and close modal
const AddUserModal = ({ onClose, onSubmit }) => {
  // state for form
  const [form, setForm] = useState({
    // default value for form input value
    fullname: "",
    email: "",
    password: "",
    confirm: "",
    user_type: "",
  });

  // handle change input value
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  };

  // hanadle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // validation
    if (!form.user_type) {
      alert("Please select user type");
      return;
    }

    if (form.password !== form.confirm) {
      alert("Passwords do not match");
      return;
    }

    if (form.password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }
    onSubmit(form);
  };
  return (
    <ModalWrapper onClose={onClose}>
      <h1 className="text-xl font-bold mb-4 text-center border rounded-lg bg-blue-400 p-2">
        Add New User
      </h1>

      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto"
        onSubmit={handleSubmit}
      >
        {/* Row 1 */}
        <Input
          type="text"
          name="fullname"
          placeholder="Enter your full name"
          className="w-full shadow-lg"
          onChange={handleChange}
          value={form.fullname}
          required
        />

        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full shadow-lg"
          onChange={handleChange}
          value={form.email}
          required
        />

        {/* Row 2 */}
        <PasswordInput
          name="password"
          placeholder="Enter password"
          className="w-full shadow-lg"
          onChange={handleChange}
          value={form.password}
        />

        <PasswordInput
          name="confirm"
          placeholder="Confirm password"
          className="w-full shadow-lg"
          onChange={handleChange}
          value={form.confirm}
        />

        {/* Full width row */}
        <select
          name="user_type"
          className="border rounded-lg py-2 text-center w-full md:col-span-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleChange}
          value={form.user_type}
        >
          <option value="">Select Role</option>
          <option value="1">Admin</option>
          <option value="2">User</option>
        </select>

        {/* Button full width */}
        <div className="md:col-span-2">
          <Button
            type="submit"
            variant="secondary"
            size="md"
            className="w-full mt-2"
          >
            Submit
          </Button>
        </div>
      </form>
    </ModalWrapper>
  );
};
export default AddUserModal;
