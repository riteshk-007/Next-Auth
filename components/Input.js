"use client";

import clsx from "clsx";
const Input = ({
  label,
  id,
  type,
  placeholder,
  register,
  errors,
  required,
}) => {
  return (
    <div className="w-full md:w-1/3">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        autoComplete={id}
        placeholder={placeholder}
        {...register(id, { required })}
        className={clsx(
          `flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none
           focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50`,
          errors[id] && "focus:ring-rose-500 "
        )}
      />
    </div>
  );
};

export default Input;
