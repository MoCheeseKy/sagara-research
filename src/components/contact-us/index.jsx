// Import Functional
import React from 'react';
import axios from 'axios';

// Import Component
import Typography from '../_shared/Typography';
import CustomButton from '../_shared/CustomButton';
import CustomInput from '../_shared/Form/CustomInput';
import { Form, Input, notification } from 'antd';

// Import Icon
import { MdCall } from 'react-icons/md';
import { HiMail } from 'react-icons/hi';

export default function ContactUsComponent() {
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const [api, context] = notification.useNotification();

  const initialValues = {
    name: '',
    email: '',
    description: '',
  };

  const onSubmit = (e) => {
    const TelegramToken = process.env.REACT_APP_TELEGRAM_TOKEN;
    const ChatID = process.env.REACT_APP_TELEGRAM_CHAT_ID;
    const Messages = `@contact-us%0A%0AName: ${e.name}%0AEmail : ${e.email}%0ADescription : ${e.description}`;
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
              text='Contact Information'
              className='mb-[16px]'
            />
            <Typography.MediumText
              text='Your feedback is invaluable, please dont hesitate to get in touch with us 
              <br/>
              We appreciate your trust and look forward to assisting you with any inquiries you may have'
            />
            <div className='flex items-center gap-2'>
              <MdCall className='text-primary text-base' />
              <a href='tel:003024630820'>
                <Typography.MediumText
                  text='+62 814 1720 2212'
                  className='hover:text-primary'
                />
              </a>
              <HiMail className='text-primary text-base' />
              <a href='mailto:office@evolo.com'>
                <Typography.MediumText
                  text='sagararesearch.com'
                  className='hover:text-primary'
                />
              </a>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-[30px]'>
            <div>
              <iframe
                className='rounded'
                title='Maps'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.349417668403!2d106.81123337453113!3d-6.21756846089696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f15fc43cc98d%3A0x5e3e0644cb7346a9!2sSagara%20Technology%20Jakarta!5e0!3m2!1sen!2sid!4v1689152197001!5m2!1sen!2sid'
                width='100%'
                height='100%'
              />
            </div>
            <div>
              <Form
                requiredMark={false}
                initialValues={initialValues}
                layout='vertical'
                form={form}
                onFinish={onSubmit}
              >
                <div className='flex flex-col gap-0'>
                  <Form.Item
                    label='Name'
                    name='name'
                    rules={[
                      { required: true, message: 'This field is required' },
                    ]}
                  >
                    <CustomInput
                      placeholder='Input Name'
                      type='text'
                      className='py-[10px] px-[18px]'
                    />
                  </Form.Item>
                  <Form.Item
                    label='Email'
                    name='email'
                    rules={[
                      { required: true, message: 'This field is required' },
                      { type: 'email', message: 'Please input correct email' },
                    ]}
                  >
                    <CustomInput
                      placeholder='Input Email'
                      type='text'
                      className='py-[10px] px-[18px]'
                    />
                  </Form.Item>
                  <Form.Item
                    label='Description'
                    name='description'
                    rules={[
                      { required: true, message: 'This field is required' },
                    ]}
                  >
                    <TextArea
                      placeholder='Input Description'
                      className='py-[16px] px-[18px]'
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
