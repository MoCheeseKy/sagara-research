import React, { useEffect } from 'react';
import Typography from '../../_shared/Typography';
import { Form } from 'antd';
import CustomInput from '../../_shared/Form/CustomInput';
import CustomSelect from '../../_shared/Form/CustomSelect';
import CustomButton from '../../_shared/CustomButton';
import CustomTabs from '../../_shared/CustomTabs';
import { useParams } from 'react-router-dom';

// Import Self Component
import OverviewComponent from './overview';
import AboutFGDComponent from './aboutFGD';

// Dispatch Setting
import { useDispatch, useSelector } from 'react-redux';
import { Whitepapers } from '../../../service';

export default function WHitepaperDetailComponent() {
  const params = useParams();
  const slug = params.slug;
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { whitepapersDetail } = useSelector((state) => state.whitepaper);

  useEffect(() => {
    dispatch(Whitepapers.GetWhitepaperDetail(slug));
  }, []);

  const initialValues = {
    name: '',
    company: '',
    position: '',
    email: '',
    phone: '',
    country: undefined,
  };
  const onSubmitDownload = (e) => {
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
  ];
  return (
    <>
      <div className='pt-[65px]' />
      <div className='flex justify-center py-14'>
        <div className='flex flex-col lg:flex-row items-center px-[15px] w-full md:w-[85%] max-w-[1080px] gap-16'>
          <div className='flex flex-col md:flex-row gap-6 w-full'>
            <div
              className={`w-full md:w-[124px] md:min-w-[124px] h-fit aspect-[3/4.5] rounded bg-[url(/public/assets/Images/MonochromeCircuit.png)] bg-cover`}
            />
            <div className='flex flex-col gap-4'>
              <Typography.MediumText text='WHITE PAPER' bold />
              <Typography.MediumHeading
                text='SKILSS GAP WITHIN ORGANIZATION'
                className='w-[80%]'
              />
              <Typography.MediumText text='The rapid pace of technological advancement often creates skills gaps in organizations. To bridge the skills gap, organizations often need to invest in training programs or external resources. It is a serious challenge to acquire and retain talent with needed expertise in emerging technologies such as AI, machine learning and cybersecurity. Also developing many strategies to attract, train, and retain skilled IT personnel who can support the organizations technology goals.' />
              <div className='grid grid-cols-1 md:grid-cols-2 border-b-2 pb-6'>
                <Typography.MediumText
                  text={`Publication : May 1, 2023`}
                  className='text-[#666]'
                />
                <Typography.MediumText
                  text={`Topic : Digital Transformation`}
                  className='text-[#666]'
                />
                <Typography.MediumText
                  text={`Download : 1267 People`}
                  className='text-[#666]'
                />
                <Typography.MediumText
                  text={`Author : Leading-Expert`}
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
                  <Form.Item name='country' className='bg-white rounded-[10px]'>
                    <CustomSelect
                      placeholder='Select a Country'
                      bordered={false}
                      className='py-[6px] px-[6px] outline-none shadow-none border-0'
                      optionFilterProp='children'
                      options={[
                        {
                          value: '1',
                          label: 'Select Country',
                        },
                        {
                          value: '2',
                          label: 'Closed',
                        },
                        {
                          value: '3',
                          label: 'Communicated',
                        },
                        {
                          value: '4',
                          label: 'Identified',
                        },
                        {
                          value: '5',
                          label: 'Resolved',
                        },
                        {
                          value: '6',
                          label: 'Cancelled',
                        },
                      ]}
                    />
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
