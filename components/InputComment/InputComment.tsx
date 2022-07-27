import React from "react";
import Button, { ButtonColor } from "../Button/Button";

interface IInputCommentProps {
  dataTestId?: string;
  onSubmit?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function InputComment({
  dataTestId,
  onSubmit,
}: IInputCommentProps) {
  return (
    <div
      className='flex flex-col md:flex-row md:items-start bg-very-light-gray gap-3 p-4 rounded-xl'
      data-testid={dataTestId}
    >
      <div className='hidden md:block h-9 shrink-0'>
        <img
          src='/assets/avatars/image-amyrobson.png'
          alt='input-user-image'
          className='h-full'
        />
      </div>
      <textarea
        className='bg-transparent rounded-xl border border-light-gray p-5 grow resize-none'
        placeholder='Add a comment'
      ></textarea>
      <Button
        color={ButtonColor.PRIMARY}
        label='SEND'
        className='hidden md:flex'
        onClick={onSubmit}
      />
      <div className='flex justify-between items-center md:hidden'>
        <div className='h-9 shrink-0'>
          <img
            src='/assets/avatars/image-amyrobson.png'
            alt='input-user-image'
            className='h-full'
          />
        </div>
        <Button color={ButtonColor.PRIMARY} label='SEND' dataTestId="button-submit" onClick={onSubmit} />
      </div>
    </div>
  );
}
