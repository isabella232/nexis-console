import React from 'react';

const BuildPage = () => {
  return (
    <> 
      <img src="/bg/tl.png" className="absolute top-0 left-0 z-0  w-[80vw] h-[90vh]" alt="Top Left" />
    <div className="relative min-h-screen">
      <img src="/bg/br.png" className="absolute bottom-0 right-0 z-0 w-[80vw] h-[90vh]" alt="Bottom Right" />
      <div className="relative z-10 flex items-center justify-center min-h-screen">
      <img src="/bg/stakeNzt.png" className='absolute top-[10vh]' alt="" />
      <div className='stake-container absolute top-[5vh] flex p-4'>
        <div>Stake</div>
      </div>
      </div>
    </div>
    </>
  );
};

export default BuildPage;
