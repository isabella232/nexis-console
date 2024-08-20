// components/HeroCards.tsx
import React from 'react';
import Image from 'next/image';

const HeroCards: React.FC = () => {
  return (
    <div className="overflow-x-hidden my-8 ">
      <div className="flex justify-center space-x-4">
        <div className="relative flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:animate-shake">
          <Image
            src="/cards/hero/stake.png"
            alt="Stake"
            width={300}
            height={300}
            priority
          />
        </div>
        <div className="relative flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:animate-shake">
          <Image
            src="/cards/hero/build.png"
            alt="Build"
            width={300}
            height={300}
            priority
          />
        </div>
        <div className="relative flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:animate-shake">
          <Image
            src="/cards/hero/bridge.png"
            alt="Bridge"
            width={300}
            height={300}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroCards;
