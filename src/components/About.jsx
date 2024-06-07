import React from "react";
import about from "../utils/about.jpeg";
function About() {
  return (
    <div id="about" className="w-full ">
      <div
        className="w-full h-screen phone:h-72 bg-cover bg-center text-5xl text-end p-10 flex flex-col items-end gap-10 phone:p-2 phone:gap-2 "
        style={{
          backgroundImage: `url(${about})`,
          backgroundRepeat: "no-repeat ",
          backgroundSize: "cover",
          objectFit: "contain",
        }}
      >
        <div className="flex flex-col items-end gap-5 bg-transparent phone:gap-2">
        <h1 className="bg-transparent phone:text-xl">About Us</h1>
        <hr className="border-t-2 border-black w-72 phone:w-32"/>
        </div>
        <p className="text-gray-700 bg-transparent text-xl w-3/6  font-semibold phone:text-xs phone:w-5/6  phone:font-bold">
          Welcome to VASP, where passion meets play. At
          VASP, we believe that gaming is more than just
          entertainment; it's an experience that brings people together, fosters
          creativity, and fuels imagination. Founded by a team of avid gamers,
          our platform is built on the principle of providing a welcoming space
          for gamers of all levels and interests. Whether you're a casual player
          looking for quick fun or a seasoned pro seeking new challenges,VASP offers a diverse range of games, features, and
          communities to explore. Our mission is to create a vibrant gaming
          ecosystem where players can connect, compete, and collaborate with
          like-minded individuals from around the world.
        </p>
      </div>
    </div>
  );
}

export default About;
