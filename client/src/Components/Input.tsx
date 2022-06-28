import React from "react";
import "../asserts/css/input.css";

function Input({
  type = "text",
  value,
  name,
  onChange,
  placeholder,
}: {
  type: string;
  value: string;
  name: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="form__input"
      />
    </>
  );
}

export default Input;
