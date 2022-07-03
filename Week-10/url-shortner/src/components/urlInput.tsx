import React from 'react'
import Result from './result';

interface Props {
  setInputValue: React.Dispatch<React.SetStateAction<string>> 
  inputValue: string
}

function UrlInput({setInputValue, inputValue}: Props) {

  const [ value, setValue ] = React.useState<string>("");

  const handleClick = (e: { preventDefault: () => void; }) => {
    setInputValue(value);
    setValue(value);
    e.preventDefault();
  };

  return (
    <div className='mt-32 sm:mt-20 mx-10 space-y-10'>
        <div className='text-center space-y-10'>
            <h1 className='text-5xl text-slate-900'>Have full control over your links.</h1>
            <h3 className='text-xl tracking-wide text-slate-900'>Best Platform to quickly shorten your links the easy way.</h3>
        </div>
        <form className='2xl:mx-80 xl:mx-80 lg:mx-40 md:mx-40 sm:mx-10 text-xl text-center space-y-6'>
            <input type='text' placeholder='Paste your URL here'
                required
                value={value}
                onChange={(e) => setValue(e.target.value)}
            className='text-center text-2xl h-12 w-full rounded-full shadow-xl ' />
            <button
            onClick={handleClick}
            className='text-center bg-white rounded-full w-24 h-12 text-slate-800 hover:bg-blue-500 hover:text-white'
            >Submit</button>
        </form>
        <Result inputValue={inputValue} />
    </div>
  )
}

export default UrlInput