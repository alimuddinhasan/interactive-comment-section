import React, { ReactNode, Fragment, useState } from "react";
import Button, { ButtonColor } from "../Button/Button";
import Vote from "../Vote/Vote";
import { Icons } from "../../constant/icon.constant";
import InputComment from "../InputComment/InputComment";
import { IUser } from "common/type/user.interface";

interface ICommentProps {
  user: IUser | undefined;
  timestamp: string;
  comment: string;
  score: number;
  children?: ReactNode;
  onSubmit?: React.MouseEventHandler<HTMLButtonElement>;
  onUpvote?: React.MouseEventHandler<HTMLButtonElement>;
  onDownvote?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Comment({
  user,
  timestamp,
  comment,
  children,
  score,
  onSubmit,
  onUpvote,
  onDownvote,
}: ICommentProps) {
  const [showInput, setShowInput] = useState(false);
  return (
    <Fragment>
      <div className='bg-very-light-gray flex flex-col md:flex-row gap-5 p-5 rounded-xl'>
        {/* TODO: extract to function so it reusable */}
        <Vote
          className='hidden md:flex'
          value={score}
          onIncrease={onUpvote}
          onDecrease={onDownvote}
        />
        <div className='flex flex-col gap-5'>
          <div className='flex justify-between items-center'>
            <div className='flex gap-5 items-center'>
              <div className='h-9 shrink-0'>
                <img
                  src={user?.image.png}
                  alt='comment-user-image'
                  className='h-full'
                />
              </div>
              <p className='font-bold text-dark-blue'>{user?.username}</p>
              <p className='text-grayish-blue'>{timestamp}</p>
            </div>
            {/* TODO: extract to function so it reusable */}
            <Button
              className='hidden md:flex'
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
          <p className='text-grayish-blue'>{comment}</p>
        </div>
        <div className='flex justify-between md:hidden'>
          <Vote value={score} onIncrease={onUpvote} onDecrease={onDownvote} />
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
          user={user}
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
