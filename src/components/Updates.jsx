import React from 'react'
import main from "../utils/logo.jpeg"
function Updates() {
  return (
    <div id='update' className='p-10 flex flex-col gap-10 w-full phone:p-5'>
      <div className='flex flex-col gap-5 items-start'>
      <h1 className='text-5xl text-white phone:text-2xl'>Updates</h1>
      <hr className='w-48 phone:w-32' />
      </div>
      <div className='w-1/3 h-fit pb-5 flex flex-col gap-5 shadow-2xl shadow-gray-950 phone:w-full'>
        <img src={main} className='w-full rounded-tl-2xl rounded-tr-2xl'/>
        <h1 className='text-2xl text-white text-center '>Launching Soon</h1>
      </div>
    </div>
  )
}

export default Updates