import React from "react";

const AddProduct = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-xl">
      <label className="form-control">
        <span className="label-text">Title</span>
        <input
          type="text"
          placeholder="Enter title"
          className="input input-bordered w-full"
        />
      </label>

      <label className="form-control">
        <span className="label-text">Price</span>
        <input
          type="number"
          placeholder="Enter price"
          className="input input-bordered w-full"
        />
      </label>

      <label className="form-control">
        <span className="label-text">Description</span>
        <textarea
          className="textarea textarea-bordered h-24 w-full"
          placeholder="Enter description"
        ></textarea>
      </label>

      <button className="btn btn-primary mt-5 self-end">Add Product</button>
    </div>
  );
};

export default AddProduct;
