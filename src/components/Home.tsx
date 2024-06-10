import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import imageHome from '../assets/home.png';

export default function Home() {
  return (
    <div className="h-full w-full bg-gradient-to-b from-slate-800 to-slate-700 ">
      <div className="flex justify-center mx-auto h-full flex-col max-w-screen-lg px-4 items-center md:flex-row  ">
        <div className="flex flex-col pt-[80px] justify-center items-centermd:flex-col md:pt-0 ">
          <h2 className="text-4xl sm:text-7xl text-white font-bold ">
            I'm a Full Stack Developer
          </h2>
          <p className="max-w-md py-4 text-slate-400 font-semi">
            I have x years of experience building and designing software.
            Currently, I love to work on web application using technologies
            like.....
          </p>
          <div>
            <button className=" group flex justify-evenly items-center w-[150px] h-[50px] bg-gradient-to-r from-slate-500 via-slate-500 to-slate-300 rounded-lg hover:scale-105 ">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={35} />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img src={imageHome} className="w-[500px] h-[350px]" />
        </div>
      </div>
    </div>
  );
}
