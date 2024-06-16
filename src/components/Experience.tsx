import ExperienceCard from './ExperienceCard';
import { Element } from 'react-scroll';
import {
  js_url,
  react_url,
  ts_url,
  css_url,
  sql_url,
  nodejs_url,
  html_url,
} from '../data/imageUrl';

export default function Experience() {
  return (
    <Element id="Experience" name="Experience" className="section">
      <div className="w-full bg-gradient-to-b to-slate-800 from-slate-700 pt-[30px] text-white md:h-screen pb-8">
        <div className="flex flex-col mx-auto py-4 max-w-screen-lg justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl border-b-4 border-gray-500 inline font-bold mt-4">
              Experience
            </p>
            <p className="pb-4 py-8 ">Have a Look At My Tech Stack</p>
          </div>
          <div className="grid   sm:px-0  sm:grid-cols-2 md:grid-cols-4  px-4 gap-y-[40px] gap-x-[20px] ">
            <ExperienceCard
              name="JavaScript"
              image={js_url}
              color="shadow-amber-500"
            />
            <ExperienceCard
              name="HTML"
              image={html_url}
              color="shadow-orange-500"
            />
            <ExperienceCard
              name="CSS"
              image={css_url}
              color="shadow-teal-500"
            />
            <ExperienceCard
              name="TypeScript"
              image={ts_url}
              color="shadow-blue-600"
            />
            <ExperienceCard
              name="NodeJS"
              image={nodejs_url}
              color="shadow-green-600"
            />
            <ExperienceCard
              name="ReactJS"
              image={react_url}
              color="shadow-cyan-300"
            />
            <ExperienceCard
              name="SQL"
              image={sql_url}
              color="shadow-emerald-400"
            />
          </div>
        </div>
      </div>
    </Element>
  );
}
