// components/Footer.tsx
import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full h-96">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-[#1e1e1e] blur-3xl z-0" />
      
      {/* Navigation links */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 p-6 flex  space-x-8 z-10 text-white h-96 mr-12">
        <div className="flex flex-col space-y-2">
          <div className="font-bold text-lg">Community</div>
          <div className="flex flex-col">
            <div>X</div>
            <div>Telegram</div>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="font-bold text-lg">Ecosystem</div>
          <div>Nexis Docs</div>
          <div>NexWallet</div>
          <div>NexSwap</div>
        </div>
      </div>
      {/* Footer image */}
      <div className="absolute inset-0 flex items-end justify-center p-4 z-10 mt-10">
        <img
          src="/footer/nexis.png"
          alt="Nexis"
          style={{ width: '100%', padding: '2rem' }}
        />
      </div>
    </footer>
  );
};

export default Footer;
