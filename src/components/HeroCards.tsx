// components/HeroCards.tsx
import React from 'react';
import Image from 'next/image';

const HeroCards: React.FC = () => {
  return (
    <div className="overflow-x-hidden my-8">
      <div className="flex justify-center space-x-4">
        <div className="flex-shrink-0">
          <Image
            src="/cards/hero/stake.png"
            alt="Stake"
            width={300}
            height={300} 
            priority
          />
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/cards/hero/build.png"
            alt="Build"
            width={300} 
            height={300}
            priority
          />
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/cards/hero/bridge.png"
            alt="Bridge"
            width={300} // Adjust width as needed
            height={300} // Adjust height as needed
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroCards;
