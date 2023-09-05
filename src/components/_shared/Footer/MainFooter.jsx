import React from 'react';
import Typography from '../Typography';
import { Input, Button } from 'antd';
import { FiArrowRight } from 'react-icons/fi';

export default function MainFooter() {
  return (
    <>
      <div className='w-[100%] bg-[#303030]'>
        <footer className='flex flex-col md:flex-row min-[1200px]:max-w-[1140px] mx-auto py-[40px] text-white gap-5 px-[15px]'>
          <div className='w-full md:w-[190px] px-[15px]'>
            <Typography.LargeText text='JAKARTA' className='mb-[15px]' />
            <Typography.MediumText
              text='Wisma KGBI Jl.Jend.Sudirman Kav.28 Bendungan Hilir, Kecamatan Tanah Abang, Jakarta Pusat, DKI Jakarta 10210'
              className='text-[#c0c0c0]'
            />
          </div>
          <div className='w-full md:w-[190px] px-[15px]'>
            <Typography.LargeText text='BANDUNG' className='mb-[15px]' />
            <Typography.MediumText
              text='Summarecon Bandung, Magna Commercial No MA03 Rancabolang, Kecamatan Gedebage, Bandung, Jawa Barat 40286'
              className='text-[#c0c0c0]'
            />
          </div>
          <div className='w-full md:w-[190px] px-[15px]'>
            <Typography.LargeText text='FOLLOW US' className='mb-[15px]' />
            <a href='https://www.linkedin.com/company/sagara-asia/mycompany/verification/'>
              <Typography.MediumText
                text='Linkedin'
                className='text-[#c0c0c0]'
              />
            </a>
            <a href='https://www.instagram.com/sagaratechnology/'>
              <Typography.MediumText
                text='Instagram'
                className='text-[#c0c0c0]'
              />
            </a>
            <a href='https://www.facebook.com/Sagaratechnology/'>
              <Typography.MediumText
                text='Facebook'
                className='text-[#c0c0c0]'
              />
            </a>
            <a href='https://www.facebook.com/sagaratech/"'>
              <Typography.MediumText
                text='Twitter'
                className='text-[#c0c0c0]'
              />
            </a>
          </div>
          <div className='w-full md:w-[190px] px-[15px]'>
            <Typography.LargeText text='ACCOUNT' className='mb-[15px]' />
            <a href='/'>
              <Typography.MediumText
                text='Register/Log in'
                className='text-[#c0c0c0]'
              />
            </a>
            <a href='/'>
              <Typography.MediumText
                text='My Account'
                className='text-[#c0c0c0]'
              />
            </a>
          </div>
          <div className='w-18 px-[15px]'>
            <Typography.LargeText
              text='LETS KEEP IN TOUCH'
              className='mb-[15px] flex items-center gap-2'
            />
            <a href='/'>
              <Typography.MediumText
                text='Dont miss any topics from the great people here.<br />Join our Newsletter!'
                className='text-[#c0c0c0]'
              />
            </a>
            <div className='flex flex-row gap-[10px] mt-5'>
              <Input
                size='large'
                type='email'
                placeholder='Enter your email address'
                className='bg-[#212529] text-white focus:text-black placeholder:text-gray-600 focus:bg-white borderRadius: 4px'
              />
              <Button
                size='large'
                color='white'
                className='bg-[#a51535] border-none hover-[#a51535]'
                style={{ color: 'white', borderRadius: '4px' }}
              >
                <FiArrowRight size={16} />
              </Button>
            </div>
          </div>
        </footer>
        {/* Copyrights */}
        <div className='flex justify-center items-center bg-[#303030] border-t-[1px] border-[#484848] py-[15px]'>
          <Typography.SmallText
            text='© 2023 Sagara Research | All Rights Reserved.'
            className='gap-2 my-5 text-white'
          />
        </div>
      </div>
    </>
  );
}
