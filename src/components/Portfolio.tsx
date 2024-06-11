import PortfolioItem from './PortfolioItem';
import { Element } from 'react-scroll';
export default function Portfolio() {
  return (
    <Element name="Portfolio">
      <div className="w-full bg-gradient-to-b from-slate-800 to-slate-700 pt-[90px] text-white md:h-screen pb-8">
        <div className="flex flex-col mx-auto py-4 max-w-screen-lg justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl border-b-4 border-gray-500 inline font-bold">
              Portfolio
            </p>
            <p className="py-6">Look At My Awesome Projects</p>
          </div>
          <div className="grid   sm:px-0  sm:grid-cols-2 md:grid-cols-3  px-12 gap-8 ">
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
          </div>
        </div>
      </div>
    </Element>
  );
}
