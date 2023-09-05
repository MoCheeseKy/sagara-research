import React from 'react';
import CustomButton from '../CustomButton';
import { Dropdown, Space } from 'antd';
import Typography from '../Typography';
import { DownOutlined } from '@ant-design/icons';

export default function MainNavbar() {
  return (
    <>
      <nav className='flex fixed bg-white w-full items-center justify-between box-border py-4 px-10  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.12)]'>
        <div className='flex gap-[70px]'>
          <div>
            <a href='home'>
              <img
                src='/assets/Images/sagara-logo-bl.png'
                className='w-[124px]'
                alt=''
              />
            </a>
          </div>
          <div className='flex items-center gap-[30px]'>
            <Typography.MediumText text='Consult With Sagara' />
            <Dropdown
              className='text-black'
              menu={{
                items: [
                  {
                    key: 0,
                    label: (
                      <button>
                        <Typography.MediumText text='Explore Whitepapers' />
                      </button>
                    ),
                  },
                ],
              }}
            >
              <Space>
                <Typography.MediumText text='Whitepapers' />
                <DownOutlined />
              </Space>
            </Dropdown>
            <Dropdown
              className='text-black'
              menu={{
                items: [
                  {
                    label: (
                      <button>
                        <Typography.MediumText text='Our Teams' />
                      </button>
                    ),
                    key: 0,
                  },
                  {
                    label: (
                      <button>
                        <Typography.MediumText text='What is Sagara Research' />
                      </button>
                    ),
                    key: 1,
                  },
                ],
              }}
            >
              <Space>
                <Typography.MediumText text='About Us' />
                <DownOutlined />
              </Space>
            </Dropdown>
          </div>
        </div>
        <CustomButton text='Contact Us' />
      </nav>
    </>
  );
}
