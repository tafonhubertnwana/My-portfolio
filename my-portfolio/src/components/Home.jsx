import React from 'react';
import image from "../image/personel-4.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from "react-scroll"



const Home = () => {
  return (
    <div name="Home" className='h-screen w-full bg-gradient-to-b from-slate-50 to-slate-200 via-white '>
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div cclassName="flex flex-col justify-center h-full">
          <h2 className=' text-4xl sm:text-7xl font-bold text-black'> I'm a FrontEnd Developer</h2>
          <p className='text-gray-500 py-4 max-w-md'>
            I have 2 years of experience in building web applications serving 10+ million users. Passionate about creating responsive and accessible websites. My focus area has been front-end development with PERN and MERN stack.
          </p>
          <div>
            <Link to="Portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex iteems-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span clasName=" group-hover:rotate-90 duration 300">
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
              
            </Link>
          </div>
        </div>
        <div>
          <img src={image} alt="tafon hubert" className="rounded-2xl mx-auto w-2/3  md:w-full"/>
        </div>
      </div>
    
    
    
    </div>
  )
}

export default Home