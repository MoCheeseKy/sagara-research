import React from 'react';
import { Carousel } from 'antd';
import Typography from '../_shared/Typography';
import CustomButton from '../_shared/CustomButton';

export default function LandingComponent() {
  const contentStyle = {
    height: '650px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  const RecentBlogCard = ({ title, description }) => {
    return (
      <>
        <div className='pt-[15px] hover:pt-0 duration-300'>
          <div className='h-[420px] p-6 rounded-lg shadow-lg flex flex-col justify-between bg-[url(/public/assets/Images/blog-01a.jpg)] bg-cover'>
            <div className="bg-white border-1 rounded w-fit px-3 py-1 text-sm">Tips</div>
            <div>
              <Typography.MediumHeading
                text={title}
                className='text-white'
              />
              <Typography.SmallText
                text={description}
                className='text-white py-3'
              />
            </div>
          </div>
        </div>
      </>
    )
  }
  const dummyWhitepapers = [
    {
      title:
        'Enhancing User Privacy in Online Social Networks: Investigating the Impact of Data Breaches and Privacy Settings',
      date: '20 Februari 2005',
      desc: 'Protecting user privacy in online social networks is crucial in the digital age, given the potential risks associated with data breaches and data misuse.',
      linkTo: '/whitepapers/explore-whitepapers',
    },
    {
      title:
        'Enhancing User Privacy in Online Social Networks: Investigating the Impact of Data Breaches and Privacy Settings',
      date: '20 Februari 2005',
      desc: 'Protecting user privacy in online social networks is crucial in the digital age, given the potential risks associated with data breaches and data misuse.',
      linkTo: '/whitepapers/explore-whitepapers',
    },
  ];
  const UpcomingEventCard = ({ title, topic, speaker, date, desc, linkTo }) => {
    return (
      <div>
        <div className='flex flex-col md:flex-row shadow rounded mt-[15px] hover:mt-0 mb-0 hover:mb-[15px] duration-300 overflow-hidden bg-white'>
          <div className='min-w-[240px] aspect-[3/3.5] h-fit bg-[url(/public/assets/Images/1.png)] bg-cover'></div>
          <div className='p-[30px] flex flex-col'>
            <div className='flex flex-col gap-4'>
              <div>
                <Typography.LargeText text={title} bold />
                <div className='flex gap-2 items-center'>
                  <Typography.MediumText
                    text={date}
                    className='text-[#808080]'
                  />
                </div>
              </div>
              <Typography.MediumText text={desc} className='text-[#808080]' />
              <CustomButton text='Learn More' className='w-fit' />
            </div>
          </div>
        </div>
      </div>
    )
  }
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
      {/* End Intro Banner */}
      {/* Upcoming Event */}
      <div className='py-16 px-16 flex flex-col items-left'>
        <div className='flex flex-col items-left md:w-[85%] max-w-[1080px]'>
          <div className='flex flex-col items-left text-left mb-[20px]'>
            <Typography.LargeHeading
              text='Upcoming Event'
              className='mb-10'
            />
            <div className='grid gap-[15px]'>
              {dummyWhitepapers.map((dummy, indexDummy) => (
                <React.Fragment key={indexDummy}>
                  <UpcomingEventCard
                    title={dummy.title}
                    topic={dummy.topic}
                    speaker={dummy.speaker}
                    desc={dummy.desc}
                  />
                </React.Fragment>
              ))}
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
      </Carousel>
      {/* Recent Blog Posts */}
      <div className='py-16 px-16 flex flex-col items-left'>
        <div className='flex flex-col items-left text-left mb-[20px]'>
          <Typography.LargeHeading
            text='Recent Blog'
            className='mb-10'
          />
          <div className='grid md:grid-cols-3 gap-[60px] items-center w-full'>
            <RecentBlogCard title="Skills Gap Within Organization" description="It is a serious challenge to acquire and retain talent with needed expertise in emerging technologies such as AI, machine learning and cybersecurity." />
            <RecentBlogCard title="Skills Gap Within Organization" description="It is a serious challenge to acquire and retain talent with needed expertise in emerging technologies such as AI, machine learning and cybersecurity." />
            <RecentBlogCard title="Skills Gap Within Organization" description="It is a serious challenge to acquire and retain talent with needed expertise in emerging technologies such as AI, machine learning and cybersecurity." />
          </div>
        </div>
      </div>
    </>
  );
}
