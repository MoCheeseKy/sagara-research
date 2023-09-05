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
        <div className='flex flex-col items-left w-full md:w-[85%] max-w-[1080px]'>
          <div className='flex flex-col items-left text-left mb-[20px]'>
            <Typography.LargeHeading
              text='Recent Blog'
              className='mb-10'
            />
            <div className='grid grid-cols-3 gap-[20px]'>
              <div className='h-[420px]  p-0 rounded-lg justify-center items-center bg-[url(/public/assets/Images/blog-01a.jpg)] bg-cover'>
                <span className="">Tips</span>
                <Typography.MediumText
                  text='Skills Gap Within Organization'
                  className='px-3 mb-1 text-white'
                />
                <Typography.SmallText
                  text='It is a serious challenge to acquire and retain talent with needed expertise in
                emerging technologies such as AI, machine learning and cybersecurity.'
                  className='px-3 text-white'
                />
              </div>
              <div className='h-[420px]  p-0 rounded-lg justify-center items-center bg-[url(/public/assets/Images/blog-01a.jpg)] bg-cover'>
                <span className="">Tips</span>
                <Typography.MediumText
                  text='Skills Gap Within Organization'
                  className='px-3 mb-1 text-white'
                />
                <Typography.SmallText
                  text='It is a serious challenge to acquire and retain talent with needed expertise in
                emerging technologies such as AI, machine learning and cybersecurity.'
                  className='px-3 text-white'
                />
              </div>
              <div className='h-[420px]  p-0 rounded-lg justify-center items-center bg-[url(/public/assets/Images/blog-01a.jpg)] bg-cover'>
                <span className="">Tips</span>
                <Typography.MediumText
                  text='Skills Gap Within Organization'
                  className='px-3 mb-1 text-white'
                />
                <Typography.SmallText
                  text='It is a serious challenge to acquire and retain talent with needed expertise in
                emerging technologies such as AI, machine learning and cybersecurity.'
                  className='px-3 text-white'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
