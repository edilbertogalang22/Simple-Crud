import api from "../api/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", {
        email: formLogin.email,
        password: formLogin.password,
      });

      const { token, fullname, usertype, id } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem(
        "user",
        JSON.stringify({ id, fullname, usertype: Number(usertype), status: 1 })
      );

      // Show welcome message
      setMessage(`Welcome ${fullname}!`);

      // Redirect after short delay so message shows
      setTimeout(() => {
        if (Number(usertype) === 1) navigate("/admin-dashboard");
        else if (Number(usertype) === 2) navigate("/user-dashboard");

        // Clear password AFTER redirect so show/hide works before navigating
        setFormLogin((prev) => ({ ...prev, password: "" }));
      }, 2000); // 2s delay

    } catch (err) {
      const msg = err.response ? err.response.data.message : err.message;
      setMessage(msg);
    }
  };

  const handleLogout = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    try {
      await api.post("/auth/logout", { id: user.id }); // automatic JWT + auto logout
      localStorage.removeItem("token"); // remove JWT
      localStorage.removeItem("user");
      navigate("/login", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return { handleLogout, formLogin, handleChange, handleSubmit, message };
};

export default useLogin;