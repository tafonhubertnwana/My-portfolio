import React from 'react'

import html from "../image/html5.png"
import csslogo from "../image/csslogo.png"
import javascript from "../image/javascriptLogo.png"
import node from "../image/nodejs.png"
import tailwind from "../image/tailwind.png"
import react from "../image/reactjsLogo.jpg"
import github from "../image/github.jpg"

const Experience= () => {
  return (
    <div name="experience">
      <div>
        <div>
          <p>
            Experience
          </p>
          <p>
            These are the technology i have worked on
          </p>
        </div>

        <div>
          <div>
            <img src={html} alt="" />
            <p>HTML</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
