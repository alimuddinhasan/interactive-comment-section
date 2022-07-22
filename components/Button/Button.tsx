import React from "react";
import Image from "next/image";

export enum ButtonColor {
  PRIMARY,
  DEFAULT,
  DANGER,
}

interface IButtonProps {
  label?: string;
  icon?: string;
  color?: ButtonColor;
  isFlat?: boolean;
  dataTestId?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const getTextColor = (color: ButtonColor | undefined) => {
  console.log("color");
  switch (color) {
    case ButtonColor.PRIMARY:
      return "text-moderate-blue";
    case ButtonColor.DANGER:
      return "text-soft-red";
    default:
      return "text-grayish-blue";
  }
};

export default function Button({
  color,
  label,
  icon,
  isFlat,
  dataTestId,
  className,
  onClick,
}: IButtonProps) {
  let classes = "font-bold flex gap-2 items-center";

  classes += ` ${getTextColor(color)}`;

  return (
    <button
      className={`${classes} ${className && className}`}
      onClick={onClick}
      data-testid={dataTestId}
    >
      {icon && <img src={icon} alt='icon' />}
      {label && label}
    </button>
  );
}
