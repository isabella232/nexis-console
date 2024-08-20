// components/HeroCards.tsx
import React from 'react';
import Image from 'next/image';

const DevTools: React.FC = () => {
  return (
    <div className="overflow-x-hidden my-8">
      <div className="flex justify-center space-x-4">
        <div className="relative flex-shrink-0 w-[220px] h-[220px] transition-transform duration-220 transform hover:animate-shake cursor-pointer">
            
          <Image
            src="/cards/dev-tools/mobile.png"
            alt="Mobile"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className="relative flex-shrink-0 w-[220px] h-[220px] transition-transform duration-220 transform hover:animate-shake cursor-pointer">
          <Image
            src="/cards/dev-tools/js.png"
            alt="Javascript"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className="relative flex-shrink-0 w-[220px] h-[220px] transition-transform duration-220 transform  hover:animate-shake cursor-pointer">
          <Image
            src="/cards/dev-tools/faucet.png"
            alt="Faucet"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className="relative flex-shrink-0 w-[220px] h-[220px] transition-transform duration-220 transform hover:animate-shake cursor-pointer">
          <Image
            src="/cards/dev-tools/api.png"
            alt="API"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default DevTools;
