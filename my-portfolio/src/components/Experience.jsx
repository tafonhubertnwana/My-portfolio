import React from 'react'

import html from "../image/html5.png"
import csslogo from "../image/csslogo.png"
import javascript from "../image/javascriptLogo.png"
import node from "../image/nodejs.png"
import tailwind from "../image/tailwind.png"
import react from "../image/reactjsLogo.jpg"
import github from "../image/github.jpg"
import express from "../image/expressjs.png"

const Experience= () => {

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500"
    },
    {
      id: 2,
      src: csslogo,
      title: "CSS",
      style: "shadow-orange-500"
    },
    {
      id: 3,
      src: tailwind,
      title: "Twailwind.js",
      style: "shadow-orange-500"
    },
    
    {
      id: 4,
      src: javascript,
      title: "javaScript",
      style: "shadow-orange-500"
    },
    {
      id: 5,
      src: react,
      title: "react.js",
      style: "shadow-orange-500"
    },
    {
      id: 6,
      src: node,
      title: "Node.js",
      style: "shadow-orange-500"
    },
    {
      id: 7,
      src: express,
      title: "Express.js",
      style: "shadow-orange-500"
    },
    {
      id: 8,
      src: github,
      title: "Github",
      style: "shadow-orange-500"
    },

  ]


  return (
    <div name="experience "
      className=" bg-gradient-to-b from-slate-200 to-slate-50 text-black w-full h-screen "
    >
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full b-full text-black'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 text-black'>
            Experience
          </p>
          <p className='py-6'>
            These are the technology i have worked on
          </p>
        </div>

        <div className='"w-full grid sm:grid-cols-3 gap-4 text-center py-8 px-12 sm:px-6 '>
          <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
            <img src={html} alt="" className="w-20 mx-auto"/>
            <p className='mt-4'>HTML</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
