import React from 'react'
import image from "../image/personel-4.jpg";

const Portfolio = () => {
  return (
    <div 
    name='portfolio'
    className=' bg-gradient-to-b from-slate-200 to-slate-50 text-black w-full md:h-screen '
    >

      <div className="max-w-screen-lg p-4 max-auto flex flex-col justify-center w-full h-full">
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500' >Portfolio</p>
          <p className='py-6'>Check our some of my work right here</p>
        </div>

        <div className='gridsm:grid-cols-2 md:grid-cols-3 gap-8 px-12'>
          <div>
            <img src={image} alt="" />
            <div>
              <button>Demo</button>
              <button>Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;