import { FaArrowDown } from 'react-icons/fa6';
import { Link } from 'react-scroll';

type ArrowProps = {
  link: string;
};

export default function Arrow({ link }: ArrowProps) {
  return (
    <div className="border rounded-full h-[50px] w-[50px] bg-slate-500 flex justify-center items-center animate-bounce cursor-pointer hover:scale-125">
      <Link to={link} duration={500} smooth>
        <FaArrowDown size={25} />
      </Link>
    </div>
  );
}
