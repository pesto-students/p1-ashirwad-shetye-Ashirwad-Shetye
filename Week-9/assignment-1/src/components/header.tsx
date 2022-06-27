import React from 'react'

function Header() {
  return (
    <header className=' flex pb-8 bg-white border-none shadow-xl shadow-slate-200'>
      <div className=' ml-14 pt-12 pb-4 pl-2 pr-2 text-5xl bg-yellow-500 font-Lora text-white'>
        ToDo.app
      </div>
      <div className="font-Lato absolute right-12 items-center text-2xl inline-flex space-x-6 pt-12">
        <h3 className='cursor-pointer text-gray-700'>Contact</h3>
        <h3 className='cursor-pointer text-gray-700'>Signup</h3>
        <h3 className='cursor-pointer text-white bg-green-500 py-1.5 px-2.5 justify-center rounded-full w-20 h-12'>Login</h3>
      </div>
    </header>
  )
}

export default Header