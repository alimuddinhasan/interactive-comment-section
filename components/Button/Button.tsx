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

const getColor = (color: ButtonColor | undefined, type: "bg" | "text") => {
  switch (color) {
    case ButtonColor.PRIMARY:
      return `${type}-moderate-blue`;
    case ButtonColor.DANGER:
      return `${type}-soft-red`;
    default:
      return `${type}-grayish-blue`;
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
  let classes = "font-bold flex gap-2 items-center py-2 px-4";

  classes += ` ${getColor(color, isFlat ? "text" : "bg")}`;

  if (!isFlat) {
    classes += " text-very-light-gray rounded-xl"
  }

  return (
    <button
      className={`${classes} ${className || ''}`}
      onClick={onClick}
      data-testid={dataTestId}
    >
      {icon && <img src={icon} alt='icon' />}
      {label && label}
    </button>
  );
}
