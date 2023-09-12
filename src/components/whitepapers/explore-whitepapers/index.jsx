import React, { useEffect, useState } from 'react';
import Typography from '../../_shared/Typography';
import CustomButton from '../../_shared/CustomButton';
import CustomInput from '../../_shared/Form/CustomInput'
import { LiaDownloadSolid } from 'react-icons/lia';
import { BiUser } from 'react-icons/bi';
import { GiChampions } from 'react-icons/gi';
import { PiShareDuotone } from 'react-icons/pi';
import { notification, Pagination } from 'antd';
import WhitepaperCard from '../../_shared/WhitepaperCard';

import { useDispatch, useSelector } from 'react-redux';
import { Whitepapers } from '../../../service';
import dayjs from 'dayjs';

import HeroImage from '../../../assets/Images/MonochromeCircuit.png';

export default function ExploreWhitepapersComponent() {
  const dispatch = useDispatch();
  const { whitepapersList } = useSelector((state) => state.whitepaper);
  const [api, context] = notification.useNotification();
  const [pagination, setPagination] = useState({ page: 1, page_size: 5, search: '' });

  useEffect(() => {
    const payload = {
      search: pagination.search,
      page: pagination.page
    }
    dispatch(Whitepapers.GetWhitepapersList(payload))
      .unwrap()
      .then(() => {
        api.success({ message: 'Success get whitepaper' });
      })
      .catch(() => {
        api.error({ message: 'Failed get whitepaper' });
      });
  }, [dispatch, api, pagination]);

  const paginationChange = (page) => {
    setPagination({ ...pagination, page });
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setPagination({...pagination, search: e.target.value, page: 1})
    }
  }

  return (
    <>
      {context}
      <div className='flex flex-col h-[100vh]'>
        <div className='h-[77px]' />
        <div
          className={`flex flex-grow bg-[url('https://img.freepik.com/free-photo/3d-render-low-poly-plexus-design-network-communications_1048-14542.jpg?w=740&t=st=1691053736~exp=1691054336~hmac=3e831c9125aba14bfad1a71615a1b0585cb219773a81a811d88d687adf6160bd')] bg-cover`}
        >
          <div className='flex w-full h-full justify-center items-center bg-gradient-to-r from-white to-transparent'>
            <div className='flex gap-[30px] px-[15px] items-center w-full md:w-[85%] max-w-[1080px]'>
              <img
                src={HeroImage}
                alt='cover'
                className='w-[320px] aspect-[3/4.5] rounded bg-cover'
              />
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
          <div className='grid md:grid-cols-2 grid-rows-2'>
            <Typography.LargeHeading
              text='Explore Whitepapers'
              className='mb-[30px]'
            />
            <CustomInput className='mb-[30px]' placeholder='Press enter to search' onKeyUp={handleSearch} />
          </div>
          <div className='grid gap-[15px]'>
            {whitepapersList?.results?.map((whitepaper, indexWhitepaper) => (
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
            ))}
            {whitepapersList?.count > 5 && (
              <div className='text-right'>
                <Pagination
                  total={whitepapersList.count}
                  pageSize={5}
                  onChange={paginationChange}
                />
              </div>
            )}
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
