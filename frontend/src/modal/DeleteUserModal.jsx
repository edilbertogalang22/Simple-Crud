import ModalWrapper from "../components/ModalWrapper";
import Button from "../components/Button";
import Input from "../components/Input";

const DeleteUserModal = ({ user, onClose, onConfirm }) => {
  if (!user) return null;

  return (
    <ModalWrapper onClose={onClose}>
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-bold mb-4 text-center border rounded-lg bg-blue-400 p-2">
          Delete User
        </h1>

        <p className="flex flex-col text-lg text-center">
          Are you sure you want to delete this user?
          <Input
            value={user.fullname}
            readOnly
            className="mt-2 font-semibold text-center bg-gray-100 border rounded py-2 cursor-not-allowed"
          />
        </p>

        <div className="flex justify-end gap-2 mt-2">
          <Button variant="danger" size="md" onClick={() => onConfirm(user.id)}>
            Delete
          </Button>
          <Button variant="secondary" size="md" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </ModalWrapper>
  );
};
export default DeleteUserModal;
