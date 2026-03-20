import { FaUser } from "react-icons/fa";
import { useState, useEffect, useMemo } from "react";

const Card = () => {
  const [users, setUsers] = useState([]);

  const nonAdminUsers = useMemo(
    () => users.filter((user) => user.user_type !== 1),
    [users],
  );

  // Active users (status = 1)
  const activeUsers = useMemo(
    () => nonAdminUsers.filter((user) => user.status === 1),
    [nonAdminUsers],
  );

  // Recent users registered in the last 7 days, max 5
  const recentUsers = useMemo(() => {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    return nonAdminUsers
      .filter((user) => new Date(user.created_at) > sevenDaysAgo)
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .slice(0, 5);
  }, [nonAdminUsers]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          "http://localhost:5000/api/auth/manage-users",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Users */}
        <div className="flex flex-col items-center border h-32 gap-3 p-3 text-blue-500 rounded hover:bg-gray-700 transition cursor-pointer shadow-lg w-full">
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="text-3xl">
              <FaUser />
            </span>
            <span className="font-semibold">Total Users</span>
            <span className="font-semibold">{nonAdminUsers.length}</span>
          </div>
        </div>

        {/* Recent Users */}
        <div className="flex flex-col items-center border h-32 gap-3 p-3 text-blue-500 rounded hover:bg-gray-700 transition cursor-pointer shadow-lg w-full">
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="text-3xl">
              <FaUser />
            </span>
            <span className="font-semibold">Recent Users</span>
            <span className="font-semibold">{recentUsers.length}</span>
          </div>
        </div>

        {/* Active Users */}
        <div className="flex flex-col items-center border h-32 gap-3 p-3 text-blue-500 rounded hover:bg-gray-700 transition cursor-pointer shadow-lg w-full">
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="text-3xl">
              <FaUser />
            </span>
            <span className="font-semibold">Active Users</span>
            <span className="font-semibold">{activeUsers.length}</span>
          </div>
        </div>
      </div>

      {/* Recent Users List */}
      <div className="mt-8 bg-gray-200 shadow-lg rounded-lg p-6">
        <h2 className="font-semibold mb-4 text-blue-500 flex items-center gap-2">
          <FaUser /> Recent Users Registered
        </h2>

        <div className="space-y-3">
          {recentUsers.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between border-b pb-2"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full text-sm">
                  {user.fullname.charAt(0)}
                </div>
                <span className="font-medium">{user.fullname}</span>
              </div>
              <span className="text-gray-500 text-sm">
                {new Date(user.created_at).toLocaleDateString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
