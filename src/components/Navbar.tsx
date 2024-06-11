import { useState } from 'react';
import { options } from '../data/navbar';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [navOpen, setnavOpen] = useState<boolean>(false);
  return (
    <div className="w-full min-h-[60px] bg-slate-800 text-white flex justify-between items-center fixed">
      <h1 className="font-signature text-4xl px-4 ml-8 hover:scale-110 duration-300">
        Priyansh
      </h1>
      <ul className="hidden md:flex text-xl items-center mr-4 text-slate-400">
        {options.map((value) => {
          return (
            <Link to={value.name} duration={500} smooth>
              <li
                key={value.id}
                className="px-4 cursor-pointer hover:scale-125 duration-200"
              >
                {value.name}
              </li>
            </Link>
          );
        })}
      </ul>

      {/* <PageIcons /> */}

      <div
        onClick={() => setnavOpen(!navOpen)}
        className=" mr-8 md:hidden px-4 z-50 text-slate-400 "
      >
        {navOpen ? <IoMdClose size={50} /> : <FaBars size={50} />}
      </div>
      {navOpen && (
        <ul className="flex flex-col absolute w-full h-screen top-0 left-0 bg-gradient-to-b from-black to-gray-600 justify-center items-center">
          {options.map((value) => {
            return (
              <li
                key={value.id}
                className=" flex py-4 text-4xl cursor-pointer hover:scale-125    duration-200 text-slate-400 "
              >
                {value.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
