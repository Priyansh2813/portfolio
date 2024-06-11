import ExperienceCard from './ExperienceCard';
import { Element } from 'react-scroll';
export default function Experience() {
  return (
    <Element name="Experience">
      <div className="w-full bg-gradient-to-b to-slate-800 from-slate-700 pt-[90px] text-white md:h-screen pb-8">
        <div className="flex flex-col mx-auto py-4 max-w-screen-lg justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl border-b-4 border-gray-500 inline font-bold mt-4">
              Experience
            </p>
            <p className="pb-4 py-8 ">Look At My Tech Stack</p>
          </div>
          <div className="grid   sm:px-0  sm:grid-cols-2 md:grid-cols-3  px-4 gap-y-[40px] gap-x-[20px] ">
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
          </div>
        </div>
      </div>
    </Element>
  );
}
