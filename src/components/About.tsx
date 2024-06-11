import { Element } from 'react-scroll';

export default function About() {
  return (
    <Element name="About">
      <div className="h-screen w-full bg-gradient-to-b to-slate-800 from-slate-700 pt-[80px] text-white">
        <div className="flex flex-col justify-center max-w-screen-lg w-full h-full mx-auto">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About Me..
            </p>
          </div>

          <p className="text-xl mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            ipsum. Quo non ut adipisci exercitationem illum cupiditate natus
            accusantium reprehenderit. Rerum perspiciatis tempora animi? Rerum
            eaque dicta at corporis doloremque.
          </p>
          <br />
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dicta,
            reprehenderit earum totam quo officia accusantium veritatis et
            consequuntur, commodi vitae numquam. Libero repudiandae sequi
            quibusdam pariatur eos, esse sit.
          </p>
        </div>
      </div>
    </Element>
  );
}
