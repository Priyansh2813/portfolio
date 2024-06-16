import { Link } from 'react-scroll';
import { options } from '../data/navbar';
export default function PageIcons({
  currentSection,
}: {
  currentSection: string;
}) {
  return (
    <div className=" flex flex-col fixed right-0 top-[40%] text-xl min-h-[400px] min-w-[160px] ">
      <ul>
        {options.map((value) => {
          return (
            <Link to={value.name} duration={500} smooth>
              <li
                key={value.id}
                className={`${
                  currentSection == value.name
                    ? ' underline underline-offset-4 scale-105 '
                    : 'pr-2'
                } pl-4  py-2 cursor-pointer duration-200 text-white`}
              >
                {value.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
