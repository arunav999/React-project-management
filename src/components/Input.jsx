import React, { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <>
      <p className="flex flex-col gap-1 my-4">
        <label
          htmlFor={label}
          className="text-sm font-bold uppercase  text-stone-500"
        >
          {label}
        </label>
        {!textarea ? (
          <input id={label} ref={ref} {...props} className={classes} />
        ) : (
          <textarea {...props} ref={ref} className={classes}></textarea>
        )}
      </p>
    </>
  );
});

export default Input;
