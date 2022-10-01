import React, { useState } from "react";

//* Single State (useState)

function LessonOne() {
  const [count, setCount] = useState(0);

  const delay = () => {
    setTimeout(() => {
      setCount((current) => current + 1);
    }, 2000);
  };

  return (
    <div className='w-full max-w-xl bg-gradient-to-tr to-purple-100 from-cyan-100 p-2 rounded-md shadow-2xl'>
      <div className='bg-white rounded-md p-10'>
        <h1 className='text-2xl text-center mb-5'>{count}</h1>
        <div className='flex justify-center gap-5'>
          <button
            onClick={() => setCount((current) => current - 1)}
            className='py-2 px-3 bg-purple-200 rounded-md '>
            Decrement
          </button>
          <button
            onClick={() => setCount((current) => current + 1)}
            className='py-2 px-3 bg-cyan-200 rounded-md '>
            Increment
          </button>
          <button
            onClick={delay}
            className='py-2 px-3 bg-green-400 rounded-md '>
            Async Increment
          </button>
        </div>
      </div>
    </div>
  );
}

export default LessonOne;
