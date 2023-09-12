import React, { useEffect, useRef } from 'react';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { Whitepapers } from '../../service';
import Typography from '../_shared/Typography';
import { Carousel, notification } from 'antd';
import WhitepaperCard from '../_shared/WhitepaperCard';

export default function LandingComponent() {
  const carouselRef = useRef(null);
  const dispatch = useDispatch();
  const [api, context] = notification.useNotification();

  const { recentWhitepaperList, popularWhitepaperList } = useSelector(
    (state) => state.whitepaper
  );

  useEffect(() => {
    dispatch(Whitepapers.GetRecentWhitepapersList())
      .unwrap()
      .then(() => {
        api.success({ message: 'Success get recent whitepaper' });
      })
      .catch(() => {
        api.error({ message: 'Failed get recent whitepaper' });
      });
    dispatch(Whitepapers.GetPopularWhitepapersList())
      .unwrap()
      .then(() => {
        api.success({ message: 'Success get popular whitepaper' });
      })
      .catch(() => {
        api.error({ message: 'Failed get popular whitepaper' });
      });
  }, [dispatch, api]);

  return (
    <>
      {/* Intro Banner */}
      {context}
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
      <div className='flex justify-center w-full'>
        <div className='py-16 flex flex-col  px-[15px] w-full md:w-[85%] max-w-[1080px]'>
          <Typography.LargeHeading
            text='Recent Whitepapers'
            className='mb-[30px]'
          />
          <div className='grid gap-[15px]'>
            {recentWhitepaperList?.results?.map(
              (whitepaper, indexWhitepaper) => (
                <React.Fragment key={indexWhitepaper}>
                  <WhitepaperCard
                    image={whitepaper?.image}
                    title={whitepaper?.title ? whitepaper?.title : '-'}
                    date={
                      whitepaper?.published_at
                        ? dayjs(whitepaper?.published_at).format('DD-MM-YYYY')
                        : '-'
                    }
                    speaker={whitepaper?.speaker}
                    topic={whitepaper?.topic}
                    desc={whitepaper?.overview ? whitepaper?.overview : '-'}
                    slug={whitepaper?.slug}
                  />
                </React.Fragment>
              )
            )}
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
      {/* <div className='pt-[77px]'></div>
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
            image={TestimonialImage}
            name='Rifky Muhammad Prayudhi'
            position='CEO Google 2025'
            description='I am truly impressed with the exceptional level of service and expertise they provided throughout our collaboration. From the very beginning, their team demonstrated a deep understanding of our industry and specific research needs, which immediately instilled confidence in their abilitie.'
          />
          <TestimonialCard
            image={TestimonialImage}
            name='Rifky Muhammad Prayudhi'
            position='CEO Google 2025'
            description='I am truly impressed with the exceptional level of service and expertise they provided throughout our collaboration. From the very beginning, their team demonstrated a deep understanding of our industry and specific research needs, which immediately instilled confidence in their abilitie.'
          />
        </Carousel>
      </div> */}
      {/* End of what they said */}
      {/* Recent Blog Posts */}
      <div className='flex justify-center w-full'>
        <div className='py-16 flex flex-col  px-[15px] w-full md:w-[85%] max-w-[1080px]'>
          <Typography.LargeHeading
            text='Popular Whitepapers'
            className='mb-[30px]'
          />
          <div className='grid gap-[15px]'>
            {popularWhitepaperList?.results?.map(
              (whitepaper, indexWhitepaper) => (
                <React.Fragment key={indexWhitepaper}>
                  <WhitepaperCard
                    image={whitepaper?.image}
                    title={whitepaper?.title ? whitepaper?.title : '-'}
                    date={
                      whitepaper?.published_at
                        ? dayjs(whitepaper?.published_at).format('DD-MM-YYYY')
                        : '-'
                    }
                    speaker={whitepaper?.speaker}
                    topic={whitepaper?.topic}
                    desc={whitepaper?.overview ? whitepaper?.overview : '-'}
                    slug={whitepaper?.slug}
                  />
                </React.Fragment>
              )
            )}
          </div>
        </div>
      </div>
      {/* End of Recent Blog Posts */}
      {/* Recognition */}
      <div className='App'>
        <div marquee container>
          <div
            marquee
            content='bg-[url(/public/assets/Images/kalbe logo.png)]'
          />
        </div>
      </div>
      {/* End of Recognition */}
    </>
  );
}
