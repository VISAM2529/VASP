import React from 'react'
import logo from "../utils/logo.jpeg"
function Home() {
  return (
    <div id='home'>
      <img src={logo} className='w-full bg-cover bg-no-repeat object-cover '/>
    </div>
  )
}

export default Home