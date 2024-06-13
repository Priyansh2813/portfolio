type ExperienceCardProps = {
  image: string;
  name: string;
  color: string;
};

export default function ExperienceCard({
  name,
  image,
  color,
}: ExperienceCardProps) {
  return (
    <div
      className={`shadow-md shadow-b-8xl   w-[200px] h-[200px] flex flex-col  hover:scale-105 duration-300 ${color}`}
    >
      <div
        className="flex flex-col justify-evenly
      items-center h-full w-full"
      >
        <img
          src={image}
          className="rounded-lg hover:scale-105 duration-300 max-w-[100px] max-h-[100px] pt-4"
        />
        <p className="pt-4">{name}</p>
      </div>
    </div>
  );
}
