import React, { useState } from 'react';
import tour from "../utils/tour.jpeg";
import releases from "../utils/releases.jpeg";
import meetup from "../utils/meetup.jpeg";
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
function Events() {
  // State to track hover status
  const [hovered, setHovered] = useState(null);
  
  return (
    <div id='events' className='p-10 w-full flex flex-col gap-10 phone:p-5'>
      <div className='flex flex-col items-start gap-5 phone:gap-2'>
        <h1 className='text-5xl text-white phone:text-2xl'>Events</h1>
        <hr className='w-48 phone:w-32' />
      </div>
      <div className='flex items-center justify-between gap-10 phone:gap-2 phone:flex-col'>
        {/* Event cards */}
        <div 
          className='w-1/3 flex flex-col items-center justify-center gap-5 text-white shadow-gray-950 shadow-2xl phone:w-full '
          onMouseEnter={() => setHovered("tour")}
          onMouseLeave={() => setHovered(null)}
        >
          <img src={tour} className={`w-full`} alt="Tour Image" />
          {hovered === "tour" && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <p className="text-2xl bg-transparent">Game Tournaments</p>
            </div>
          )}
        </div>
        {/* Add similar code for other event cards */}
        {/* Event card for releases */}
        <div 
          className='w-1/3 flex flex-col items-center justify-center gap-5 text-white shadow-gray-950 shadow-2xl phone:w-full '
          onMouseEnter={() => setHovered("releases")}
          onMouseLeave={() => setHovered(null)}
        >
          <img src={releases} className={`w-full`} alt="Releases Image" />
          {hovered === "releases" && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <p className="text-2xl bg-transparent">Exclusive Game Releases</p>
            </div>
          )}
        </div>
        {/* Event card for meetup */}
        <div 
          className='w-1/3 flex flex-col items-center justify-center gap-5 text-white shadow-gray-950 shadow-2xl phone:w-full '
          onMouseEnter={() => setHovered("meetup")}
          onMouseLeave={() => setHovered(null)}
        >
          <img src={meetup} className={`w-full`} alt="Meetup Image" />
          {hovered === "meetup" && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <p className="text-2xl bg-transparent">Virtual Meetups</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Events;
