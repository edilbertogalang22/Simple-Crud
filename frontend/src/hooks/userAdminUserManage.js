import { useState, useEffect } from "react";
import api from "../api/api";

const useAdminUserManage = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const fetchUsers = async () => {
    try {
      const response = await api.get("/auth/manage-users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.fullname.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  // Update user in Modal
  const updateUser = async (id, data) => {
    const response = await api.put(`/auth/update-user/${id}`, data);

    const updatedUser = response.data || { id, ...data };

    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? updatedUser : user
      )
    );

    return updatedUser;
  };

  // Create a new user in Modal
  const createUser = async (data) => {
    const response = await api.post("/auth/create-user", data);
    console.log("response", response.data);
    const newUser = response.data;

    setUsers((prev) => [...prev, newUser]);

    return newUser;
  };

  const deleteUser = async (id) => {
    try {
      await api.delete(`/auth/delete-user/${id}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return {
    filteredUsers,
    search,
    handleSearchChange,
    updateUser,
    createUser,
    deleteUser,
    fetchUsers, // 🔥 optional (for refetch)
  };
};

export default useAdminUserManage;