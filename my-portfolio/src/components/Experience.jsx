import React from 'react'

import html from "../image/html.png"
import csslogo from "../image/css.png"
import javascript from "../image/javascript.png"
import node from "../image/nodejs.png"
import tailwind from "../image/tailwind.png"
import react from "../image/react.png"
import github from "../image/github.png"
import express from "../image/expressjs.png"
import aws from "../image/aws.png"

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
      style: "shadow-blue-500"
    },
    {
      id: 3,
      src: tailwind,
      title: "Tailwind.js",
      style: "shadow-sky-400"
    },
    
    {
      id: 4,
      src: javascript,
      title: "javaScript",
      style: "shadow-yellow-500"
    },
    {
      id: 5,
      src: react,
      title: "react.js",
      style: "shadow-blue-600"
    },
    {
      id: 6,
      src: node,
      title: "Node.js",
      style: "shadow-green-500"
    },
    {
      id: 7,
      src: express,
      title: "Express.js",
      style: "shadow-white"
    },
    {
      id: 8,
      src: github,
      title: "Github",
      style: "shadow-gray-400"
    },
    {
      id: 8,
      src: aws,
      title: "AWS",
      style: "shadow-white"
    }

  ]


  return (
    <div name="Skill"

    >
      <div className="max-w-screen-lg mx-auto sm:pt-20 flex flex-col justify-center w-full h-full text-white">
        <div >
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline mt-50">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
