import React from 'react';
import {FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  const Links = [
    {
      id: 1,
      link: "Home"
    },
    {
      id: 2,
      link: "Home"
    },
    {
      id: 3,
      link: "Home"
    },
    {
      id: 4,
      link: "Home"
    },
    {
      id: 5,
      link: "Home"
    }

  ]

  return (
    <>
      <div className="flex justify-between items-center w-full h20 text-white bg-black fixed px-4"> 
        <div>
          <h1 className="text-5xl font-signature ml-2">Tafon</h1>
        </div>

        <ul>
          <li className="px-4 cursor-pointer capitlize font-medium text-gray-500 hover:scale-105 duration-200">Home</li>
          <li>Home</li>
        </ul>
      </div>
      
    </>
  ); 
}

export default Navbar;