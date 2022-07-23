import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
import { Icons } from "../../constant/icon.constant";

interface IVoteProps {
  value: number;
  onIncrease?: React.MouseEventHandler<HTMLButtonElement>;
  onDecrease?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Vote({ value, onIncrease, onDecrease }: IVoteProps) {
  return (
    <div className='flex justify-between items-center bg-light-gray rounded-xl'>
      <Button
        icon={Icons.plus}
        dataTestId='button-plus'
        isFlat
        onClick={onIncrease}
      />
      <p className='text-moderate-blue'>{value}</p>
      <Button
        icon={Icons.minus}
        dataTestId='button-minus'
        isFlat
        onClick={onDecrease}
      />
    </div>
  );
}
