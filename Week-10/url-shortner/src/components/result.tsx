import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import axios from 'axios';

interface Props {
    inputValue: string,
  }

function Result( { inputValue }: Props) {

    console.log(inputValue);

    const [ shortenLink, setShortenedLink ] = useState<string>("");
    const [ copied, setCopied ] = useState<boolean>(false);
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ error, setError ] = useState<boolean>(false);

    // const fetchData = async () => {
    //     try {
    //         setLoading(true);
    //         const res = await axios(`https://api.shrtco.de/v2/shorten?url= ${inputValue}`)
    //         setShortenedLink(res.data.result.full_short_link);
    //     }
    //     catch (error: any) {
    //         setError(error);
    //     } finally { 
    //         setLoading(false);
    //     }
    // };

    const fetchData = () => {
        axios.get(`https://api.shrtco.de/v2/shorten?url= ${inputValue}`)
            .then(function (response) {
                console.log(response);
                setShortenedLink(response.data.result.full_short_link); // set the shortened link
            })
            .catch(function (error) {
                setError(error);
            })
            .finally(function () {
                setLoading(false);
            });
            
    }

    // switch (response.error_code) {};

    // const axios = require('axios');

    useEffect(() => {
        if(inputValue.length){
            fetchData();
        }
        const timer = setTimeout(() =>{
            setCopied(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [inputValue, copied]);

    

    if(loading){
        return <p>Loading...</p>
    }

    if(error){
        return <p className='px-4 text-center text-xl'>⚠️ error...</p>
    }

    console.log(shortenLink);

  return (
    <div>
        {shortenLink && (
            <div className='mt-4 flex-cols text-center space-y-4'>
            <p className='2xl:mx-80 xl:mx-80 lg:mx-40 md:mx-40 sm:mx-10
             bg-white rounded-full text-center text-xl'>{shortenLink}</p>
            <CopyToClipboard 
                text={shortenLink}
                onCopy={() => setCopied(true)}
            >
                <button className={copied ?
                     'text-center bg-white rounded-full w-24 h-12 text-slate-400 hover:bg-blue-200 hover:text-white' 
                     : 'text-center bg-white rounded-full w-24 h-12 text-slate-800 hover:bg-blue-500 hover:text-white'
                     }>Copy</button>
            </CopyToClipboard>
        </div>
        )}
    </div>
  )
}

export default Result