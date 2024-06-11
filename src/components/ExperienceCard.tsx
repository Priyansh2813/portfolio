import css_image from '../assets/css_image.png';

export default function ExperienceCard() {
  return (
    <div className="shadow-md shadow-b-8xl shadow-blue-300  w-[250px] h-[200px] flex flex-col  hover:scale-105 duration-300">
      <div className="flex flex-col justify-center items-center">
        <img
          src={css_image}
          className="rounded-lg hover:scale-105 duration-300 w-[250] h-[100px] pt-8"
        />
        <p className="pt-16">CSS</p>
      </div>
    </div>
  );
}
