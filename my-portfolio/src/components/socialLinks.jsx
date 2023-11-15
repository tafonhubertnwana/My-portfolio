import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from "react-icons/bs";


const SocialLink = () => {

  const links =[
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'www.linkedin.com/in/tafon-n-hubert',
      style: "rounded-tr-md"
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/tafonhubertnwana'
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:tafonsoftwarespecialist@gmail.com'
    },

    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: 'https://linkedin.com'
    }
    
  ]
  return (
    <div className="flex-col top-[35%] left-0 fixed">
      <ul>
        <li clasName="flex justify-between items-center w-40 h-14 px-4 bg-grey-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]" >
          <a href="" className ="flex justify-between items-center w-full text-white" >
            <>
              LinkedIn <FaLinkedin size={30} />
            </>          
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialLink