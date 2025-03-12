import React from "react";

export default function Input({ label, textarea, ...props }) {
  return (
    <>
      <p>
        <label htmlFor={label}>{label}</label>
        {!textarea ? (
          <input id={label} {...props} />
        ) : (
          <textarea {...props}></textarea>
        )}
      </p>
    </>
  );
}
