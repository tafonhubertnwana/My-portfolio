import React from 'react'

const Contact = () => {
  return (
    <div name="Contact" className=" p-4 bg-gradient-to-b from-slate-50 to-slate-200 text-black w-full h-screen">
      <div classNmae="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 botder-gray-500">Contact</p>
          <p className='py-6'> Submit the form below to get in touch with me</p>
        </div>

        <div className='flex justify-center items-center'>
          <form action="https://getform.io/f/7ec526fc-2ea4-40a1-bb70-ad4e4ed25074" method="POST" className='flex flex-col w-full md:w-1/2'>
            <input 
              type="text" 
              name="name" 
              placeholder="Enter your name" 
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            />
            <input 
              type="text" 
              name="Email" 
              placeholder="Enter your email" 
              className="p-2 my-4 bg-transparent border-2 rounded-md text-black focus:outline-none"
            />
            <textarea 
              name="message" 
              row="10" 
              placeholder='Enter your message'
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            >
            </textarea>

            <button className='text-black bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>SEND</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Contact