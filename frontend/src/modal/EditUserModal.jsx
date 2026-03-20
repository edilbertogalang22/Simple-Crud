import { useState } from "react";
import ModalWrapper from "../components/ModalWrapper";
import Input from "../components/Input";
import Button from "../components/Button";

const EditUserModal = ({ user, onClose, onSubmit, openModal }) => {
  const [form, setForm] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user.id, form);
  };
  return (
    <ModalWrapper onClose={onClose}>
      <h1 className="text-xl font-bold mb-4 text-center border rounded-lg bg-blue-400 p-2">
        Edit User
      </h1>

      <form onSubmit={handleSubmit} className="space-y-3 ">
        <div className="flex flex-col text-center">
          <label className="text-blue-400 mb-2 font-semibold">Full Name</label>
          <Input
            name="fullname"
            value={form.fullname}
            onChange={handleChange}
          />
        </div>
        <div className="flex-col flex text-center">
          <label className="font-semibold text-blue-400 mb-2">Email</label>
          <Input name="email" value={form.email} onChange={handleChange} />
        </div>
        <Button
          variant="primary"
          size="md"
          className="w-full mt-4"
          onClick={() => openModal("edit", user)}
        >
          Save & Change
        </Button>
      </form>
    </ModalWrapper>
  );
};
export default EditUserModal;
