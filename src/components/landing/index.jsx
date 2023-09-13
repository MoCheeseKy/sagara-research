import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { Whitepapers } from '../../service';
import Typography from '../_shared/Typography';
import { Carousel, notification, Form, Checkbox } from 'antd';
import WhitepaperCard from '../_shared/WhitepaperCard';
import { Link } from 'react-router-dom';
import CustomButton from '../_shared/CustomButton';
import CustomInput from '../_shared/Form/CustomInput';
import CustomSelect from '../_shared/Form/CustomSelect';

export default function LandingComponent() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [api, context] = notification.useNotification();

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

  console.log(highlightWhitepaperList);

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
        // slug: slug,
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
          className={`flex justify-center items-center flex-grow bg-[url('https://img.freepik.com/free-photo/3d-render-low-poly-plexus-design-network-communications_1048-14542.jpg?w=740&t=st=1691053736~exp=1691054336~hmac=3e831c9125aba14bfad1a71615a1b0585cb219773a81a811d88d687adf6160bd')] bg-cover`}
        >
          <div className='px-[15px] flex gap-6 w-full md:w-[85%] max-w-[1080px]'>
            <div className='flex-grow flex-flex-col'>
              <div className='w-[184px] md:min-w-[184px] md:max-w-[184px] h-fit bg-cover bg-white aspect-[3/4]' />
              <div>
                <Typography.LargeHeading
                  text='Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing'
                  className='text-white mt-8'
                  bold
                />
                <div className='lg:w-[70%] grid grid-cols-2 mt-2'>
                  <Typography.MediumText
                    text={`Topic : ${
                      highlightWhitepaperList?.results[0]?.theme
                        ? highlightWhitepaperList?.results[0]?.theme
                        : '-'
                    }`}
                    className='text-white'
                  />
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
                  <Typography.MediumText
                    text={`Download : ${
                      highlightWhitepaperList?.results[0]?.count_of_downloads
                        ? highlightWhitepaperList?.results[0]
                            ?.count_of_downloads
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
                    <CustomButton text='Learn More' />
                  </Link>
                  <CustomButton text='Download' className=' md:hidden' />
                </div>
              </div>
            </div>
            <div className='hidden md:block md:w-[40%] md:min-w-[40%] md:max-w-[40%] lg:w-[35%] lg:min-w-[35%] lg:max-w-[35%]'>
              <Form
                requiredMark={false}
                initialValues={initialValues}
                layout='vertical'
                form={form}
                onFinish={onSubmitDownload}
              >
                <div className='flex flex-col gap-0'>
                  <div className='md:grid grid-cols-2 md:grid-cols-1 gap-x-2'>
                    <Form.Item
                      name='name'
                      rules={[
                        { required: true, message: 'This field is required' },
                      ]}
                    >
                      <CustomInput
                        placeholder='Name'
                        type='text'
                        className='py-[10px] px-[18px]'
                      />
                    </Form.Item>
                    <Form.Item
                      name='company'
                      rules={[
                        { required: true, message: 'This field is required' },
                      ]}
                    >
                      <CustomInput
                        placeholder='Company'
                        type='text'
                        className='py-[10px] px-[18px]'
                      />
                    </Form.Item>
                    <Form.Item
                      name='position'
                      rules={[
                        { required: true, message: 'This Field is required' },
                      ]}
                    >
                      <CustomInput
                        placeholder='Title/Position'
                        type='text'
                        className='py-[10px] px-[18px]'
                      />
                    </Form.Item>
                    <Form.Item
                      name='email'
                      rules={[
                        { required: true, message: 'This field is required' },
                        {
                          type: 'email',
                          message: 'Please input correct email',
                        },
                      ]}
                    >
                      <CustomInput
                        placeholder='Email'
                        type='text'
                        className='py-[10px] px-[18px]'
                      />
                    </Form.Item>
                    <Form.Item
                      name='phone'
                      rules={[
                        { required: true, message: 'This Field is required' },
                      ]}
                    >
                      <CustomInput
                        placeholder='Phone'
                        type='text'
                        className='py-[10px] px-[18px]'
                      />
                    </Form.Item>
                    <Form.Item
                      name='country'
                      className='bg-white rounded-[10px]'
                      rules={[
                        { required: true, message: 'This Field is required' },
                      ]}
                    >
                      <CustomSelect
                        placeholder='Select Research Objective'
                        bordered={false}
                        className='py-[6px] px-[6px] outline-none shadow-none border-0'
                        optionFilterProp='children'
                        options={[
                          {
                            value: 'Business Purpose',
                            label: 'Business Purpose',
                          },
                          {
                            value: 'Research Purpose',
                            label: 'Research Purpose',
                          },
                          {
                            value: 'Personal Purpose',
                            label: 'Personal Purpose',
                          },
                        ]}
                      />
                    </Form.Item>
                    <Form.Item name='term' valuePropName='checked'>
                      <div className='flex gap-2 items-start'>
                        <Checkbox />
                        <Typography.SmallText
                          className='text-white'
                          text='By accepting these Terms and Conditions, you agree to our
                  terms of cooperation, which include the possibility of being
                  contacted by our consultants.'
                        />
                      </div>
                    </Form.Item>
                  </div>
                  <CustomButton text='Download' />
                </div>
              </Form>
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
    </>
  );
}
