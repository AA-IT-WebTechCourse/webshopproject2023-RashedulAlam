import React from "react";

const AddProduct = () => {
  return (
    <div className="flex flex-col gap-2 w-full max-w-xl ">
      <label className="form-control">
        <div className="label">
          <span className="label-text">Title</span>
        </div>
        <input
          type="text"
          placeholder="enter title"
          className="input input-bordered w-full max-w-xl"
        />
      </label>

      <label className="form-control">
        <div className="label">
          <span className="label-text">Price</span>
        </div>
        <input
          type="number"
          placeholder="enter price"
          className="input input-bordered w-full max-w-xl"
        />
      </label>

      <label className="form-control">
        <div className="label">
          <span className="label-text">Description</span>
        </div>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="enter description"
        ></textarea>
      </label>

      <button className="btn btn-primary mt-5 w-fit">
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
