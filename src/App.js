import logo from './utils/MainLogo.jpeg';
import './App.css';
import Home from "./components/Home"
import Features from "./components/Features"
import About from "./components/About"
import Events from "./components/Events"
import Updates from "./components/Updates"
import Community from "./components/Community"
import Feedback from "./components/Feedback"
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { Link } from 'react-scroll';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
      <div className='flex flex-col w-full '>
        <nav className=' text-white w-full h-auto p-2 flex items-center justify-between sticky top-0 bg-black phone:hidden'>
          <div className='flex items-center gap-2'>
          <img src={logo} className='w-12 h-12 '/>
          <h1 className='text-3xl font-bold '>V A S P</h1>
          </div>
          <div className='text-xl flex items-center gap-10 font-semibold'>
            <Link to='home' smooth={true} className='cursor-pointer'>Home</Link>
            <Link to='features' smooth={true} className='cursor-pointer'>Features</Link>
            <Link to='about' smooth={true} className='cursor-pointer'>About</Link>
            <Link to='events' smooth={true} className='cursor-pointer'>Events</Link>
            <Link to='update' smooth={true} className='cursor-pointer'>Updates</Link>
            <Link to='feedback' smooth={true} className='cursor-pointer'>Feedback</Link>
          </div>
          <div className='text-xl flex items-center '>
            <button className='bg-blue-700 p-2 w-24 rounded-lg '>SignUp</button>
            <hr className='w-7 rotate-90'/>
            <button className='bg-blue-700 p-2 w-24 rounded-lg'>Login</button>
          </div>
        </nav>
        <Home/>
        <Features/>
        <About/>
        <Events/>
        <Updates/>
        {/* <Community/> */}
        <Feedback/>
      </div>
    </>
  );
}

export default App;
