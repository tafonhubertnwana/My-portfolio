import React from 'react'
import image from "../image/e-quiz.png";
import image2 from "../image/ht-mobile.png"
import image3 from "../image/e-best.png"
import image4 from "../image/portfolio.png"

const Portfolio = () => {
  return (
    <div name='Portfolio'>
      <div className="max-w-screen-lg pt-20  mx-auto flex flex-col justify-center w-full h-full text-white">
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
              <a href="#"><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                demo
              </button></a> 

              <a href="https://github.com/tafonhubertnwana/react_e-website"><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </a>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img src={image4} alt="" className="rounded-md duration-200 hover:scale-105"/>
            <div className="flex items-center justify-center">
              <a href="https://tafonportfolio.netlify.app"><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                demo
              </button></a> 

              <a href="https://github.com/tafonhubertnwana/My-portfolio"><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </a>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img src={image3} alt="" className="rounded-md duration-200 hover:scale-105"/>
            <div className="flex items-center justify-center">
              <a href="https://e-best-shopping.netlify.app/"><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
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
              <a href="https://e-quiz-game.netlify.app/"><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
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