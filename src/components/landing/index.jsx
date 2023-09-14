import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { Carousel, notification, Form, Modal } from 'antd';
import { Link } from 'react-router-dom';
import { Whitepapers } from '../../service';

import Typography from '../_shared/Typography';
import LandingWhitepaperCard from '../_shared/LandingWhitepaperCard';
import CustomButton from '../_shared/CustomButton';
import FormDownload from '../_shared/Form/FormDownload';
import HeroBanner from '../../assets/Images/HeroBanner.svg';
import DefaultBanner from '../../assets/Images/DefaultWhitepaperCover.svg';

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

export default function LandingComponent() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [api, context] = notification.useNotification();
  const [modalOpen, setModalOpen] = useState(false);
  const carouselRef = useRef(null);

  const {
    recentWhitepaperList,
    popularWhitepaperList,
    highlightWhitepaperList,
  } = useSelector((state) => state.whitepaper);

  const [selectedInsight, setSelectedInsight] = useState(0);

  useEffect(() => {
    dispatch(Whitepapers.GetRecentWhitepapersList()).unwrap();
    dispatch(Whitepapers.GetPopularWhitepapersList()).unwrap();
    dispatch(Whitepapers.GetHighlightWhitepaper()).unwrap();
  }, [dispatch, api]);

  const initialValues = {
    name: '',
    company: '',
    position: '',
    email: '',
    phone: '',
    country: undefined,
    term: false,
  };

  const onSubmitDownload = (e) => {
    if (e.term) {
      const formData = new FormData();

      formData.append('name', e.name);
      formData.append('company', e.company);
      formData.append('position', e.position);
      formData.append('email', e.email);
      formData.append('phone', e.phone);
      formData.append('country', 1);

      const data = {
        formData,
        slug: highlightWhitepaperList?.results[selectedInsight]?.slug,
      };
      dispatch(Whitepapers.DownloadWhitepaper(data));
    } else {
      form.validateFields();
    }
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
          ...style,
        }}
        onClick={onClick}
        icon={<BsChevronCompactRight className='text-white' size={24} />}
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
          backgroundColor: '#a51535',
          width: '48px',
          height: '48px',
          position: 'absolute',
          zIndex: '10',
          ...style,
        }}
        onClick={onClick}
        icon={<BsChevronCompactLeft className='text-white' size={24} />}
      />
    );
  };

  const carouselSettings = {
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    effect: 'fade',
    autoplay: !modalOpen,
    autoplaySpeed: 6000,
    arrows: true,
    waitForAnimate: true
  };

  return (
    <>
      {context}
      <div className='flex flex-col h-[100vh] md:h-[700px] lg:h-[100vh]'>
        <div className='h-[64px]' />
        <div
          style={{ backgroundImage: `url(${HeroBanner})` }}
          className={`flex justify-center items-center flex-grow bg-cover`}
        >
          <div className='px-[15px] flex gap-6 w-full md:w-[85%] max-w-[1080px]'>
            <div className='lg:w-[50%] lg:mr-14 w-full'>
              <Carousel
                ref={carouselRef}
                afterChange={(current) => setSelectedInsight(current)}
                {...carouselSettings}
              >
                {highlightWhitepaperList?.results?.map((item, index) => (
                  <div
                    key={index}
                    className='h-[478px] lg:pl-10 flex flex-col w-full justify-between'
                  >
                    <div className='flex flex-col justify-center lg:justify-between h-full pb-6'>
                      <div
                        style={{ backgroundImage: `url(${DefaultBanner})` }}
                        className='w-fit h-fit bg-cover'
                      >
                        <img
                          src={item.image}
                          alt=' '
                          className='w-[214px] md:min-w-[214px] md:max-w-[214px] h-fit bg-cover aspect-[3/4]'
                        />
                      </div>
                      <div>
                        <div className='flex  gap-[6px] mb-2'>
                          {item?.theme?.map((theme, indexTheme) => (
                            <React.Fragment key={indexTheme}>
                              <Typography.Custom
                                text={theme ? theme : '-'}
                                className='text-white text-xs'
                              />
                            </React.Fragment>
                          ))}
                        </div>
                        <Typography.LargeHeading
                          text={item.title}
                          className='text-white'
                          bold
                        />
                        <div className='flex gap-4 flex-wrap mt-2'>
                          <Typography.MediumText
                            text={`Author : ${item.author}`}
                            className='text-white'
                          />
                          <Typography.MediumText
                            text={`Published : ${dayjs(
                              item.published_at
                            ).format('YYYY-MM-DD')}`}
                            className='text-white'
                          />
                        </div>
                        <div className='flex mt-4 gap-4'>
                          <Link
                            className='w-fit h-fit'
                            to={`/whitepapers/detail/${item.slug}`}
                          >
                            <CustomButton
                              text='Learn More'
                              className='bg-transparent text-sm py-2 border-white border-[1px] text-white'
                            />
                          </Link>
                          <CustomButton
                            text='Download'
                            className='lg:hidden'
                            onClick={() => setModalOpen(true)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
            <div className='hidden lg:block md:w-[40%] md:min-w-[40%] md:max-w-[40%] lg:w-[35%] lg:min-w-[35%] lg:max-w-[35%]'>
              <FormDownload
                form={form}
                initialValues={initialValues}
                onSubmitDownload={onSubmitDownload}
                isLanding
              />
            </div>
          </div>
        </div>
      </div>
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
                  <LandingWhitepaperCard
                    image={whitepaper?.image}
                    title={whitepaper?.title ? whitepaper?.title : '-'}
                    date={
                      whitepaper?.published_at
                        ? dayjs(whitepaper?.published_at).format('DD-MM-YYYY')
                        : '-'
                    }
                    author={whitepaper?.author}
                    download={whitepaper?.count_of_downloads}
                    topic={whitepaper?.theme}
                    desc={whitepaper?.overview ? whitepaper?.overview : '-'}
                    slug={whitepaper?.slug}
                  />
                </React.Fragment>
              )
            )}
          </div>
        </div>
      </div>
      <div className='flex justify-center w-full'>
        <div className='pb-16 flex flex-col  px-[15px] w-full md:w-[85%] max-w-[1080px]'>
          <Typography.LargeHeading
            text='Popular Whitepapers'
            className='mb-[30px]'
          />
          <div className='grid gap-[15px]'>
            {popularWhitepaperList?.results?.map(
              (whitepaper, indexWhitepaper) => (
                <React.Fragment key={indexWhitepaper}>
                  <LandingWhitepaperCard
                    image={whitepaper?.image}
                    title={whitepaper?.title ? whitepaper?.title : '-'}
                    date={
                      whitepaper?.published_at
                        ? dayjs(whitepaper?.published_at).format('DD-MM-YYYY')
                        : '-'
                    }
                    author={whitepaper?.author}
                    download={whitepaper?.count_of_downloads}
                    topic={whitepaper?.theme}
                    desc={whitepaper?.overview ? whitepaper?.overview : '-'}
                    slug={whitepaper?.slug}
                  />
                </React.Fragment>
              )
            )}
          </div>
        </div>
      </div>
      <Modal
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        onOk={() => setModalOpen(false)}
        footer={null}
        title='Download Whitepaper'
      >
        <>
          <FormDownload
            form={form}
            initialValues={initialValues}
            onSubmitDownload={onSubmitDownload}
          />
        </>
      </Modal>
    </>
  );
}
