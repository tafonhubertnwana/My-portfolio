import React from 'react'
import image from "../image/e-quiz.png";
import image2 from "../image/ht-mobile.png"

const Portfolio = () => {
  return (
    <div 
    name='Portfolio'
    className=' bg-gradient-to-b from-slate-600 to-slate-900 text-black w-full md:h-screen  pt-40 pb-60'
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img src={image2} alt="" className="rounded-md duration-200 hover:scale-105"/>
            <div className="flex items-center justify-center">
              <a href="https://main.dqk3s0sa4prok.amplifyapp.com/"><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                demo
              </button></a> 

              <a href="https://github.com/tafonhubertnwana/react_e-website"><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </a>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img src={image} alt="" className="rounded-md duration-200 hover:scale-105"/>
            <div className="flex items-center justify-center">
              <a href="https://main.dqk3s0sa4prok.amplifyapp.com/"><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                demo
              </button></a> 

              <a href="https://github.com/tafonhubertnwana/My-portfolio"><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </a>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img src={image} alt="" className="rounded-md duration-200 hover:scale-105"/>
            <div className="flex items-center justify-center">
              <a href="https://main.dqk3s0sa4prok.amplifyapp.com/"><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                demo
              </button></a> 

              <a href="https://github.com/tafonhubertnwana/E-com"><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </a>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img src={image} alt="" className="rounded-md duration-200 hover:scale-105"/>
            <div className="flex items-center justify-center">
              <a href="https://main.dqk3s0sa4prok.amplifyapp.com/"><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                demo
              </button></a> 

              <a href="https://github.com/tafonhubertnwana/quiz-game"><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;