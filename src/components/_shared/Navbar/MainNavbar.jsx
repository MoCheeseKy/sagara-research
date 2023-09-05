import React from 'react';
import CustomButton from '../CustomButton';
import { Dropdown, Space } from 'antd';
import Typography from '../Typography';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function MainNavbar() {
  return (
    <>
      <nav className='flex fixed z-[999] bg-white w-full items-center justify-between box-border py-4 px-10  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.12)]'>
        <div className='flex gap-[70px]'>
          <div>
            <Link to='/'>
              <img
                src='/assets/Images/sagara-logo-bl.png'
                className='w-[124px]'
                alt=''
              />
            </Link>
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
                      <Link to='/whitepapers/explore-whitepapers'>
                        <Typography.MediumText text='Explore Whitepapers' />
                      </Link>
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
                      <Link to='/about-us/our-teams'>
                        <Typography.MediumText text='Our Teams' />
                      </Link>
                    ),
                    key: 0,
                  },
                  {
                    label: (
                      <Link to='/about-us/sagara-research'>
                        <Typography.MediumText text='What is Sagara Research' />
                      </Link>
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
        <Link to='/contact-us'>
          <CustomButton text='Contact Us' />
        </Link>
      </nav>
    </>
  );
}
