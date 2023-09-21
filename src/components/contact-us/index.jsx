// Import Functional
import React from 'react';
import axios from 'axios';

// Import Component
import Typography from '../_shared/Typography';
import CustomButton from '../_shared/CustomButton';
import CustomInput from '../_shared/Form/CustomInput';
import { Form, Input, notification, Carousel } from 'antd';

// Import Icon
import { MdCall } from 'react-icons/md';
import { HiMail } from 'react-icons/hi';
import { SiWhatsapp } from 'react-icons/si';

export default function ContactUsComponent() {
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const [api, context] = notification.useNotification();

  const initialValues = {
    name: '',
    phone: '',
    email: '',
    company: '',
    subject: '',
    description: '',
  };

  const onSubmit = (e) => {
    const TelegramToken = process.env.REACT_APP_TELEGRAM_TOKEN;
    const ChatID = process.env.REACT_APP_TELEGRAM_CHAT_ID;
    const Messages = `@consult%0A%0AName: ${e.name}%0APhone: ${e.phone}%0AEmail : ${e.email}%0ACompany: ${e.company}%0ASubject: ${e.subject}%0ADescription : ${e.description}`;
    axios
      .post(
        `https://api.telegram.org/bot${TelegramToken}/sendMessage?chat_id=${ChatID}&text=${Messages}`
      )
      .then(() => {
        api.success({ message: 'Success send data' });
      })
      .catch(() => {
        api.error({ message: 'Failed send data' });
      });
  };

  return (
    <>
      {context}
      <div className='pt-[64px]'></div>
      <div className='pt-14 pb-24 flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center px-[15px] w-full md:w-[85%] max-w-[1080px]'>
          <div className='flex flex-col justify-center items-center text-center mb-[60px]'>
            <Typography.LargeHeading
              text='CONSULT WITH US'
              className='mb-[16px]'
              bold
            />
            <Typography.MediumText
              text='We open the doors to our wealth of expertise and knowledge to help you achieve your goals and 
              offers your personalized consultations that are tailored to your unique needs.'
              className='md:w-[80%]'
            />
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 w-full gap-[30px]'>
            <div className='flex flex-col order-2 lg:order-1'>
              <Typography.MediumHeading
                text='Contact Information'
                bold
                className='mb-4'
              />
              <div className='flex gap-2 flex-wrap items-center'>
                <SiWhatsapp />
                <Typography.MediumText bold text='Whatsapp Number:' />
                <Typography.MediumText text='+62 814 1720 2212' />
              </div>
              <div className='flex gap-2 flex-wrap items-center'>
                <MdCall />
                <Typography.MediumText bold text='Call directly at:' />
                <Typography.MediumText text='+1 23567789 ' />
              </div>
              <div className='flex mb-4 gap-2 flex-wrap items-center'>
                <HiMail />
                <Typography.MediumText bold text='Email:' />
                <Typography.MediumText text='sagararesearch.com' />
              </div>
              <Carousel autoplay>
                <iframe
                  className='rounded w-full aspect-square lg:aspect-video'
                  title='Maps'
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.349417668403!2d106.81123337453113!3d-6.21756846089696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f15fc43cc98d%3A0x5e3e0644cb7346a9!2sSagara%20Technology%20Jakarta!5e0!3m2!1sen!2sid!4v1689152197001!5m2!1sen!2sid'
                />
                <iframe
                  className='rounded w-full aspect-square lg:aspect-video'
                  title='Maps'
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.4426041654483!2d107.68597571183649!3d-6.9570019680863675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e83fb5765d65%3A0xe3bfb9fb2c7588c7!2sSagara%20Technology%20Bandung%20Headquarters%20%E2%80%A2%20Centre%20of%20Innovation!5e0!3m2!1sid!2sid!4v1695290361154!5m2!1sid!2sid'
                />
              </Carousel>
            </div>
            <div className='order-1 lg:order-2'>
              <Form
                requiredMark={false}
                initialValues={initialValues}
                layout='vertical'
                form={form}
                onFinish={onSubmit}
              >
                <div className='flex flex-col gap-0 '>
                  <div className='grid grid-cols-2 gap-4'>
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
                      name='phone'
                      rules={[
                        {
                          required: true,
                          message:
                            'Please input number, this field is required',
                        },
                      ]}
                    >
                      <CustomInput
                        justNumber
                        placeholder='Phone'
                        type='text'
                        className='py-[6px] w-full px-[10px]'
                      />
                    </Form.Item>
                  </div>
                  <div className='grid grid-cols-2 gap-4'>
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
                  </div>
                  <Form.Item
                    name='subject'
                    rules={[
                      { required: true, message: 'This field is required' },
                    ]}
                  >
                    <CustomInput
                      placeholder='Subject'
                      type='text'
                      className='py-[10px] px-[18px]'
                    />
                  </Form.Item>
                  <Form.Item
                    name='description'
                    rules={[
                      { required: true, message: 'This field is required' },
                    ]}
                  >
                    <TextArea
                      placeholder='Description'
                      className='custom-input py-[16px] px-[18px]'
                    />
                  </Form.Item>
                  <div className='flex justify-end'>
                    <CustomButton text='Submit' type='submit' />
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
