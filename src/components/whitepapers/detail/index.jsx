import React, { useEffect } from 'react';
import Typography from '../../_shared/Typography';
import { Form, notification, Checkbox } from 'antd';
import CustomInput from '../../_shared/Form/CustomInput';
import CustomSelect from '../../_shared/Form/CustomSelect';
import CustomButton from '../../_shared/CustomButton';
import CustomTabs from '../../_shared/CustomTabs';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';

// Import Self Component
import OverviewComponent from './overview';
import AboutFGDComponent from './aboutFGD';
import InsightComponent from './insight';

// Dispatch Setting
import { useDispatch, useSelector } from 'react-redux';
import { Whitepapers } from '../../../service';

import DefaultCover from '../../../assets/Images/DefaultWhitepaperCover.svg';

export default function WHitepaperDetailComponent() {
  const params = useParams();
  const slug = params.slug;
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { whitepapersDetail } = useSelector((state) => state.whitepaper);
  const [api, context] = notification.useNotification();

  useEffect(() => {
    dispatch(Whitepapers.GetWhitepaperDetail(slug))
      .unwrap()
      .then(() => {
        api.success({ message: 'Success get detail' });
      })
      .catch(() => {
        api.error({ message: 'Failed get detail' });
      });
  }, [dispatch, api, slug]);

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
        slug: slug,
      };
      dispatch(Whitepapers.DownloadWhitepaper(data));
    } else {
      form.validateFields();
    }
  };

  const TabsItem = [
    {
      label: 'Overview',
      children: (
        <>
          <OverviewComponent data={whitepapersDetail} />
        </>
      ),
    },
    {
      label: 'About FGD',
      children: (
        <>
          <AboutFGDComponent data={whitepapersDetail} />
        </>
      ),
    },
    {
      label: 'Insight',
      children: (
        <>
          <InsightComponent data={whitepapersDetail} />
        </>
      ),
    },
  ];

  return (
    <>
      {context}
      <div className='pt-[65px]' />
      <div className='flex justify-center py-14'>
        <div className='flex flex-col lg:flex-row items-center px-[15px] w-full md:w-[85%] max-w-[1080px] gap-16'>
          <div className='flex flex-col md:flex-row gap-6 w-full'>
            <div
              className='w-fit h-fit bg-cover'
              style={{ backgroundImage: `url(${DefaultCover})` }}
            >
              <img
                src={whitepapersDetail?.image}
                alt=' '
                className='w-full md:w-[124px] md:min-w-[124px] h-fit aspect-[3/4] rounded bg-cover'
              />
            </div>
            <div className='flex flex-col gap-4'>
              <Typography.MediumText text='WHITE PAPER' bold />
              <Typography.MediumHeading
                text={whitepapersDetail?.title ? whitepapersDetail?.title : '-'}
                className='w-[80%]'
              />
              <Typography.MediumText
                text={
                  whitepapersDetail?.description
                    ? whitepapersDetail?.description
                    : '-'
                }
              />
              <div className='grid grid-cols-1 md:grid-cols-2 border-b-2 pb-6'>
                <Typography.MediumText
                  text={`Publication : ${
                    whitepapersDetail?.about?.published_at
                      ? dayjs(whitepapersDetail?.about?.published_at).format(
                          'DD-MM-YYYY'
                        )
                      : '-'
                  }`}
                  className='text-[#666]'
                />
                <Typography.MediumText
                  text={`Topic : ${
                    whitepapersDetail?.topic ? whitepapersDetail?.topic : '-'
                  }`}
                  className='text-[#666]'
                />
                <Typography.MediumText
                  text={`Download : ${
                    whitepapersDetail?.count_of_downloads
                      ? whitepapersDetail?.count_of_downloads
                      : '0'
                  }`}
                  className='text-[#666]'
                />
                <Typography.MediumText
                  text={`Author : ${
                    whitepapersDetail?.author ? whitepapersDetail?.author : '-'
                  }`}
                  className='text-[#666]'
                />
              </div>
              <div>
                <Typography.LargeText
                  bold
                  text='What you get :'
                  className='text-[#666]'
                />
                <Typography.MediumText
                  text='PDF Document'
                  className='text-[#b1adad]'
                />
              </div>
            </div>
          </div>
          <div className='w-full lg:w-[40%] lg:max-w-[40%]'>
            <Form
              requiredMark={false}
              initialValues={initialValues}
              layout='vertical'
              form={form}
              onFinish={onSubmitDownload}
            >
              <div className='flex flex-col gap-0'>
                <Typography.MediumText
                  text='DOWNLOAD THE WHITEPAPER FOR MORE INSIGHTFUL CONTENT'
                  className='mb-6'
                />
                <div className='md:grid md:grid-cols-2 lg:grid-cols-1 gap-x-2'>
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
                      { type: 'email', message: 'Please input correct email' },
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
                  <Form.Item
                    name='term'
                    valuePropName='checked'
                    className='col-span-2 lg:col-span-1'
                  >
                    <div className='flex gap-2 items-start'>
                      <Checkbox />
                      <Typography.SmallText
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
      <div className='flex justify-center pb-16'>
        <div className='items-center px-[15px] w-full md:w-[85%] max-w-[1080px] gap-6'>
          <CustomTabs Options={TabsItem} />
        </div>
      </div>
    </>
  );
}
