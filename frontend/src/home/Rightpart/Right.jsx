import React from 'react'
import Chatuser from './Chatuser';
import Message from './Messages';
import Typesend from './Typesend';

function Right() {
  return (
    <div className='w-[70%]  bg-slate-900'>
      <Chatuser/>
      <div className="h-[calc(92vh-8vh)] overflow-y-auto hide-scrollbar">
        <div>
<Message/><Message/><Message/><Message/><Message/><Message/><Message/><Message/><Message/><Message/><Message/>
        </div>
        
       
      </div>
       <Typesend/>
      
    </div>
  )
}

export default Right;