import Image from "next/image";
import React from "react";
import iconPlus from "assets/icon-plus.svg";
import iconMinus from "assets/icon-minus.svg";

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
      <button className='font-bold flex items-center' onClick={onIncrease} data-testid="button-plus">
        <Image src={iconPlus} alt="icon-plus" />
      </button>
      <p className='text-moderate-blue'>{value}</p>
      <button className='font-bold flex items-center' onClick={onDecrease} data-testid="button-minus">
        <Image src={iconMinus} alt="icon-minus" />
      </button>
    </div>
  );
}
