import { useState } from 'react';
import toast from 'react-hot-toast';
type Props = {
  image: string;
  description?: string;
  name: string;
  gitHub: string;
  host?: string;
};

export default function PortfolioItem({
  image,
  description,
  name,
  gitHub,
  host,
}: Props) {
  const [hover, setHover] = useState<boolean>(false);

  function onEnter() {
    setHover(true);
  }
  function onLeave() {
    setHover(false);
  }

  function handleHost() {
    if (!host) {
      toast.error(
        'This Project is not hosted yet. Please have a look on the code from GitHub.'
      );
    }
  }

  return (
    <div className="shadow-md shadow-gray-600 rounded-lg w-[300px] h-[250px] hover:scale-110 duration-500 ease-in-out">
      <div onMouseEnter={onEnter} onMouseLeave={onLeave}>
        {hover ? (
          <div
            className={`px-4 py-2 rounded-lg text-[14px]  text-wrap w-full h-[200px] duration-500`}
          >
            <span className="text-[18px] mx-auto font-semibold">{name}</span>
            <p className="pt-2"> {description}</p>
          </div>
        ) : (
          <>
            <img
              src={image}
              className="rounded-lg  duration-300 h-[200px] w-[300px]"
            />
          </>
        )}
      </div>
      <div className="flex justify-evenly items-center">
        <button
          className="hover:scale-125 duration-300  py-2 "
          onClick={handleHost}
        >
          <a href={host} target="_blank">
            Visit
          </a>
        </button>
        <button className="hover:scale-125 duration-300  py-2">
          <a href={gitHub} target="_blank">
            Code
          </a>
        </button>
      </div>
    </div>
  );
}
