import React from 'react';

const BuildPage = () => {
  return (
    <> 
      <img src="/bg/tl.png" className="absolute top-0 left-0 z-0  w-[80vw] h-[90vh]" alt="Top Left" />
    <div className="relative min-h-screen">
      <img src="/bg/br.png" className="absolute bottom-0 right-0 z-0 w-[80vw] h-[90vh]" alt="Bottom Right" />
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold text-center">Build Page</h1>
        <p className="text-lg text-center mt-4">This is the build page of the project.</p>
      </div>
    </div>
    </>
  );
};

export default BuildPage;
