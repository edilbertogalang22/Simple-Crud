import useAdminUserManage from "../../../hooks/userAdminUserManage";
// components
import Button from "../../../components/Button";
import Input from "../../../components/Input";
// utils
import { cn } from "../../../lib/utils";
// Modal
// import AddUserModal from "../../../modal/AddUserModal1";
// import ViewUserModal from "../../../modal/ViewUserModal";
import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
// Modal
import useModal from "../../../hooks/useModal";
import EditUserModal from "../../../modal/EditUserModal";
import AddUserModal from "../../../modal/AddUserModal";
import ViewUserModal from "../../../modal/ViewUserModal";
import DeleteUserModal from "../../../modal/DeleteUserModal";

const AdminUsersManage = () => {
  const {
    filteredUsers,
    search,
    handleSearchChange,
    updateUser,
    createUser,
    deleteUser,
  } = useAdminUserManage();

  const { modalType, modalData, openModal, closeModal } = useModal();

  // function para i handle ang user update
  const handleUpdateUser = async (id, data) => {
    await updateUser(id, data);
    closeModal();
  };

  // function para i handle ang user create
  const handleCreateUser = async (data) => {
    await createUser(data);
    closeModal();
  };

  // function para i handle ang user delete
  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    closeModal();
  };
  // render modal depende sa type
  const renderModal = () => {
    switch (modalType) {
      case "add":
        return (
          <AddUserModal onClose={closeModal} onSubmit={handleCreateUser} />
        );
      case "edit":
        return (
          <EditUserModal
            user={modalData}
            onClose={closeModal}
            onSubmit={handleUpdateUser}
          />
        );
      case "view":
        return (
          <ViewUserModal
            user={modalData}
            onClose={closeModal}
            onConfirm={handleDeleteUser}
          />
        );
      case "delete":
        return (
          <DeleteUserModal
            user={modalData}
            onClose={closeModal}
            onConfirm={handleDeleteUser}
          />
        );
      default:
        return null;
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      {/* Page Header */}
      <div className="flex p-6 md:p-8 bg-gray-200 items-center justify-center mb-6 md:mb-8">
        <h1 className="text-blue-400 font-bold text-xl md:text-2xl">
          Manage Users
        </h1>
      </div>

      {/* Search + Button */}
      <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-4">
        <div className="relative  w-full md:max-w-sm">
          <Input
            placeholder="Search users..."
            className={cn("border pl-10")}
            value={search}
            onChange={handleSearchChange}
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>

        <Button
          variant="primary"
          size="md"
          className="flex items-center"
          onClick={() => openModal("add")}
        >
          <PlusIcon className="w-5 h-5 mr-2" />
          Add User
        </Button>
      </div>

      {/* Table Card */}
      <div className="shadow border border-gray-200 sm:rounded-lg">
        {/* Horizontal Scroll Wrapper */}
        <div className="max-h-[36rem] overflow-auto">
          <table className="min-w-[800px] w-full divide-y divide-gray-200 ">
            <thead className=" bg-gray-200">
              <tr>
                <th className="sticky top-0 z-10 bg-gray-200 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  ID
                </th>
                <th className="sticky top-0 z-10 bg-gray-200 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Name
                </th>
                <th className="sticky top-0 z-10 bg-gray-200 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Email
                </th>
                <th className="sticky top-0 z-10 bg-gray-200 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th className="sticky top-0 z-10 bg-gray-200 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Date Registered
                </th>
                <th className="sticky top-0 z-10 bg-gray-200 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.filter((user) => user.user_type !== 1).length ===
              0 ? (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center">
                    No users found.
                  </td>
                </tr>
              ) : (
                filteredUsers
                  .filter((user) => user.user_type !== 1)
                  .map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {user.id}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {user.fullname}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {user.email}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <span
                          className={cn(
                            "px-2 py-1 inline-flex text-xs font-semibold rounded-full",
                            user.status === 1
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800",
                          )}
                        >
                          {user.status === 1 ? "✔ Online" : "✖ Offline"}
                        </span>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs font-semibold rounded-full bg-green-100 text-green-800">
                          {new Date(user.created_at).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            },
                          )}
                        </span>
                      </td>

                      <td className="px-6 py-3 whitespace-nowrap">
                        <div className="flex gap-2">
                          <Button
                            variant="primary"
                            size="sm"
                            // onClick={() => {
                            //   setSelectedUser(user);
                            //   setShowViewModal(true);
                            // }}
                            onClick={() => openModal("view", user)}
                          >
                            <EyeIcon className="w-4 h-4" />
                          </Button>

                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => openModal("edit", user)}
                          >
                            <PencilSquareIcon className="w-4 h-4" />
                          </Button>

                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => openModal("delete", user)}
                          >
                            <TrashIcon className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* Rendering modal */}
      {renderModal()}
      {/* {selectedUser && (
        <ViewUserModal
          show={showViewModal}
          onClose={() => {
            setSelectedUser(null);
            setShowViewModal(false);
          }}
          user={selectedUser}
        />
      )}

      <AddUserModal
        show={showAddModal}
        onClose={() => setShowAddModal(false)}
      /> */}
    </div>
  );
};

export default AdminUsersManage;
