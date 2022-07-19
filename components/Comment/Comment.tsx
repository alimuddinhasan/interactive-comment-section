import React from "react";
import Counter from "../Counter/Counter";

export default function Comment() {
  return (
    <div className='bg-very-light-gray flex flex-col gap-5 p-5 rounded-xl'>
      <div className='flex gap-5'>
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
        <button className='font-bold text-moderate-blue'>Reply</button>
      </div>
    </div>
  );
}
