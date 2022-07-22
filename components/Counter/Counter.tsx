import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
import { Icons } from "../../constant/icon.constant";

interface ICounterProps {
  value: number;
  onIncrease?: React.MouseEventHandler<HTMLButtonElement>;
  onDecrease?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Counter({
  value,
  onIncrease,
  onDecrease,
}: ICounterProps) {
  return (
    <div className='flex justify-between items-center gap-3 bg-light-gray py-2 px-4 rounded-xl'>
      <Button icon={Icons.plus} dataTestId='button-plus' onClick={onIncrease} />
      <p className='text-moderate-blue'>{value}</p>
      <Button
        icon={Icons.minus}
        dataTestId='button-minus'
        onClick={onDecrease}
      />
    </div>
  );
}
