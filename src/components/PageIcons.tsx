import { Link } from 'react-scroll';
import { options } from '../data/navbar';
export default function PageIcons() {
  return (
    <div className=" flex flex-col fixed right-0 top-[40%] text-2xl ">
      <ul>
        {options.map((value) => {
          return (
            <Link to={value.name} duration={500} smooth>
              <li
                key={value.id}
                className="px-4 py-2 cursor-pointer hover:scale-125 duration-200 "
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
