import Button from "../components/Button";

const Contact = () => {
  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-200 text-black">
      <div className="border rounded-xl shadow-lg p-9 max-w-2xl w-full">
        <h1 className="font-semibold text-6xl mb-10 hover:scale-105 transition-transform duration-150 drop-shadow-lg">
          Get in Touch!
        </h1>
        <p className="font-semibold text-lg mb-4 drop-shadow-lg">
          We would love to hear from you!
        </p>

        <form className="flex flex-col space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="border rounded-xl px-3 py-2 shadow-lg hover:scale-105 transition-transform duration-200"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="border rounded-xl px-3 py-2 shadow-lg hover:scale-105 transition-transform duration-200"
          />
          <textarea
            name=""
            id=""
            placeholder="Describe your issue...."
            className="border rounded-xl px-3 py-4 w-full h-90 resize-none shadow-lg hover:scale-105 transition-transform duration-200"
          ></textarea>
          <Button
            variant="secondary"
            size="small"
            className="px-20 py-4 mx-auto hover:scale-105 transition-transform duration-200 "
          >
            Send
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
