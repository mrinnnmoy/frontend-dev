import React from 'react';

const App = () => {
  return (
    <div>
      <h1 className="text-3xl text-green-600">
        Colors
      </h1>
      <h2 className='font-mono text-xl italic font-medium tracking-wider leading-8 line-through'>
        Typography
      </h2>
      <input type="text" className='placeholder-red-500 opacity-50 text-right' placeholder='Testing Colors' />
      <div className='flex flex-row-reverse space-x-4 space-x-reverse w-5/6'>
        <h1 className='p-8 m-5 border-4'>Spaces1</h1>
        <h1 className='p-8 m-5 border-4'>Spaces2</h1>
        <h1 className='p-8 m-5 border-4'>Spaces3</h1>
      </div>
      <div className="flex flex-col-reverse">
        <h1 className='text-xl p-4 m-5 border-4'>Flexbox</h1>
        <h1 className='text-xl p-4 m-5 border-4'>and</h1>
        <h1 className='text-xl p-4 m-5 border-4'>Grid</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 p-4 justify-items-center">
        <div className="">1</div>
        <div className="">2</div>
        <div className="">3</div>
        <div className="">4</div>
        <div className="">5</div>
        <div className="">6</div>
        <div className="">7</div>
        <div className="">8</div>
        <div className="">9</div>
      </div>

      <div className="container mx-5 box-border border-4 border-red-600">
        <div className="">Layout</div>
      </div>

      <div className="static p-4">
        <p className='border-4'>Static Content</p>
        <div className="absolute top-30 left-10">
          <p className='border-4'>Absolute Child</p>
        </div>
      </div>

      <div className="flex flex-row mt-10 w-2/3 h-10 justify-center">
        <div className="z-40 w-10 shadow-lg">1</div>
        <div className="z-30 w-10 border-2 border-red-400">2</div>
        <div className="z-20 w-10 border-2 border-red-400">3</div>
        <div className="z-10 w-10 border-2 border-red-400">4</div>
        <div className="z-0 w-10 border-2 border-red-400">5</div>
      </div>

      <div className="">
        <div className="bg-green-300 w-10 h-10 m-10">
          <div className="mix-blend-multiply bg-amber-300 w-20 h-5"></div>
        </div>
      </div>

      <div className="">
        <button className="transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ...">
          Hover me
        </button>
      </div>

      <div className="">
        <span className="flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
        </span>
      </div>

      <div className="bg-white dark:bg-gray-800">
        <h1 className="text-gray-900 dark:text-white">Dark mode is here!</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Lorem ipsum...
        </p>
      </div>


    </div>
  )
};

export default App;