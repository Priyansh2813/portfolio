import hotelProject from '../assets/hotel_project.png';

export default function PortfolioItem() {
  return (
    <div className="shadow-md shadow-gray-600 rounded-lg w-[300px] h-[200px]">
      <img
        src={hotelProject}
        className="rounded-lg hover:scale-105 duration-300"
      />
      <div className="flex justify-evenly items-center">
        <button className=" hover:scale-125 duration-300 py-1">Demo</button>
        <button className="hover:scale-125 duration-300  py-1">Code</button>
      </div>
    </div>
  );
}
