import React from 'react'
import money from "../utils/icons/money.png"
import support from "../utils/icons/247.png"
import parental from "../utils/icons/parental.png"
import seamless from "../utils/icons/seamless.png"
import graphics from "../utils/icons/graphics.png"
import stream from "../utils/icons/stream.png"
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold:0.1 // Trigger animation only onces // Trigger animation when button is 50% visible
  });
  return (
    <div id='features' className='p-10 mt-10 flex items-center flex-wrap justify-center gap-10 '>
      <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
      <div className='text-white p-5 max-w-sm h-96 flex flex-col items-center justify-between shadow-2xl shadow-gray-950 rounded-2xl phone:h-72'>
        <img src={money} className='w-20 h-20 phone:w-14 phone:h-14'/>
        <h1 className='text-3xl phone:text-lg'>Play & Earn</h1>
        <p className='text-center phone:text-xs'>Engage in fun activities such as gaming, completing tasks, and surveys, and earn rewards or cashback effortlessly with our 'Play and Earn' feature. Simply play games, achieve milestones, or participate in various tasks to receive exciting rewards, adding extra enjoyment to your experience.</p>
      </div></motion.div>
      <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
      <div className='text-white p-5 max-w-sm h-96 flex flex-col items-center justify-between shadow-2xl shadow-gray-950 rounded-2xl phone:h-72'>
        <img src={seamless} className='w-20 h-20 phone:w-14 phone:h-14'/>
        <h1 className='text-3xl phone:text-lg'>Seamless Play</h1>
        <p className='text-center phone:text-xs'>Engage in fun activities such as gaming, completing tasks, and surveys, and earn rewards or cashback effortlessly with our 'Play and Earn' feature. Simply play games, achieve milestones, or participate in various tasks to receive exciting rewards, adding extra enjoyment to your experience.</p>
      </div></motion.div>
      <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
      <div className='text-white p-5 max-w-sm h-96 flex flex-col items-center justify-between shadow-2xl shadow-gray-950 rounded-2xl phone:h-72'>
        <img src={parental} className='w-20 h-20 phone:w-14 phone:h-14'/>
        <h1 className='text-3xl phone:text-lg'>Parental Controls</h1>
        <p className='text-center phone:text-xs'>Engage in fun activities such as gaming, completing tasks, and surveys, and earn rewards or cashback effortlessly with our 'Play and Earn' feature. Simply play games, achieve milestones, or participate in various tasks to receive exciting rewards, adding extra enjoyment to your experience.</p>
      </div></motion.div>
      <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
      <div className='text-white p-5 max-w-sm h-96 flex flex-col items-center justify-between shadow-2xl shadow-gray-950 rounded-2xl phone:h-72'>
        <img src={graphics} className='w-20 h-20 phone:w-14 phone:h-14'/>
        <h1 className='text-3xl phone:text-lg'>Advanced Graphics</h1>
        <p className='text-center phone:text-xs'>Engage in fun activities such as gaming, completing tasks, and surveys, and earn rewards or cashback effortlessly with our 'Play and Earn' feature. Simply play games, achieve milestones, or participate in various tasks to receive exciting rewards, adding extra enjoyment to your experience.</p>
      </div></motion.div>
      <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
      <div className='text-white p-5 max-w-sm h-96 flex flex-col items-center justify-between shadow-2xl shadow-gray-950 rounded-2xl phone:h-72'>
        <img src={stream} className='w-20 h-20 phone:w-14 phone:h-14'/>
        <h1 className='text-3xl phone:text-lg'>Streaming</h1>
        <p className='text-center phone:text-xs'>Engage in fun activities such as gaming, completing tasks, and surveys, and earn rewards or cashback effortlessly with our 'Play and Earn' feature. Simply play games, achieve milestones, or participate in various tasks to receive exciting rewards, adding extra enjoyment to your experience.</p>
      </div></motion.div>
      <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
      <div className='text-white p-5 max-w-sm h-96 flex flex-col items-center justify-between shadow-2xl shadow-gray-950 rounded-2xl phone:h-72'>
        <img src={support} className='w-20 h-20 phone:w-14 phone:h-14'/>
        <h1 className='text-3xl phone:text-lg'>24×7 Support</h1>
        <p className='text-center phone:text-xs'>Engage in fun activities such as gaming, completing tasks, and surveys, and earn rewards or cashback effortlessly with our 'Play and Earn' feature. Simply play games, achieve milestones, or participate in various tasks to receive exciting rewards, adding extra enjoyment to your experience.</p>
      </div></motion.div>
      
    </div>
  )
}

export default Features