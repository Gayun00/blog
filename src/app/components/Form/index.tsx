import React from "react";

function Form() {
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="" className="text-sm font-medium text-gray-900">
          Name
        </label>
        <input
          autoFocus
          type="text"
          className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
        />
      </div>

      <div>
        <label
          htmlFor=""
          className="text-sm font-medium leading-6 text-gray-900">
          Role
        </label>
        <input
          type="text"
          className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
        />
      </div>
    </div>
  );
}

export default Form;
