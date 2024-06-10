import { ReactElement } from 'react';

type IconTrayProps = {
  element: string;
  component: ReactElement;
  href: string;
};

export default function IconTrayItem({
  element,
  component,
  href,
}: IconTrayProps) {
  return (
    <li
      className={`flex justify-between items-center w-[180px] h-[50px] text-white font-bold bg-slate-500 ml-[-130px] hover:ml-0 duration-500 boreder-tr            ${
        element == 'LinkedIn' ? 'rounded-tr-lg' : ''
      } ${element == 'Resume' ? 'rounded-br-lg' : ''}`}
    >
      <a
        className="flex justify-between items-center w-full"
        target="_blank"
        href={href}
        download={true}
      >
        <span className="pl-3 text-xl ml-4"> {element}</span>

        <div className="pr-3">{component}</div>
      </a>
    </li>
  );
}
