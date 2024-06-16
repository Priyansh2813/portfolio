import { useState } from 'react';
import { options } from '../data/navbar';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

export default function Navbar() {
  const [navOpen, setnavOpen] = useState<boolean>(false);

  return (
    <div className="bg-transparent w-full min-h-[60px]  text-white flex justify-between items-center fixed">
      <h1 className="font-signature text-4xl px-4 ml-8 hover:scale-110 duration-300 mt-8">
        Priyansh
      </h1>

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
