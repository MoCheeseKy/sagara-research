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
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      {/* End Intro Banner*/}
      {/* Upcoming Event */}
      <div className='py-16 px-16 flex flex-col items-left'>
        <div className='flex flex-col items-left px-[15px] w-full md:w-[85%] max-w-[1080px]'>
          <div className='flex flex-col items-left text-left mb-[60px]'>
            <Typography.LargeHeading
              text='Upcoming Event'
              className='mb-[16px]'
            />
          </div>
          <div className="card flex items-left border-solid border-current rounded-sm shadow" >
            <img src="public/assets/Images/adi.png" alt="" className="card-image max-w-sm h-fit flex-1" />
            <div className="card-content flex-2 p-20px">
              <Typography.MediumHeading
                text='Card Title'
                className='mb-16px'
              />
              <Typography.MediumText
                text='This is some content inside the card.'
                className='mb-16px'
              />
              <button className='bg-black color'>Learn More</button>
            </div>
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
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </>
  );
}
