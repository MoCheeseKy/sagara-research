import React from 'react';
import CustomButton from '../CustomButton';
import { Dropdown, Space } from 'antd';
import Typography from '../Typography';
import { DownOutlined } from '@ant-design/icons';

export default function MainNavbar() {
  return (
    <>
      <nav className='flex items-center justify-between py-4 px-10'>
        <div className='flex gap-[70px]'>
<<<<<<< HEAD
          <div>
            <a href="home"><img src="assets/images/sagara-logo-bl.png" className='w-[144px]' alt="" /></a>
          </div>
=======
          <div className='w-[224px] h-[30px] bg-[url(/public/Images/Black_Fullname_SagaraLogo.svg)] bg-cover bg-center'></div>
>>>>>>> 7a2dc34b0fd4fd3ac2455b78916ed691b8d16fc0
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
