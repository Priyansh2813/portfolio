import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import imageHome from '../assets/home.png';
import { Element } from 'react-scroll';
import { Link } from 'react-scroll';
import TypeAnime from './TypeAnime';

export default function Home() {
  return (
    <Element name="Home" id="Home" className="section">
      <div className="h-screen w-full bg-gradient-to-b from-slate-800 to-slate-700 pt-[30px] ">
        <div className="flex justify-center mx-auto h-full flex-col max-w-screen-lg px-4 items-center md:flex-row  animate-slidein">
          <div className="flex flex-col min-h-[600px] pt-[80px] justify-center items-centermd:flex-col md:pt-0 ">
            <h2 className="text-4xl sm:text-7xl text-white font-bold ">
              <TypeAnime />
            </h2>
            <p className="max-w-md py-4 text-slate-400 font-semi">
              I love the experience of building and designing software.
              Currently, I love to work on web application using technologies
              like ReactJS, NodeJS, TypeScript, JavaScript..
            </p>
            <div>
              <Link to="Portfolio" duration={500} smooth>
                <button className=" group flex justify-evenly items-center w-[150px] h-[50px] bg-gradient-to-r from-slate-500 via-slate-500 to-slate-300 rounded-lg hover:scale-105 ">
                  Portfolio
                  <span className="group-hover:rotate-90 duration-300">
                    <MdOutlineKeyboardArrowRight size={35} />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div>
            <img src={imageHome} className="w-[500px] h-[350px]" />
          </div>
        </div>
      </div>
    </Element>
  );
}
