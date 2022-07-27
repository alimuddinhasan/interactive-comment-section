import React, { ReactNode, Fragment, useState } from "react";
import Button, { ButtonColor } from "../Button/Button";
import Vote from "../Vote/Vote";
import { Icons } from "../../constant/icon.constant";
import InputComment from "../InputComment/InputComment";

interface ICommentProps {
  avatar: string;
  username: string;
  timestamp: Date;
  comment: string;
  children?: ReactNode;
  onSubmit?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Comment({ children, onSubmit }: ICommentProps) {
  const [showInput, setShowInput] = useState(false);
  return (
    <Fragment>
      <div className='bg-very-light-gray flex flex-col md:flex-row gap-5 p-5 rounded-xl'>
        <Vote className='hidden md:flex' value={12} />
        <div className='flex flex-col gap-5'>
          <div className='flex justify-between items-center'>
            <div className='flex gap-5 items-center'>
              <div className='h-9 shrink-0'>
                <img
                  src='/assets/avatars/image-amyrobson.png'
                  alt='comment-user-image'
                  className='h-full'
                />
              </div>
              <p className='font-bold text-dark-blue'>amyrobson</p>
              <p className='text-grayish-blue'>1 month ago</p>
            </div>
            <Button
              className='hidden md:flex'
              label='Reply'
              color={ButtonColor.PRIMARY}
              icon={Icons.reply}
              isFlat
            />
          </div>
          <p className='text-grayish-blue'>
            Ipsum enim culpa non laborum ullamco ad culpa veniam nostrud veniam
            id ipsum velit. Aliqua laborum sint ex officia reprehenderit esse
            esse mollit irure ipsum dolor.
          </p>
        </div>
        <div className='flex justify-between md:hidden'>
          <Vote value={12} />
          <Button
            label='Reply'
            color={ButtonColor.PRIMARY}
            icon={Icons.reply}
            isFlat
            dataTestId='button-reply'
            onClick={() => {
              setShowInput(true);
            }}
          />
        </div>
      </div>
      {showInput && (
        <InputComment
          dataTestId='input-comment-component'
          onSubmit={onSubmit}
        />
      )}
      {children && (
        <div
          className='flex flex-col gap-5 border-l border-light-grayish-blue pl-5 ml-5'
          data-testid='children'
        >
          {children}
        </div>
      )}
    </Fragment>
  );
}
