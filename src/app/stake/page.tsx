import React from 'react';

const StakePage = () => {
  return (
    <>
      <img src="/bg/tl.png" className="absolute top-0 left-0 z-0  w-[80vw] h-[90vh]" alt="Top Left" />
      <div className="relative min-h-screen">
        <img src="/bg/br.png" className="absolute bottom-0 right-0 z-0 w-[80vw] h-[90vh]" alt="Bottom Right" />
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <img src="/bg/stakeNzt.png" className='absolute top-[10vh]' alt="" />
          <div className='stake-container absolute top-[5vh] p-8'>
            <div className='flex justify-center'>
              <img src="/stake-page/stake-title.png" alt="" className='h-8 my-4' />
            </div>
            <div className='bg-[#282828] flex justify-center flex-col p-4 rounded-3xl px-8 py-2 my-4'>
              <div className='flex mt-2'>
                <div className='mr-2'>
                  Available
                </div>
                <div className='text-white opacity-35'>
                  0 NZT
                </div>
              </div>
              <div className='flex mt-[-8px]'>
                <div>
                  <img src="/NZT.png" alt="" className='h-24 py-4' />
                </div>

                <div className='flex flex-col justify-center p-2 ml-2 flex-grow'>
                  <div className='text-3xl font-semibold'>NZT</div>
                  <div className='font-medium'>Nexis Native</div>
                </div>

                <div className='flex justify-center flex-col text-right'>
                  <input
                    type="text"
                    className="text-3xl font-semibold bg-transparent border-none outline-none text-right w-24"
                    placeholder="0"
                  />
                  <div className='text-lg opacity-35'>~ 0.00 $</div>
                </div>
              </div>
            </div>

            <div className='bg-[#282828] flex justify-center flex-col p-4 rounded-3xl px-8 py-2 my-6'>
              <div className='flex mt-2'>
                <div className='mr-2'>
                  Estimated Earnings
                </div>
              </div>
              <div className='bg-[#191919] grid grid-cols-2 gap-4 p-4 rounded-3xl px-8 py-2 my-4 w-[100%] mt-[8px]'>
                <div className='py-4'>
                  <div className='opacity-25'>
                    0 $ / day
                  </div>
                  <div className='opacity-25'>
                    0 NZTs/day
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-2'>
                <div className='py-4'>
                  <div className='opacity-90'>
                    MRR
                  </div>
                  <div className='opacity-25'>
                   12 NZTs
                  </div>
                </div>
                <div className='py-4'>
                <div className='opacity-90'>
                    APY
                  </div>
                  <div className='opacity-25'>
                    10.2%
                  </div>
                </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StakePage;
