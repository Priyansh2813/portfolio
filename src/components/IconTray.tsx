import { trayData } from '../data/iconTraydata';
import IconTrayItem from './IconTrayItem';

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { GrDocumentPdf } from 'react-icons/gr';
import { ReactElement } from 'react';

const arr: ReactElement[] = [
  <FaLinkedin size={25} />,
  <FaGithub size={25} />,
  <MdOutlineMail size={25} />,
  <GrDocumentPdf size={25} />,
];

export default function IconTray() {
  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul className="hidden lg:block">
        {trayData.map((value) => {
          return (
            <IconTrayItem
              element={value.name}
              component={arr[value.id - 1]}
              href={value.href}
            />
          );
        })}
      </ul>
    </div>
  );
}
