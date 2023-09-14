import React from 'react';
import AboutUsHeroImage from '../../assets/Images/AboutUsHeroBanner.svg';
import Typography from '../_shared/Typography';

export default function AboutUsComponent() {
  return (
    <>
      <div className='flex h-[100vh] md:h-[600px] lg:h-[100vh] justify-center items-center bg-white'>
        <div
          style={{ backgroundImage: `url(${AboutUsHeroImage})` }}
          className='flex flex-col h-full justify-center md:justify-end px-[15px] w-full md:w-[85%] max-w-[1080px] bg-[center_top_4rem] md:bg-right-top lg:bg-right py-20 bg-no-repeat bg-[length:400px_400px] md:bg-[length:570px_570px] lg:bg-[length:900px_900px]'
        >
          <div className='flex gap-1 pt-[74px] md:pt-0'>
            <Typography.Insight
              className=' lg:text-[40px]'
              text='About <br/>Sagara Research'
              bold
            />
            <Typography.Custom
              className='text-[58px] md:text-[64px] lg:text-[66px] text-[#F24822]'
              text='?'
              bold
            />
          </div>
          <Typography.MediumText
            className='md:w-[75%] lg:w-[50%]'
            text='At Sagara Research, we are your gateway to a dynamic world of insights and expertise in the ever-evolving technology industry. Our mission is to curate and provide access to a comprehensive collection of whitepapers that explore the latest trends, innovations, and strategies shaping the tech landscape.'
          />
        </div>
      </div>
    </>
  );
}
