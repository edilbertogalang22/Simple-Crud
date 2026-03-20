import api from "../api/api";

import { useState, useEffect } from "react";
const useRegister = () => {
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formRegister, setFormRegister] = useState({
    fullname: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormRegister((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formRegister.password.length < 6) {
      setMessage("Password must be at least 6 characters long");
      setIsError(true);
      return;
    }

    if (formRegister.password !== formRegister.confirm) {
      setMessage("Passwords do not match");
      setIsError(true);
      return;
    }
    setLoading(true);
    try {
      const res = await api.post("/auth/register", {
        fullname: formRegister.fullname,
        email: formRegister.email,
        password: formRegister.password,
      });
      //show success message
      setMessage(res.data.message || "Registration successfull!");
      setIsError(false);

      // delay handling message
      setTimeout(() => {
        setLoading(false);
        //reset the form
        setFormRegister({
          fullname: "",
          email: "",
          password: "",
          confirm: "",
        });
      }, 2000); // 2 second delay
    } catch (err) {
      const errMessage = err.response ? err.response.data.message : err.message;
      setMessage(errMessage);
      setIsError(true);

      setTimeout(() => {
        setLoading(false);
      }, 2000); // 2second delay even on error
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [message]);


    return { formRegister, message, isError, loading, handleChange, handleSubmit }
}
export default useRegister;