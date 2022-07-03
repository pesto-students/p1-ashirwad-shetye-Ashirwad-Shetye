import React from 'react'
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import { FaDiscord, FaRedditAlien } from 'react-icons/fa'

function Footer() {
  return (
    <div className='bg-slate-100 bg-opacity-40 absolute text-center bottom-0 w-full'>
        <div className='py-10 px-10 text-3xl text-slate-700 inline-flex space-x-40 '>
            <div className='hover:text-slate-400 cursor-pointer'><AiFillGithub/></div>
            <div className='hover:text-slate-400 cursor-pointer'><AiOutlineTwitter/></div>
            <div className='hover:text-slate-400 cursor-pointer'><FaDiscord/></div>
            <div className='hover:text-slate-400 cursor-pointer'><FaRedditAlien/></div>
        </div>
    </div>
  )
}

export default Footer