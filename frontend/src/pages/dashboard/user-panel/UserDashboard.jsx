const UserDashboard = () => {
  return (
    <div className="min-h-screen">
      <div className="flex p-8 bg-gray-200 items-center justify-center ">
        <h1 className="text-blue-400 font-bold text-2xl ">User Dashboard</h1>
      </div>

      <div className="p-8 px-4 ml-1">
        {/* Card 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center border h-32 gap-3 p-3 text-blue-500 rounded hover:bg-gray-700 transition cursor-pointer shadow-lg w-full">
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="text-3xl"></span>
              <span className="font-semibold">Active Users</span>
              <span className="font-semibold">1000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserDashboard;
