import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { cn } from "../lib/utils";

// icons
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const PasswordInput = ({ className, wrapperClassName, ...props }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={cn("relative w-full", wrapperClassName)}>
      <Input
        type={show ? "text" : "password"}
        className={cn("pr-12", className)}
        {...props}
      />
      <Button
        type="button"
        onClick={() => setShow(!show)}
        className=" bg-transparent hover:bg-transparent absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-500"
      >
        {show ? (
          <EyeIcon className="w-5 h-5" />
        ) : (
          <EyeSlashIcon className="w-5 h-5" />
        )}
      </Button>
    </div>
  );
};

export default PasswordInput;
