import React from 'react';
import { Carousel } from 'antd';
import Typography from '../_shared/Typography';

export default function LandingComponent() {
  const contentStyle = {
    height: '650px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <>
      {/* Intro Banner */}
      <div className='pt-[77px]'></div>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
      </Carousel>
      {/* End Intro Banner*/}
      {/* Upcoming Event */}
      <div className='py-16 px-16 flex flex-col items-left'>
        <div className='flex flex-col items-left w-full md:w-[85%] max-w-[1080px]'>
          <div className='flex flex-col items-left text-left mb-[20px]'>
            <Typography.LargeHeading
              text='Upcoming Event'
              className='mb-3'
            />
          </div>
        </div>
      </div>
      {/* End of Upcoming Event */}
      {/* Whitepapers Carousel */}
      <div className='pt-[77px]'></div>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
      </Carousel>
      {/* Recent Blog Posts */}
      <div className='py-16 px-16 flex flex-col items-left'>
        <div className='flex flex-col items-left text-left mb-[20px]'>
          <Typography.LargeHeading
            text='Recent Blog'
            className='mb-10'
          />
          <div className='grid md:grid-cols-3 gap-[60px] items-center w-full'>
            <div className='h-[420px] p-6 rounded-lg shadow-lg justify-center items-center bg-[url(/public/assets/Images/blog-01a.jpg)] bg-cover hover:mt-0 mb-0 hover:mb-[15px] duration-300'>
              <span className="bg-white border-1 rounded w-[fit] px-3 py-1 text-sm">Tips</span>
              <Typography.MediumHeader
                text='Skills Gap Within Organization'
                className='text-white pt-[230px]'
              />
              <Typography.SmallText
                text='It is a serious challenge to acquire and retain talent with needed expertise in
                emerging technologies such as AI, machine learning and cybersecurity.'
                className='text-white py-3'
              />
            </div>
            <div className='h-[420px] p-6 rounded-lg shadow-lg justify-center items-center bg-[url(/public/assets/Images/blog-01a.jpg)] bg-cover hover:mt-0 mb-0 hover:mb-[15px] duration-300'>
              <span className="bg-white border-1 rounded w-[fit] px-3 py-1 text-sm">Tips</span>
              <Typography.MediumHeader
                text='Skills Gap Within Organization'
                className='text-white pt-[230px]'
              />
              <Typography.SmallText
                text='It is a serious challenge to acquire and retain talent with needed expertise in
                emerging technologies such as AI, machine learning and cybersecurity.'
                className='text-white py-3'
              />
            </div>
            <div className='h-[420px] p-6 rounded-lg shadow-lg justify-center items-center bg-[url(/public/assets/Images/blog-01a.jpg)] bg-cover hover:mt-0 mb-0 hover:mb-[15px] duration-300'>
              <span className="bg-white border-1 rounded w-[fit] px-3 py-1 text-sm">Tips</span>
              <Typography.MediumHeader
                text='Skills Gap Within Organization'
                className='text-white pt-[230px]'
              />
              <Typography.SmallText
                text='It is a serious challenge to acquire and retain talent with needed expertise in
                emerging technologies such as AI, machine learning and cybersecurity.'
                className='text-white py-3'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
