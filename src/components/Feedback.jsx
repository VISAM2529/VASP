import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';
import {Toaster,toast} from "react-hot-toast"
import feedback from "../utils/icons/feedback.jpeg"
import logo from "../utils/MainLogo.jpeg"
function Feedback() {
  const form = useRef();
    const user_name = useRef();
    const user_email = useRef();
    const message = useRef();
  const sendEmail = (e) => {
    
    e.preventDefault();

    emailjs.sendForm('service_u4to0ra', 'template_fsl12dl', form.current, 'Ob18sCSq1duHGfUlx')
      .then((result) => {
        
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      user_name.current.value=""
    user_email.current.value=""
    message.current.value=""
    toast.success("Sent")
};

  return (
    <>
    <Toaster/>
    <div id='feedback' className='p-10 w-full flex flex-col gap-10 phone:p-5'>
      <div className='flex flex-col gap-5 items-start phone:gap-2'>
        <h1 className='text-5xl text-white phone:text-2xl'>Feedback</h1>
        <hr className='w-48 phone:w-32'/>
      </div>
      <div  className='w-full flex  gap-0 phone:w-full '>
          {/* <form ref={form} className='flex flex-col gap-2 phone:text-xs'>
            <input name='user_name' ref={user_name} placeholder='Your Name' type='text' className='px-3 py-2 rounded-3xl  outline-none bg-white w-full'/>
            <input name='user_email' ref={user_email} placeholder='Your Mail' type='email' className='px-3 py-2 rounded-3xl  outline-none'/>
            <input name='message' ref={message} placeholder='Your Msg' type='text' className='px-3 py-2 rounded-3xl outline-none'/>
            <button onClick={sendEmail} className='w-full bg-orange-500 rounded-3xl py-2 text-white'>Send</button>
          </form> */}
          <form ref={form} className='w-1/2 bg-white flex flex-col items-center justify-center gap-10 rounded-tl-2xl rounded-bl-2xl phone:w-full phone:rounded-2xl phone:p-2 phone:bg-transparent phone:shadow-2xl phone:shadow-gray-950'>
            <img className='w-1/3 ' src={logo} />
            <div className='flex flex-col items-center bg-transparent w-full gap-5'>
            <input name='user_name' ref={user_name} placeholder='Your Name' type='text' className='px-3 py-2 rounded-3xl  outline-none  w-1/2 text-white bg-gray-900 phone:w-full phone:bg-white'/>
            <input name='user_email' ref={user_email} placeholder='Your Mail' type='email' className='px-3 py-2 rounded-3xl  outline-none w-1/2 text-white bg-gray-900 phone:w-full phone:bg-white'/>
            <input name='message' ref={message} placeholder='Your Msg' type='text' className='px-3 py-2 rounded-3xl outline-none w-1/2 text-white bg-gray-900 phone:w-full phone:bg-white'/>
            <button onClick={sendEmail} className='w-1/2 bg-blue-700 rounded-3xl py-2 text-white phone:w-full'>Send</button>
            </div>
          </form>
          <img className='w-1/2 rounded-tr-2xl rounded-br-2xl shadow-2xl phone:hidden' src={feedback}/>
        </div>
    </div>
    </>
  )
}

export default Feedback