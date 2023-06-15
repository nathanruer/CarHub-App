'use client';

import Image from "next/image";
import { MouseEventHandler } from "react";

interface ButtonProps {
  title: string;
  rightIcon?: string;
  type?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button:React.FC<ButtonProps> = ({
  title,
  rightIcon,
  type,
  containerStyles,
  textStyles,
  handleClick,
}) => {
  return (
    <button
      disabled={false}
      type={type}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="arrow_left"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  )
}

export default Button