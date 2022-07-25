import React from "react";
import Button, { ButtonColor } from "../Button/Button";

export default function InputComment() {
  return (
    <div className='flex flex-col bg-very-light-gray gap-3 p-4 rounded-xl'>
      <textarea
        className='bg-transparent rounded-xl border border-light-gray p-5'
        placeholder='Add a comment'
      ></textarea>
      <div className='flex justify-between items-center'>
        <div className='h-9'>
          <img
            src='/assets/avatars/image-amyrobson.png'
            alt='input-user-image'
            className='h-full'
          />
        </div>
        <Button color={ButtonColor.PRIMARY} label='SEND' />
      </div>
    </div>
  );
}
