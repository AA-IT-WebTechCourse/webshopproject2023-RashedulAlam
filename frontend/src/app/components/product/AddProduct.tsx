'use client'
import React from "react";
import { Input, Textarea, Button } from "@nextui-org/react";

const AddProduct = () => {
  return (
    <form
      className="flex flex-col gap-10 justify-start p-10"
      noValidate
      onSubmit={() => alert("submitted")}
    >
      <Input
        isRequired
        type="text"
        label="Title"
        className="max-w-xs"
        classNames={{ label: "w-28" }}
        labelPlacement="outside-left"
        placeholder="Enter title"
      />
      <Textarea
        isRequired
        label="Description"
        placeholder="Enter description"
        className="max-w-xs"
        classNames={{ label: "w-28" }}
        labelPlacement="outside-left"
      />
      <Input
        isRequired
        type="number"
        label="Price"
        placeholder="Enter price"
        className="max-w-xs"
        classNames={{ label: "w-28" }}
        labelPlacement="outside-left"
      />
      <Button type="submit" variant="shadow">
        Add New Product
      </Button>
    </form>
  );
};

export default AddProduct;
