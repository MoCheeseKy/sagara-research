// Import Functional
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Whitepapers } from '../../service';
import {
  topicHandler,
  authorHandler,
  languageHandler,
  resetFilter,
} from '../../store/global/filter';
import axios from 'axios';
import dayjs from 'dayjs';

// Import Component
import { Carousel, notification, Form, Modal } from 'antd';
import Typography from '../_shared/Typography';
import LandingResearchCard from '../_shared/LandingResearchCard';
import CustomButton from '../_shared/CustomButton';
import FormDownload from '../_shared/Form/FormDownload';

// Import Icon
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { HiLanguage } from 'react-icons/hi2';

// Import Image
import HeroBanner from '../../assets/Images/HeroBanner.svg';
import DefaultBanner from '../../assets/Images/DefaultWhitepaperCover.svg';

export default function LandingComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

      const TelegramToken = process.env.REACT_APP_TELEGRAM_TOKEN;
      const ChatID = process.env.REACT_APP_TELEGRAM_CHAT_ID;
      const Messages = `@download-research : ${highlightWhitepaperList?.results[selectedInsight]?.title}%0A%0AName: ${e.name}%0ACompany : ${e.company}%0APosition : ${e.position}%0AEmail : ${e.email}%0APhone : ${e.phone}%0AResearch Objective : ${e.country}`;

      const data = {
        formData,
        slug: highlightWhitepaperList?.results[selectedInsight]?.slug,
      };
      dispatch(Whitepapers.DownloadWhitepaper(data))
        .unwrap()
        .then(() => {
          api.success({ message: 'Success Download' });
          axios.post(
            `https://api.telegram.org/bot${TelegramToken}/sendMessage?chat_id=${ChatID}&text=${Messages}`
          );
        })
        .catch(() => {
          api.error({ message: 'Failed Download' });
        });
    } else {
      form.validateFields();
    }
  };

  const NextArrow = ({ className, style, onClick }) => {
    return (
      <div className='carousel-button'>
        <CustomButton
          icon={<BsChevronCompactRight className='text-white' size={24} />}
          onClick={onClick}
          className={`${className} relative z-50 rounded-full w-[44px]  min-w-[44px] max-w-[44px] h-[44px] min-h-[44px] max-h-[44px] opacity-button`}
          style={{
            color: 'white',
            fontSize: '15px',
            lineHeight: '1.5715',
            content: '',
            padding: '10px',
            backgroundColor: '#a51535',
            width: '48px',
            height: '48px',
            position: 'absolute',
            ...style,
          }}
        />
      </div>
    );
  };

  const PrevArrow = ({ className, style, onClick }) => {
    return (
      <div className='carousel-button'>
        <CustomButton
          icon={<BsChevronCompactLeft className='text-white' size={24} />}
          onClick={onClick}
          className={`${className} relative z-50 rounded-full w-[44px] min-w-[44px] max-w-[44px] h-[44px] min-h-[44px] max-h-[44px] opacity-button`}
          style={{
            color: 'white',
            fontSize: '15px',
            lineHeight: '1.5715',
            content: '',
            padding: '10px',
            backgroundColor: '#a51535',
            width: '48px',
            height: '48px',
            position: 'absolute',
            ...style,
          }}
        />
      </div>
    );
  };

  const carouselSettings = {
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    effect: 'fade',
    autoplay: !modalOpen,
    autoplaySpeed: 6000,
    arrows: true,
    waitForAnimate: true,
  };

  function CardNavigate(type, value) {
    if (type === 'Open Detail') {
      navigate(`/research/detail/${value}`);
    } else if (type !== 'Open Detail') {
      if (type === 'Topic Filter') {
        dispatch(resetFilter());
        dispatch(topicHandler(value));
      } else if (type === 'Author Filter') {
        dispatch(resetFilter());
        dispatch(authorHandler(value));
      } else {
        dispatch(resetFilter());
        dispatch(languageHandler(value));
      }
      navigate(`/research/explore-research`);
    } else {
      navigate(`/`);
    }
  }

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
                      <img
                        onClick={() => CardNavigate('Open Detail', item?.slug)}
                        src={item.image}
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null;
                          currentTarget.src = DefaultBanner;
                        }}
                        alt='defaultBanner'
                        className='w-[180px] md:min-w-[180px] md:max-w-[180px] h-fit bg-cover aspect-[3/4]'
                      />
                      <div>
                        <Typography.LargeHeading
                          onClick={() =>
                            CardNavigate('Open Detail', item?.slug)
                          }
                          text={item.title}
                          className='text-white cursor-pointer lg:text-[28px] mb-2'
                          bold
                        />
                        <div className='flex  gap-[6px] '>
                          <div className='border-white border-[1px] px-2 rounded-lg w-fit'>
                            <button
                              onClick={() =>
                                CardNavigate('Language Filter', item?.langguage)
                              }
                              className='flex items-center cursor-pointer gap-2 text-white text-xs'
                            >
                              <HiLanguage />
                              <Typography.Custom
                                text={item?.langguage ? item?.langguage : '-'}
                              />
                            </button>
                          </div>
                          {item?.theme?.map((theme, indexTheme) => (
                            <React.Fragment key={indexTheme}>
                              <button
                                onClick={() =>
                                  CardNavigate('Topic Filter', theme?.title)
                                }
                                className='border-white border-[1px] px-4 rounded-lg cursor-pointer w-fit'
                              >
                                <Typography.Custom
                                  text={theme?.title ? theme?.title : '-'}
                                  className='text-white text-xs'
                                />
                              </button>
                            </React.Fragment>
                          ))}
                        </div>
                        <div className='flex gap-x-2 flex-wrap mt-2'>
                          <button
                            onClick={() =>
                              CardNavigate('Author Filter', item?.author)
                            }
                          >
                            <Typography.MediumText
                              text={`${item?.author}`}
                              className='text-white cursor-pointer hover:text-blue-500 hover:underline'
                              bold
                            />
                          </button>
                          <Typography.MediumText
                            text={`${dayjs(item?.published_at).format(
                              'YYYY-MM-DD'
                            )}`}
                            className='text-white opacity-75'
                          />
                        </div>
                        <div className='flex mt-4 gap-4'>
                          <CustomButton
                            text='Learn More'
                            className='bg-transparent text-sm py-2 border-white border-[1px] text-white'
                            onClick={() => CardNavigate('Open Detail')}
                          />
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
        <div className='py-16 pb-10 md:pb-16 flex flex-col  px-[15px] w-full md:w-[85%] max-w-[1080px]'>
          <Typography.LargeHeading
            text='Recent Research'
            className='mb-[10px] md:mb-[30px]'
          />
          <div className='grid gap-[15px]'>
            {recentWhitepaperList?.results
              ?.slice(0, 3)
              .map((whitepaper, indexWhitepaper) => (
                <React.Fragment key={indexWhitepaper}>
                  <LandingResearchCard
                    image={whitepaper?.image}
                    title={whitepaper?.title ? whitepaper?.title : '-'}
                    date={
                      whitepaper?.published_at
                        ? dayjs(whitepaper?.published_at).format('DD-MM-YYYY')
                        : '-'
                    }
                    author={whitepaper?.author}
                    download={whitepaper?.count_of_downloads}
                    language={whitepaper?.langguage}
                    topic={whitepaper?.theme}
                    desc={whitepaper?.overview ? whitepaper?.overview : '-'}
                    slug={whitepaper?.slug}
                  />
                </React.Fragment>
              ))}
          </div>
        </div>
      </div>
      <div className='flex justify-center w-full'>
        <div className='pb-16 flex flex-col  px-[15px] w-full md:w-[85%] max-w-[1080px]'>
          <Typography.LargeHeading
            text='Popular Research'
            className='mb-[10px] md:mb-[30px]'
          />
          <div className='grid gap-[15px]'>
            {popularWhitepaperList?.results?.map(
              (whitepaper, indexWhitepaper) => (
                <React.Fragment key={indexWhitepaper}>
                  <LandingResearchCard
                    image={whitepaper?.image}
                    title={whitepaper?.title ? whitepaper?.title : '-'}
                    date={
                      whitepaper?.published_at
                        ? dayjs(whitepaper?.published_at).format('DD-MM-YYYY')
                        : '-'
                    }
                    author={whitepaper?.author}
                    download={whitepaper?.count_of_downloads}
                    language={whitepaper?.langguage}
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
