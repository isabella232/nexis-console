// components/HeroCards.tsx
import React from 'react';
import Image from 'next/image';

const HeroCards: React.FC = () => {
  return (
    <div className="overflow-x-hidden my-8">
      <div className="flex justify-center space-x-4">
      <div className="relative flex-shrink-0 w-[300px] h-[300px] transition-transform duration-300 transform hover:scale-110 hover:animate-shake">
          <Image
            src="/cards/hero/build.png"
            alt="Build"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className="relative flex-shrink-0 w-[300px] h-[300px] transition-transform duration-300 transform hover:scale-110 hover:animate-shake">
          <Image
            src="/cards/hero/stake.png"
            alt="Stake"
            layout="fill" // Makes the image fill the container
            objectFit="contain" // Ensures aspect ratio is maintained
            priority
          />
        </div>
      
        <div className="relative flex-shrink-0 w-[300px] h-[300px] transition-transform duration-300 transform hover:scale-110 hover:animate-shake">
          <Image
            src="/cards/hero/bridge.png"
            alt="Bridge"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroCards;
