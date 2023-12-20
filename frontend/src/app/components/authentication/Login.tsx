import React from "react";
import { Input, Textarea, Button } from "@nextui-org/react";

const Login = () => {
  return (
    <form className="flex flex-col gap-10 justify-start p-10">
      <Input
        isRequired
        type="text"
        label="Username"
        className="max-w-xs"
        classNames={{ label: "w-28" }}
        labelPlacement="outside-left"
        placeholder="Enter username"
      />

      <Input
        isRequired
        type="password"
        label="Password"
        className="max-w-xs"
        classNames={{ label: "w-28" }}
        labelPlacement="outside-left"
        placeholder="Enter password"
      />
    </form>
  );
};

export default Login;
