import React, { useEffect } from 'react';
import Typography from '../../_shared/Typography';
import CustomButton from '../../_shared/CustomButton';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { LiaDownloadSolid } from 'react-icons/lia';
import { BiUser } from 'react-icons/bi';
import { GiChampions } from 'react-icons/gi';
import { PiShareDuotone } from 'react-icons/pi';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { Whitepapers } from '../../../service';

export default function ExploreWhitepapersComponent() {
  const dispatch = useDispatch();
  const { whitepapersList } = useSelector((state) => state.whitepaper);

  useEffect(() => {
    dispatch(Whitepapers.GetWhitepapersList());
  }, []);

  const Card = ({ image, title, date, desc, slug }) => {
    return (
      <>
        <div className='flex flex-col md:flex-row shadow rounded mt-[15px] hover:mt-0 mb-0 hover:mb-[15px] duration-300 overflow-hidden bg-white'>
          <img
            src={image}
            alt='whitepaper_image'
            className='md:min-w-[240px] md:max-w-[240px] aspect-[3/4] h-fit bg-cover'
          />
          <div className='p-[30px] flex flex-col'>
            <div className='flex flex-col gap-4'>
              <div>
                <Typography.LargeText text={title} bold />
                <div className='flex gap-2 items-center'>
                  <AiOutlineClockCircle className='text-[#808080]' />
                  <Typography.MediumText
                    text={date}
                    className='text-[#808080]'
                  />
                </div>
              </div>
              <Typography.MediumText text={desc} className='text-[#808080]' />
              <Link to={`/whitepapers/detail/${slug}`}>
                <CustomButton text='Learn More' className='w-fit' />
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className='flex flex-col h-[100vh]'>
        <div className='h-[77px]' />
        <div
          className={`flex flex-grow bg-[url('https://img.freepik.com/free-photo/3d-render-low-poly-plexus-design-network-communications_1048-14542.jpg?w=740&t=st=1691053736~exp=1691054336~hmac=3e831c9125aba14bfad1a71615a1b0585cb219773a81a811d88d687adf6160bd')] bg-cover`}
        >
          <div className='flex w-full h-full justify-center items-center bg-gradient-to-r from-white to-transparent'>
            <div className='flex gap-[30px] px-[15px] items-center w-full md:w-[85%] max-w-[1080px]'>
              <div
                className={`w-[320px] aspect-[3/4.5] rounded bg-[url(/public/assets/Images/MonochromeCircuit.png)] bg-cover`}
              ></div>
              <div className='flex-grow'>
                <Typography.LargeHeading
                  text='Unravel the C-Level insights with, <br/>
                  Sagara Research!'
                  bold
                />
                <Typography.MediumText
                  text='Discover new ideas and innovation from the expert in Tech Industry'
                  className='mb-5'
                />
                <CustomButton text='Learn More' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center w-full'>
        <div className='py-16 flex flex-col  px-[15px] w-full md:w-[85%] max-w-[1080px]'>
          <Typography.LargeHeading
            text='Explore Whitepapers'
            className='mb-[30px]'
          />
          <div className='grid gap-[15px]'>
            {whitepapersList.map((whitepaper, indexWhitepaper) => (
              <React.Fragment key={indexWhitepaper}>
                <Card
                  image={whitepaper?.image}
                  title={whitepaper?.title}
                  date={whitepaper?.published_at}
                  desc={whitepaper?.description}
                  slug={whitepaper?.slug}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className='flex justify-center w-full bg-white'>
        <div className='grid grid-cols-2 lg:grid-cols-4 py-[30px] px-[15px] w-full md:w-[85%] max-w-[1080px] gap-y-16 '>
          <div className='flex flex-col items-center border-r-2'>
            <LiaDownloadSolid className='text-[#808080] text-[84px] ' />
            <Typography.ExtraLargeHeading
              text='1,100'
              className='text-primary '
            />
            <Typography.LargeText
              text='Downloaded'
              className='text-[#808080]'
            />
          </div>
          <div className='flex flex-col items-center lg:border-r-2'>
            <PiShareDuotone className='text-[#808080] text-[84px] ' />
            <Typography.ExtraLargeHeading
              text='1,100'
              className='text-primary '
            />
            <Typography.LargeText text='Shared' className='text-[#808080]' />
          </div>
          <div className='flex flex-col items-center border-r-2'>
            <BiUser className='text-[#808080] text-[84px] ' />
            <Typography.ExtraLargeHeading
              text='1,100'
              className='text-primary '
            />
            <Typography.LargeText
              text='Active Members'
              className='text-[#808080]'
            />
          </div>
          <div className='flex flex-col items-center '>
            <GiChampions className='text-[#808080] text-[84px] ' />
            <Typography.ExtraLargeHeading
              text='1,100'
              className='text-primary '
            />
            <Typography.LargeText
              text='Satisfaction Rate'
              className='text-[#808080]'
            />
          </div>
        </div>
      </div>
    </>
  );
}
