import React from 'react'
import { useNavigate } from "react-router-dom";


export default function Button() {
  const navigate = useNavigate();

  return (
    <>
    <button onClick={()=>{
      navigate("/Profile");
    }} className='font-mono bg-blue-700 p-1 px-2 text-white rounded w-full'>
      
        BUY NOW
    </button>
      
    </>
  )
}
