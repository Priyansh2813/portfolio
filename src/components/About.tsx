import { Element } from 'react-scroll';

export default function About() {
  return (
    <Element name="About" id="About" className="section">
      <div className="h-screen w-full bg-gradient-to-b to-slate-800 from-slate-700  text-white">
        <div className="flex flex-col justify-center max-w-screen-lg w-full h-full mx-auto ">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About Me..
            </p>
          </div>

          <p className="text-xl mt-8">
            Hello!
            <br /> I'm Priyansh Pandey, a passionate software developer who
            thrives on creating innovative solutions to complex problems. I
            graduated from the National Institute of Technology (NIT) Jaipur in
            2024 with a degree in Electrical Engineering. During my time at NIT
            Jaipur, I developed a keen interest in software development, which
            has since become my primary focus and professional pursuit.
          </p>
          <br />
          <p className="text-xl">
            When I'm not coding, I enjoy playing Chess, which help me stay
            balanced and inspired. Thank you for visiting my portfolio. I'm
            excited about the possibility of collaborating on innovative
            projects and making a positive impact through technology.
            <br />
            <br />
            Feel free to{' '}
            <span className="underline underline-offset-8">
              priyanshpandey@gmail.com
            </span>{' '}
            if you'd like to connect!
          </p>
        </div>
      </div>
    </Element>
  );
}
