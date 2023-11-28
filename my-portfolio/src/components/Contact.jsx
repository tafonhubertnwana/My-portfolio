import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className=" p-4 bg-gradient-to-b from-slate-50 to-slate-200 text-black w-full h-screen">
      <div classNmae="flex ">
        <div>
          <p>Contact</p>
          <p> Submit the form below to get in touch with me</p>
        </div>

        <div>
          <form action="">
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
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            />
            <textarea 
              name="message" 
              row="10" 
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