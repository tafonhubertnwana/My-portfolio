import React from 'react';
import image from "../image/personel-4.jpg";
import About from "./About"

import Portfolio from './Portfolio';
import Experience from './Experience';
import Contact from './Contact';

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from "react-scroll"



const Home = () => {
  return (
    <>
      
      <div  className='  bg-slate-800 '>
        <div name="Home" className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-screen w-full  md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              I'm a Full Stack Developer
            </h2>
            <p className="text-gray-200 py-4 max-w-md">
              I have experience on building and desgining software.
              Currently, I love to work on web application using technologies such as MERN, PERN and the MEAN stacks.
            </p>

            <div>
              <Link
                to="Portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>

          <div>
            <img
              src={image}
              alt="my profile"
              className="rounded-2xl mx-auto w-2/3 md:w-full"
            />
          </div>
        </div>

        <About />

        <Portfolio />

        <Experience />

        <Contact />
      </div>


    </>
    
  )
}

export default Home