'use client';

import Image from "next/image";
import { MouseEventHandler } from "react";

interface ButtonProps {
  title: string;
  type?: "button" | "submit";
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button:React.FC<ButtonProps> = ({
  title,
  type,
  containerStyles,
  handleClick,
}) => {
  return (
    <button
      disabled={false}
      type={type}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>
        {title}
      </span>
    </button>
  )
}

export default Button