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
    title: '',
    email: '',
    phone: '',
    country: undefined,
  };
  const onSubmitDownload = (e) => {
    const payload = {
      name: e.name,
      company: e.company,
      title: e.title,
      email: e.email,
      phone: e.phone,
      country: e.country,
    };
    console.log(payload);
  };
  const TabsItem = [
    {
      label: 'Overview',
      children: (
        <>
          <OverviewComponent
            description='Skills gaps within organizations in the tech industry are not uncommon due to the rapid pace of technological advancements and the evolving nature of the industry. A skills gap refers to the disparity between the skills and knowledge that employees possess and the skills and knowledge required to perform effectively in their roles or meet the demands of the industry.
          The tech industry is known for its constant innovation and evolving technologies. New tools, programming languages, frameworks, and methodologies emerge regularly, creating a challenge for employees to keep up with the latest trends and acquire the necessary skills.
          Finding skilled talent in the tech industry can be challenging. Organizations may need to hire employees with some of the required skills but not the full set. This can create skill gaps that need to be addressed through training and development programs'
            editor='Sagara Research Team'
            fgdDate='May 1, 2023'
            publication='June 2, 2023'
            topic='Digital Transformation'
            license='165472-PDF-ENG'
            length='64'
          />
        </>
      ),
    },
    {
      label: 'About FGD',
      children: (
        <>
          <AboutFGDComponent data='The purpose of this discussion is to identify the areas where employees perceive a skills gap, understand the impact it has on their roles, and brainstorm potential solutions.' />
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
                  <Form.Item name='name'>
                    <CustomInput
                      placeholder='Name'
                      type='text'
                      className='py-[10px] px-[18px]'
                    />
                  </Form.Item>
                  <Form.Item name='company'>
                    <CustomInput
                      placeholder='Company'
                      type='text'
                      className='py-[10px] px-[18px]'
                    />
                  </Form.Item>
                  <Form.Item name='title'>
                    <CustomInput
                      placeholder='Title/Position'
                      type='text'
                      className='py-[10px] px-[18px]'
                    />
                  </Form.Item>
                  <Form.Item name='email'>
                    <CustomInput
                      placeholder='Email'
                      type='text'
                      className='py-[10px] px-[18px]'
                    />
                  </Form.Item>
                  <Form.Item name='phone'>
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
