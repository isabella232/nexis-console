// components/HeroSection.tsx
'use client'; // Add this at the top of the file

import Image from 'next/image';
import { useState } from 'react';

// Define the type for comet data
type Comet = {
  src: string;
  top: string;
  left: string;
  zIndex: number;
  size: number; // Use size instead of width and height
};

// Define the type for planet data
type Planet = {
  src: string;
  top: string;
  left: string;
  size: number; // Use size instead of width and height
};

// Define fixed positions and sizes for comets (hardcoded x, y positions and sizes)
const cometData: Comet[] = [
  { src: '/comets/1.png', top: '10vh', left: '20vw', zIndex: 5, size: 60 },
  { src: '/comets/1.png', top: '30vh', left: '40vw', zIndex: 3, size: 80 },
  { src: '/comets/1.png', top: '50vh', left: '60vw', zIndex: 7, size: 100 },
  { src: '/comets/1.png', top: '20vh', left: '80vw', zIndex: 4, size: 70 },
  { src: '/comets/1.png', top: '40vh', left: '10vw', zIndex: 6, size: 90 }
];

// Define fixed positions and sizes for planets (hardcoded x, y positions and sizes)
const planetData: Planet[] = [
  { src: '/planets/1.png', top: '17vh', left: '6vw', size: 200 },
  { src: '/planets/2.png', top: '66vh', left: '-2vw', size: 150 },
  { src: '/planets/3.png', top: '89vh', left: '45vw', size: 180 },
  { src: '/planets/4.png', top: '83vh', left: '72vw', size: 140 },
  { src: '/planets/5.png', top: '50vh', left: '85vw', size: 200 },
  { src: '/planets/6.png', top: '5vh', left: '80vw', size: 170 },
  { src: '/planets/7.png', top: '22vh', left: '60vw', size: 40 },
  { src: '/planets/8.png', top: '24vh', left: '35vw', size: 74 },
  { src: '/planets/9.png', top: '64vh', left: '54vw', size: 82 },
  { src: '/planets/10.png', top: '65vh', left: '35vw', size: 30 },
];

const HeroSection = () => {
  // Use hardcoded comet data
  const [comets] = useState<Comet[]>(cometData);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Centered title images with higher z-index */}
  <div className="absolute inset-0 bg-gradient-radial from-black via-transparent to-transparent blur-lg"></div>
  <div className="absolute top-1/4 flex flex-col items-center z-20">
    <div className="mb-2"> {/* Margin-bottom for spacing */}
      <Image 
        src="/hero-title/welcome.png" 
        alt="Welcome Title" 
        width={600} // Increased width
        height={150} // Increased height
        priority 
      />
    </div>
    <div className="mb-4">
    <Image 
      src="/hero-title/nexis-console.png" 
      alt="Nexis Console" 
      width={600} // Increased width
      height={150} // Increased height
      priority 
    />
    </div>
    <Image 
      src="/hero-title/desc.png" 
      alt="Nexis Console" 
      width={500} // Increased width
      height={150} // Increased height
      priority 
    />
  </div>

      {/* Render comets */}
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
            width={comet.size}
            height={comet.size}
            priority
          />
        </div>
      ))}

      {/* Render planets */}
      {planetData.map((planet, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            top: planet.top,
            left: planet.left,
          }}
        >
          <Image
            src={planet.src}
            alt={`Planet ${index + 1}`}
            width={planet.size}
            height={planet.size}
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default HeroSection;
