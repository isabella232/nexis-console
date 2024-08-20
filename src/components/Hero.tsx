// components/HeroSection.js
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Outermost Image */}
      <div className="absolute w-screen h-screen">
        <Image src="/orbits/outermost.png" alt="Outermost Orbit" layout="fill" objectFit="cover" />
      </div>

      {/* Penultimate Image */}
      <div className="absolute w-[70%] h-[70%]">
        <Image src="/orbits/penultimate.png" alt="Penultimate Orbit" layout="fill" objectFit="contain" />
      </div>

      {/* Innermost Image */}
      <div className="absolute w-[50%] h-[50%]">
        <Image src="/orbits/innermost.png" alt="Innermost Orbit" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default HeroSection;
