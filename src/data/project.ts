import hotel_project from '../assets/hotel_project.png';
import project_travel_cities from '../assets/project_travel_cities.png';
import project_course_maker from '../assets/project_course_maker.png';
import project_human from '../assets/human_drowsiness_detection_project.jpg';
interface ProjectData {
  name: string;
  image: string;
  description: string;
  id: number;
  gitHub: string;
  host?: string;
}

export const projectData: ProjectData[] = [
  {
    name: 'Hotel Management System',
    image: hotel_project,
    description:
      'This project helps to visualise as well as manage the daily checkin and checkout of customers, also review their booking details.',
    id: 1,
    gitHub: 'https://github.com/Priyansh2813/hotel-management-app',
    host: 'https://hotel-management-wild-oasis.vercel.app',
  },
  {
    name: 'Travel Cities Wishlist',
    image: project_travel_cities,
    description:
      'This helps you to list the cities you travelled, and pin them on map to embrace your mark on the world',
    id: 2,
    gitHub: 'https://github.com/Priyansh2813/travel-list-cities',
  },
  {
    name: 'Course Maker',
    image: project_course_maker,
    description:
      'This project helps you to host courses and lets user to buy them, and stream the course lectures.',
    id: 3,
    gitHub: 'https://github.com/Priyansh2813/course-maker-frontend',
    host: 'https://course-maker-frontend.onrender.com',
  },
  {
    name: 'Human Drowsiness Detection',
    image: project_human,
    description:
      'Developed a machine learning model for detecting human drowsiness using transfer learning techniques and integrated face detection algorithms to focus on relevant facial features, enabling real-time monitoring via camera.',
    id: 4,
    gitHub: 'https://github.com/Priyansh2813/human-drowsiness-detect',
  },
];
