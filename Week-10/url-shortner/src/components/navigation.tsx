import React from 'react'

function Navigation() {
  return (
    <div>
        <div className='inline-flex m-0 px-10 py-10 items-center w-screen'>
            <div>
                <h1 className='text-5xl hover:cursor-pointer'>ShortIt.</h1>
            </div>
            <div className='absolute right-10 bg-none text-2xl inline-flex space-x-10'>
                <div className='hover:text-cyan-700 cursor-pointer'>Home</div>
                <div className='hover:text-cyan-700 cursor-pointer'>About</div>
                <div className='hover:text-cyan-700 cursor-pointer'>Contact Us</div>
                <div className='hover:text-cyan-700 cursor-pointer'>Login</div>
            </div>
        </div>
    </div>
  )
}

export default Navigation