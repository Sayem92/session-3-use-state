import React, { useState } from "react";

function LessonThree() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  console.log(name);

  return (
    <div className='flex flex-col w-full items-center'>
      <div className='p-2 rounded-md shadow-2xl w-full max-w-xl mx-5 mb-10 bg-white'>
        <div className=' bg-gradient-to-tr to-purple-100 from-cyan-100 rounded-sm p-5'>
          <h1 className='text-2xl mb-5 font-bold text-gray-800'>
            Name: {name}{" "}
          </h1>
          <p className='text-gray-700'>Email: {email} </p>
        </div>
      </div>
      <div className='w-full max-w-xl bg-gradient-to-tr to-purple-100 from-cyan-100 p-2 rounded-md shadow-2xl'>
        <div className='bg-white rounded-md p-10'>
          <div className='flex justify-between items-center mb-5'>
            <label className='w-[60px]' htmlFor='name'>
              Name:
            </label>
            <input
              className='border border-cyan-400 rounded p-1 w-full ml-5 focus:outline-purple-400'
              type='text'
              name='name'
              id='name'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='flex justify-between items-center'>
            <label className='w-[60px]' htmlFor='email'>
              Email:
            </label>
            <input
              className='border border-cyan-400 rounded p-1  w-full ml-5 focus:outline-purple-400'
              type='text'
              name='email'
              id='email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LessonThree;
