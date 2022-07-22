import React from "react";
import Button, { ButtonColor } from "../Button/Button";
import Counter from "../Counter/Counter";
import { Icons } from "../../constant/icon.constant";

export default function Comment() {
  return (
    <div className='bg-very-light-gray flex flex-col gap-5 p-5 rounded-xl'>
      <div className='flex gap-5 items-center'>
        <div className='h-9'>
          <img
            src='/assets/avatars/image-amyrobson.png'
            alt=''
            className='h-full'
          />
        </div>
        <p className='font-bold text-dark-blue'>amyrobson</p>
        <p className='text-grayish-blue'>1 month ago</p>
      </div>
      <p className='text-grayish-blue'>
        Ipsum enim culpa non laborum ullamco ad culpa veniam nostrud veniam id
        ipsum velit. Aliqua laborum sint ex officia reprehenderit esse esse
        mollit irure ipsum dolor.
      </p>
      <div className='flex justify-between'>
        <Counter value={12} />
        <Button label='Reply' color={ButtonColor.PRIMARY} icon={Icons.reply} />
      </div>
    </div>
  );
}
