import React from 'react';
import Typography from '../_shared/Typography';

import AboutUsHeroImage from '../../assets/Images/AboutUsHeroBanner.svg';
import CommitmentImage from '../../assets/Images/CommitmentPic.svg';
import ExpertiseImage from '../../assets/Images/Expertise.svg';
import RelevanceImage from '../../assets/Images/Relevance.svg';
import QualityImage from '../../assets/Images/Quality.svg';

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
      <div className='grid md:grid-cols-2 gap-4 bg-white'>
        <div className='bg-[#F2EADA] py-8 md:pr-8 rounded-r-md flex justify-end'>
          <div
            style={{ backgroundImage: `url(${CommitmentImage})` }}
            className='w-full md:w-[85%] px-[15px] max-w-[532px] aspect-[3/1.8] bg-center bg-cover'
          />
        </div>
        <div className='w-full flex flex-col justify-center gap-2 md:w-[85%] px-[15px] max-w-[532px] aspect-[3/1.8]'>
          <Typography.Insight
            className=' lg:text-[40px]'
            text='Our Commitment'
            bold
          />
          <Typography.MediumText
            className=''
            text='We are passionate about fostering knowledge sharing and driving innovation in the tech sector. Through meticulous research and expert analysis, we deliver thought-provoking whitepapers that empower individuals and organizations to stay at the forefront of technological advancements.'
          />
        </div>
      </div>
      <div className='flex justify-center items-center pb-16 md:py-16 bg-white'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-16 px-[15px] w-full md:w-[85%] max-w-[1080px]'>
          <div className='flex lg:w-[335px] lg:min-w-[335px] gap-1'>
            <Typography.Insight
              className=' lg:text-[40px]'
              text='Why Choose <br/>Sagara Research'
              bold
            />
            <Typography.Custom
              className='text-[58px] md:text-[64px] lg:text-[66px] text-[#034AA6]'
              text='?'
              bold
            />
          </div>
          <div className='flex flex-grow flex-col gap-4'>
            <div className='flex md:items-center gap-4 md:gap-6'>
              <div
                style={{ backgroundImage: `url(${ExpertiseImage})` }}
                className='w-[68px] min-w-[68px] max-w-[68px] h-[68px] min-h-[68px] max-h-[68px] md:w-[120px] md:min-w-[120px] md:max-w-[120px] md:h-[120px] md:min-h-[120px] md:max-h-[120px] bg-cover'
              />
              <div>
                <Typography.LargeHeading
                  className=' lg:text-[32px]'
                  text='Expertise'
                  bold
                />
                <Typography.MediumText text='Our team of seasoned researchers and analysts is dedicated to delivering in-depth, well-researched whitepapers that offer actionable insights.' />
              </div>
            </div>
            <div className='flex items-center gap-6'>
              <div
                style={{ backgroundImage: `url(${RelevanceImage})` }}
                className='w-[68px] min-w-[68px] max-w-[68px] h-[68px] min-h-[68px] max-h-[68px] md:w-[120px] md:min-w-[120px] md:max-w-[120px] md:h-[120px] md:min-h-[120px] md:max-h-[120px] bg-cover'
              />
              <div>
                <Typography.LargeHeading
                  className=' lg:text-[32px]'
                  text='Expertise'
                  bold
                />
                <Typography.MediumText text='Our team of seasoned researchers and analysts is dedicated to delivering in-depth, well-researched whitepapers that offer actionable insights.' />
              </div>
            </div>
            <div className='flex items-center gap-6'>
              <div
                style={{ backgroundImage: `url(${QualityImage})` }}
                className='w-[68px] min-w-[68px] max-w-[68px] h-[68px] min-h-[68px] max-h-[68px] md:w-[120px] md:min-w-[120px] md:max-w-[120px] md:h-[120px] md:min-h-[120px] md:max-h-[120px] bg-cover'
              />
              <div>
                <Typography.LargeHeading
                  className=' lg:text-[32px]'
                  text='Expertise'
                  bold
                />
                <Typography.MediumText text='Our team of seasoned researchers and analysts is dedicated to delivering in-depth, well-researched whitepapers that offer actionable insights.' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
