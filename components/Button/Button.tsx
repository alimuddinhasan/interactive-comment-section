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

const getBackgroundColor = (color: ButtonColor | undefined) => {
  switch (color) {
    case ButtonColor.PRIMARY:
      return `bg-moderate-blue`;
    case ButtonColor.DANGER:
      return `bg-soft-red`;
    default:
      return `bg-grayish-blue`;
  }
};

const getTextColor = (color: ButtonColor | undefined) => {
  switch (color) {
    case ButtonColor.PRIMARY:
      return `text-moderate-blue`;
    case ButtonColor.DANGER:
      return `text-soft-red`;
    default:
      return `text-grayish-blue`;
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
  let classes = "font-medium flex gap-2 items-center py-2 px-4";

  if (!isFlat) {
    classes += ` ${getBackgroundColor(color)} text-very-light-gray rounded-xl`;
  } else {
    classes += ` ${getTextColor(color)}`;
  }

  return (
    <button
      className={`${classes} ${className || ""}`}
      onClick={onClick}
      data-testid={dataTestId}
    >
      {icon && <img src={icon} alt='icon' />}
      {label && label}
    </button>
  );
}
