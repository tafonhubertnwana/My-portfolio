import React from 'react'
import image from "../image/personel-4.jpg";

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: image
    },
    {
      id: 2,
      src: image
    },
    {
      id: 3,
      src: image
    },
    {
      id: 4,
      src: image
    }

  ]

  return (
    <div 
    name='Portfolio'
    className=' bg-gradient-to-b from-slate-50 to-slate-200 text-black w-full md:h-screen '
    >

      <div className="max-w-screen-lg p-4 max-auto flex flex-col justify-center w-full h-full">
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500' >Portfolio</p>
          <p className='py-6'>Check our some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

          {portfolios.map(({id, src}) => (
            
            <div key= {id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
              <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
              </div>
            </div>
          ))}
        </div>
        

        
      </div>
    </div>
  )
}

export default Portfolio;