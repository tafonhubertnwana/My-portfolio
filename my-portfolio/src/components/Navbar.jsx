import { looksLikeNumber } from "yargs-parser"


const Navbar = () => {

  const links = [
    {
      id:1,
      link: 'Home'
    },
    {
      id:2,
      link: 'About'
    },
    {
      id:3,
      link: 'Profolio'
    },
    {
      id:4,
      link: 'Experience'
    },
    {
      id:5,
      link: 'Contact'
    }
  ]
  return (
    <div>
      <div className="flex justify-between items-center w-full h-20 px-4 txt-white bg-black fixed">
        <div>
          <h1 classname="text-5xl ml-2"> Tafon</h1>
        </div>
        <ul className="flex">

          {links.map(link => {
            <li className="px-4 cursor-pointer capitalize font-medium text-grey-500 hover:scale-105 duration-200">Home</li>

          })}
          
        </ul>

      </div>
    </div>
  )
}

export default Navbar