"use client";

import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function InputControl({
  type,
  label,
  placeholder,
  withIcon,
}: {
  type: string;
  label: string;
  placeholder: string;
  withIcon?: boolean;
}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      {withIcon ? (
        <div className="join">
          <input
            type={type === "password" && showPassword ? "text" : type}
            placeholder={placeholder}
            className="input input-bordered join-item w-full max-w-xs"
          />
          <button className="btn join-item">
            {showPassword ? (
              <AiOutlineEyeInvisible
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <AiOutlineEye onClick={() => setShowPassword(!showPassword)} />
            )}
          </button>
        </div>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="input input-bordered w-full max-w-xs"
        />
      )}
    </div>
  );
}

export default InputControl;
