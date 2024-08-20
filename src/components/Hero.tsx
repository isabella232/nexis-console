// components/HeroSection.tsx
'use client'; // Add this at the top of the file

import Image from 'next/image';
import { useEffect, useState } from 'react';

// Define the type for comet data
type Comet = {
  src: string;
  top: string;
  left: string;
  zIndex: number;
};

const getRandomPosition = () => ({
  top: `${Math.random() * 100}vh`,
  left: `${Math.random() * 100}vw`,
});

const HeroSection = () => {
  const [comets, setComets] = useState<Comet[]>([]);

  useEffect(() => {
    const numComets = 9;
    const cometData: Comet[] = Array.from({ length: numComets }, (_, index) => ({
      src: `/comets/1.png`,
      ...getRandomPosition(),
      zIndex: Math.floor(Math.random() * 10) + 1, // Random z-index between 1 and 10
    }));
    setComets(cometData);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image 
          src="/orbits/outermost.png" 
          alt="Outermost Orbit" 
          layout="fill" 
          objectFit="cover" 
          priority 
        />
      </div>
      <div className="absolute flex items-center justify-center">
        <Image 
          src="/orbits/penultimate.png" 
          alt="Penultimate Orbit" 
          width={400} 
          height={400} 
          priority 
        />
      </div>
      <div className="absolute flex items-center justify-center">
        <Image 
          src="/orbits/innermost.png" 
          alt="Innermost Orbit" 
          width={300} 
          height={300} 
          priority 
        />
      </div>
      {comets.map((comet, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            top: comet.top,
            left: comet.left,
            zIndex: comet.zIndex,
          }}
        >
          <Image
            src={comet.src}
            alt={`Comet ${index + 1}`}
            width={100}
            height={100}
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default HeroSection;
