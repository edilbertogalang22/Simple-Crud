import Card from "../../../components/Card";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen">
      <div className="flex p-8 bg-gray-200 items-center justify-center ">
        <h1 className="text-blue-400 font-bold text-2xl ">Admin Dashboard</h1>
      </div>

      <div className="p-8 px-4 ml-1">
        <Card />
      </div>
    </div>
  );
};

export default AdminDashboard;
