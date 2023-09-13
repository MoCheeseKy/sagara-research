import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { Whitepapers } from '../../service';
import Typography from '../_shared/Typography';
import { Carousel, notification, Form, Modal, Skeleton } from 'antd';
import LandingWhitepaperCard from '../_shared/LandingWhitepaperCard';
import { Link } from 'react-router-dom';
import CustomButton from '../_shared/CustomButton';
import FormDownload from '../_shared/Form/FormDownload';
import HeroBanner from '../../assets/Images/HeroBanner.svg';
import DefaultBanner from '../../assets/Images/DefaultWhitepaperCover.svg';

export default function LandingComponent() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [api, context] = notification.useNotification();
  const [modalOpen, setModalOpen] = useState(false);

  const {
    recentWhitepaperList,
    popularWhitepaperList,
    highlightWhitepaperList,
  } = useSelector((state) => state.whitepaper);

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
    dispatch(Whitepapers.GetHighlightWhitepaper())
      .unwrap()
      .then(() => {
        api.success({ message: 'Success get highlight whitepaper' });
      })
      .catch(() => {
        api.error({ message: 'Failed get highlight whitepaper' });
      });
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
        slug: highlightWhitepaperList?.results[0]?.slug,
      };
      dispatch(Whitepapers.DownloadWhitepaper(data));
    } else {
      form.validateFields();
    }
  };

  return (
    <>
      {context}
      <div className='flex flex-col h-[100vh]'>
        <div className='h-[77px]' />
        <div
          style={{ backgroundImage: `url(${HeroBanner})` }}
          className={`flex justify-center items-center flex-grow bg-cover`}
        >
          {!highlightWhitepaperList?.results ? (
            <Skeleton active />
          ) : (
            <div className='px-[15px] flex gap-6 w-full md:w-[85%] max-w-[1080px]'>
              <div className='flex-grow flex flex-col justify-between'>
                <div
                  style={{ backgroundImage: `url(${DefaultBanner})` }}
                  className='w-fit h-fit bg-cover'
                >
                  <img
                    src={highlightWhitepaperList?.results[0]?.image}
                    alt=' '
                    className='w-[214px] md:min-w-[214px] md:max-w-[214px] h-fit bg-cover aspect-[3/4]'
                  />
                </div>
                <div>
                  <div className='flex gap-[6px] mb-2'>
                    {/* <div className='border-white border-[1px] px-4 rounded-lg w-fit'>
                      <Typography.Custom
                        text={
                          highlightWhitepaperList?.results[0]?.theme
                            ? highlightWhitepaperList?.results[0]?.theme
                            : '-'
                        }
                        className='text-white text-xs'
                      />
                    </div> */}
                    {highlightWhitepaperList?.results[0]?.theme ? (
                      <>
                        {highlightWhitepaperList?.results[0]?.theme?.map(
                          (theme, indexTheme) => (
                            <React.Fragment key={indexTheme}>
                              <Typography.Custom
                                text={theme ? theme : '-'}
                                className='text-white text-xs'
                              />
                            </React.Fragment>
                          )
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                  <Typography.LargeHeading
                    text={
                      highlightWhitepaperList?.results[0]?.title
                        ? highlightWhitepaperList?.results[0]?.title
                        : '-'
                    }
                    className='text-white'
                    bold
                  />
                  <div className='flex gap-4 flex-wrap mt-2'>
                    <Typography.MediumText
                      text={`Author : ${
                        highlightWhitepaperList?.results[0]?.author
                          ? highlightWhitepaperList?.results[0]?.author
                          : '-'
                      }`}
                      className='text-white'
                    />
                    <Typography.MediumText
                      text={`Published : ${
                        highlightWhitepaperList?.results[0]?.published_at
                          ? dayjs(
                              highlightWhitepaperList?.results[0]?.published_at
                            ).format('DD-MM-YYYY')
                          : '-'
                      }`}
                      className='text-white'
                    />
                  </div>
                  <div className='flex mt-4 gap-4'>
                    <Link
                      className='w-fit h-fit'
                      to={`/whitepapers/detail/${highlightWhitepaperList?.results[0]?.slug}`}
                    >
                      <CustomButton
                        text='Learn More'
                        className='bg-transparent text-sm py-2 border-white border-[1px] text-white'
                      />
                    </Link>
                    <CustomButton
                      text='Download'
                      className='md:hidden'
                      onClick={() => setModalOpen(true)}
                    />
                  </div>
                </div>
              </div>
              <div className='hidden md:block md:w-[40%] md:min-w-[40%] md:max-w-[40%] lg:w-[35%] lg:min-w-[35%] lg:max-w-[35%]'>
                <FormDownload
                  form={form}
                  initialValues={initialValues}
                  onSubmitDownload={onSubmitDownload}
                  isLanding
                />
              </div>
            </div>
          )}
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
