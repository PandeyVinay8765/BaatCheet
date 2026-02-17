import React from 'react'
import { IoSend } from "react-icons/io5";


function Typesend() {
  return (
    <div className='flex space-x-2 h-[8vh] text-center bg-gray-800'>
        <div className='w-[70%] mx-4 p-2'>
        <input type="text" placeholder="Type here" className="border-gray-700 rounded-xl outline-none px-4 py-2 w-full" />
    </div>
    <button>
        <IoSend className='text-3xl'/>
    </button>
    </div>
    

  )
}

export default Typesend