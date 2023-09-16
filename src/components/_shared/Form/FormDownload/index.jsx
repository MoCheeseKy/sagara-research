import React from 'react';
import { Form, Checkbox } from 'antd';
import CustomInput from '../CustomInput';
import CustomButton from '../../CustomButton';
import CustomSelect from '../CustomSelect';
import Typography from '../../Typography';

export default function FormDownload({
  initialValues,
  form,
  onSubmitDownload = () => {},
  isLanding = false,
}) {
  return (
    <>
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
              rules={[{ required: true, message: 'This field is required' }]}
            >
              <CustomInput
                placeholder='Name'
                type='text'
                className='py-[6px] px-[18px]'
              />
            </Form.Item>
            <Form.Item
              name='company'
              rules={[{ required: true, message: 'This field is required' }]}
            >
              <CustomInput
                placeholder='Company'
                type='text'
                className='py-[6px] px-[18px]'
              />
            </Form.Item>
            <Form.Item
              name='position'
              rules={[{ required: true, message: 'This Field is required' }]}
            >
              <CustomInput
                placeholder='Title/Position'
                type='text'
                className='py-[6px] px-[18px]'
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
                className='py-[6px] px-[18px]'
              />
            </Form.Item>
            <Form.Item
              name='phone'
              rules={[
                {
                  required: true,
                  message: 'Please Input Number, This field is required',
                },
              ]}
            >
              <CustomInput
                justNumber
                placeholder='Phone'
                type='text'
                className='py-[6px] w-full px-[8px]'
              />
            </Form.Item>
            <Form.Item
              name='country'
              className='bg-white rounded-[10px]'
              rules={[{ required: true, message: 'This Field is required' }]}
            >
              <CustomSelect
                placeholder='Select Research Objective'
                bordered={false}
                className='py-[2px] px-[6px] outline-none shadow-none border-0'
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
                  className={
                    isLanding ? 'text-white text-xs' : 'text-black text-xs'
                  }
                  text='By accepting these Terms and Conditions, you agree to our
                  terms of cooperation, which include the possibility of being
                  contacted by our consultants.'
                />
              </div>
            </Form.Item>
          </div>
          <CustomButton
            text='Download'
            className={`pt-[12px] pb-[12px] ${
              isLanding ? 'text-lg text-bold' : ''
            }`}
          />
        </div>
      </Form>
    </>
  );
}
