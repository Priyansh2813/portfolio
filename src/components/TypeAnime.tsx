import { TypeAnimation } from 'react-type-animation';

export default function TypeAnime() {
  return (
    <span>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'My name is Priyansh',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'I am Software Developer',
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '30px', display: 'inline-block' }}
        repeat={Infinity}
      />
    </span>
  );
}
