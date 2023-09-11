import React, { useEffect, useRef } from 'react';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { Event } from '../../service';

import Typography from '../_shared/Typography';
import CustomButton from '../_shared/CustomButton';

import { Carousel } from 'antd';

import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { IoMdQuote } from 'react-icons/io'

export default function LandingComponent() {
  const carouselRef = useRef(null);
  const dispatch = useDispatch()

  const { upcomingEvent } = useSelector((state) => state.event)

  useEffect(() => {
    dispatch(Event.GetUpcomingEvent())
  }, [])

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
          <div className='min-w-[240px] aspect-[3/3.5] h-max bg-[url(/public/assets/Images/1.png)] bg-cover'></div>
          <div className='p-[30px] flex flex-col'>
            <div className='flex flex-col gap-4'>
              <div>
                <Typography.LargeText className='pb-2' text={title} bold />
                <Typography.MediumText className='pb-1' text={`Topic: ${topic}`} />
                <Typography.MediumText className='pb-1' text={`Speaker: ${speaker}`} />
                <Typography.MediumText className='pb-2' text={`Date: ${date}`} />
                <Typography.MediumText text={`${desc}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const NextArrow = ({ className, style, onClick }) => {
    return (
      <CustomButton
        className={`${className} carousel-button`}
        style={{
          color: 'white',
          fontSize: '15px',
          lineHeight: '1.5715',
          content: '',
          padding: '10px 20px',
          backgroundColor: '#a51535',
          width: '48px',
          height: '48px',
          position: 'absolute',
          right: '-10%',
          ...style,
        }}
        onClick={onClick}
        icon={<FiChevronRight />}
      />
    );
  };

  const PrevArrow = ({ className, style, onClick }) => {
    return (
      <CustomButton
        className={`${className} carousel-button`}
        style={{
          color: 'white',
          fontSize: '15px',
          lineHeight: '1.5715',
          content: '',
          padding: '10px 20px',
          // backgroundColor: '#a51535',
          width: '48px',
          height: '48px',
          position: 'absolute',
          left: '-10%',
          ...style,
        }}
        onClick={onClick}
        icon={<FiChevronLeft />}
      />
    );
  };

  const TestimonialCard = ({ image, name, position, description }) => {
    return (
      <>
        <div className='flex flex-col h-[444px] md:h-[364px]'>
          <IoMdQuote size={80} className='text-[#a51535]' />
          <div className='flex-grow bg-white rounded'>
            <div className='flex flex-col items-center h-full px-6 lgpx-12 mt-[-35px]'>
              <img
                src={image}
                alt='profile'
                className='w-[70px] h-[70px] rounded-full mb-6 lg:mb-[35px]'
              />
              <Typography.LargeText text={name} bold />
              <Typography.MediumText
                className='mt-1 bg-primary text-white w-fit rounded py-1 px-4 mb-[15px]'
                text={position}
              />
              <Typography.MediumText
                className='text-center'
                text={description}
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  const settings = {
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <>
      {/* Intro Banner */}
      <Carousel autoplay>
        <div>
          <div className='flex h-[100vh] flex-col'>
            <div className='flex-grow bg-[#ddd]'>Content 1 here....</div>
          </div>
        </div>
        <div>
          <div className='flex h-[100vh] flex-col'>
            <div className='flex-grow bg-[#ddd]'>Content 2 here....</div>
          </div>
        </div>
        <div>
          <div className='flex h-[100vh] flex-col'>
            <div className='flex-grow bg-[#ddd]'>Content 3 here....</div>
          </div>
        </div>
      </Carousel>
      {/* End Intro Banner */}
      {/* Upcoming Event */}
      <div className='py-16 px-16 flex flex-col items-left'>
        <div className='flex flex-col items-left text-left mb-[20px]'>
          <Typography.LargeHeading
            text='Upcoming Event'
            className='mb-10'
          />
          <div className='grid gap-[30px]'>
            {upcomingEvent?.results?.map((event) => (
              <React.Fragment key={event.id}>
                <UpcomingEventCard
                  title={event.name}
                  topic={event.topic || '-'}
                  speaker={event.speaker}
                  date={dayjs(event.date).format('YY MMMM YYYY')}
                  desc={event.description}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      {/* End of Upcoming Event */}
      {/* Whitepapers Carousel */}
      <Carousel autoplay>
        <div>
          <div className='flex h-[90vh] flex-col'>
            <div className='flex-grow bg-[#ddd]'>Content 1 here....</div>
          </div>
        </div>
        <div>
          <div className='flex h-[90vh] flex-col'>
            <div className='flex-grow bg-[#ddd]'>Content 2 here....</div>
          </div>
        </div>
        <div>
          <div className='flex h-[90vh] flex-col'>
            <div className='flex-grow bg-[#ddd]'>Content 3 here....</div>
          </div>
        </div>
      </Carousel>
      {/* End of Whitepapers Carousel */}
      {/* What they said */}
      <div className='pt-[77px]'></div>
      <div className='px-[10%] md:px-[15%] lg:px-[20%]'>
        <Typography.MediumHeading
          text='What They Said'
          className='my-[30px] text-center'
        />
        <Carousel
          arrows
          ref={carouselRef}
          autoplay
          draggable
          swipeToSlide
          {...settings}
        >
          <TestimonialCard
            image='/assets/Images/user-avatar-small-02.jpg'
            name='Rifky Muhammad Prayudhi'
            position='CEO Google 2025'
            description='I am truly impressed with the exceptional level of service and expertise they provided throughout our collaboration. From the very beginning, their team demonstrated a deep understanding of our industry and specific research needs, which immediately instilled confidence in their abilitie.'
          />
          <TestimonialCard
            image='/assets/Images/user-avatar-small-02.jpg'
            name='Rifky Muhammad Prayudhi'
            position='CEO Google 2025'
            description='I am truly impressed with the exceptional level of service and expertise they provided throughout our collaboration. From the very beginning, their team demonstrated a deep understanding of our industry and specific research needs, which immediately instilled confidence in their abilitie.'
          />
        </Carousel>
      </div>
      {/* End of what they said */}
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
      {/* End of Recent Blog Posts */}
      {/* Recognition */}
      <div className="App">
        <div marquee container>
          <div marquee content='bg-[url(/public/assets/Images/kalbe logo.png)]' />
        </div>
      </div>
      {/* End of Recognition */}
    </>
  );
}
