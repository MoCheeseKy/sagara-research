import React, { useRef } from 'react';
import { Carousel } from 'antd';
import Typography from '../_shared/Typography';
import CustomButton from '../_shared/CustomButton';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

export default function LandingComponent() {
  const carouselRef = useRef(null)

  const contentStyle = {
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  const dummyUpcomingEventCard = [
    {
      title:
        'Enhancing User Privacy in Online Social Networks: Investigating the Impact of Data Breaches and Privacy Settings',
      topic: 'Topic: Tech Program Event',
      speaker: 'Speaker: Muhammad Patel',
      date: 'Date: 20 Februari 2005',
      desc: 'The comprehensive and insightful guidebook designed specifically with and for C-level executives who are leading their organizations through the process of digital transformation. Adapting business processes, implementing new technologies like artificial intelligence (AI) or cloud computing, and managing the cultural shift within the organization require strategic planning and effective leadership.',
    },
    {
      title:
        'Enhancing User Privacy in Online Social Networks: Investigating the Impact of Data Breaches and Privacy Settings',
      topic: 'Topic: Tech Program Event',
      speaker: 'Speaker: Muhammad Patel',
      date: 'Date: 20 Februari 2005',
      desc: 'The comprehensive and insightful guidebook designed specifically with and for C-level executives who are leading their organizations through the process of digital transformation. Adapting business processes, implementing new technologies like artificial intelligence (AI) or cloud computing, and managing the cultural shift within the organization require strategic planning and effective leadership.',
    },
  ];

  const RecentBlogCard = ({ title, description }) => {
    return (
      <>
        <div className='pt-[15px] hover:pt-0 duration-300'>
          <div className='h-[420px] p-6 rounded-lg shadow-lg flex flex-col justify-between bg-[url(/public/assets/Images/blog-01a.jpg)] bg-cover'>
            <div className='bg-white border-1 rounded w-fit px-3 py-1 text-sm'>
              Tips
            </div>
            <div>
              <Typography.MediumHeading text={title} className='text-white' />
              <Typography.SmallText
                text={description}
                className='text-white py-3'
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  const UpcomingEventCard = ({ title, topic, speaker, date, desc }) => {
    return (
      <div>
        <div className='flex flex-col md:flex-row shadow rounded mt-[15px] hover:mt-0 mb-0 hover:mb-[15px] duration-300 overflow-hidden bg-white'>
          <div className='min-w-[240px] aspect-[3/3.5] h-fit bg-[url(/public/assets/Images/1.png)] bg-cover'></div>
          <div className='p-[30px] flex flex-col'>
            <div className='flex flex-col gap-4'>
              <div>
                <Typography.LargeText text={title} bold />
                <Typography.LargeText text={topic} />
                <Typography.LargeText text={speaker} />
                <Typography.LargeText text={date} />
                <Typography.LargeText text={desc} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const NextArrow = ({className, style, onClick}) => {
    return (
      <CustomButton
        className={`${className} carousel-button`}
        style={{
          ...style,
          color: 'white',
          fontSize: '15px',
          lineHeight: '1.5715',
          content: '',
          padding: '10px 20px',
          backgroundColor: '#a51535',
          width: '48px',
          height: '48px',
          position: 'absolute',
          right: '-10%'
        }}
        onClick={onClick}
        icon={<FiChevronRight />}
      />
    )
  }

  const PrevArrow = ({className, style, onClick}) => {
    return (
      <CustomButton
        className={`${className} carousel-button`}
        style={{
          ...style,
          color: 'white',
          fontSize: '15px',
          lineHeight: '1.5715',
          content: '',
          padding: '10px 20px',
          // backgroundColor: '#a51535',
          width: '48px',
          height: '48px',
          position: 'absolute',
          left: '-10%'
        }}
        onClick={onClick}
        icon={<FiChevronLeft />}
      />
    )
  }

  const settings = {
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }

  return (
    <>
      {/* Intro Banner */}
      <Carousel autoplay>
        <div>
          <div className='flex h-[100vh] flex-col pt-[77px]'>
            <div className='flex-grow bg-[#ddd]'>Content 1 here....</div>
          </div>
        </div>
        <div>
          <div className='flex h-[100vh] flex-col pt-[77px]'>
            <div className='flex-grow bg-[#ddd]'>Content 2 here....</div>
          </div>
        </div>
        <div>
          <div className='flex h-[100vh] flex-col pt-[77px]'>
            <div className='flex-grow bg-[#ddd]'>Content 3 here....</div>
          </div>
        </div>
      </Carousel>
      {/* End Intro Banner */}
      {/* Upcoming Event */}
      <div className='pt-16 px-16 flex flex-col items-left'>
        <div className='flex flex-col items-left md:w-[85%] max-w-[1080px]'>
          <div className='flex flex-col items-left text-left mb-[20px]'>
            <Typography.LargeHeading text='Upcoming Event' className='mb-10' />
            <div className='grid gap-[15px]'>
              {dummyUpcomingEventCard.map((dummy, indexDummy) => (
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
      {/* <div className='pt-[77px]'></div> */}
      <div className='px-[10%] md:px-[15%] lg:px-[20%]'>
        <Typography.MediumHeading text='What They Said' className='my-[30px] text-center' />
        <Carousel arrows ref={carouselRef} autoplay draggable swipeToSlide {...settings}>
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
      </div>
      {/* Recent Blog Posts */}
      <div className='py-16 px-16 flex flex-col items-left'>
        <div className='flex flex-col items-left text-left mb-[20px]'>
          <Typography.LargeHeading text='Recent Blog' className='mb-10' />
          <div className='grid md:grid-cols-3 gap-[60px] items-center w-full'>
            <RecentBlogCard
              title='Skills Gap Within Organization'
              description='It is a serious challenge to acquire and retain talent with needed expertise in emerging technologies such as AI, machine learning and cybersecurity.'
            />
            <RecentBlogCard
              title='Skills Gap Within Organization'
              description='It is a serious challenge to acquire and retain talent with needed expertise in emerging technologies such as AI, machine learning and cybersecurity.'
            />
            <RecentBlogCard
              title='Skills Gap Within Organization'
              description='It is a serious challenge to acquire and retain talent with needed expertise in emerging technologies such as AI, machine learning and cybersecurity.'
            />
          </div>
        </div>
      </div>
    </>
  );
}
