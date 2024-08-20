// components/Footer.tsx
import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full h-96">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-[#1e1e1e] blur-3xl z-0" />
      <div className="absolute inset-0 flex items-end justify-center p-4 z-10">
        <img
          src="/footer/nexis.png"
          alt="Nexis"
          style={{width: '100%', padding: '2rem'}}
        />
      </div>
    </footer>
  );
};

export default Footer;
