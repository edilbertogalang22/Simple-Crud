import ModalWrapper from "../components/ModalWrapper";
import Input from "../components/Input";
import Button from "../components/Button";
const ViewUserModal = ({ onClose, user }) => {
  return (
    <ModalWrapper onClose={onClose}>
      <h1 className="text-xl font-bold mb-4 text-center border rounded-lg bg-blue-400 p-2">
        View User Details
      </h1>

      <form className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="text-center font-semibold mb-2 text-blue-400">
            Full Name
          </label>
          <Input value={user.fullname} readOnly />
        </div>
        <div className="flex flex-col">
          <label className="text-center font-semibold mb-2 text-blue-400">
            Email
          </label>
          <Input value={user.email} readOnly />
        </div>
        <div className="flex flex-col">
          <label className="text-center font-semibold mb-2 text-blue-400">
            Status
          </label>
          <Input value={user.status === 1 ? "Active" : "Inactive"} readOnly />
        </div>
        <div className="flex flex-col">
          <label className="text-center font-semibold mb-2 text-blue-400">
            Date Registered
          </label>
          <Input
            value={new Date(user.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            readOnly
          />
        </div>
        <Button
          onClick={onClose}
          variant="danger"
          size="md"
          className="col-span-2"
        >
          Close
        </Button>
      </form>
    </ModalWrapper>
  );
};
export default ViewUserModal;
