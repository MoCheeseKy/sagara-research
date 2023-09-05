import React from 'react';
import Typography from '../Typography';

export default function MainFooter() {
  return (
    <>
      <div className='w-100%'>
        <footer className='flex space-x-10 bg-[#303030] py-[40px] text-white gap-5 pl-[5rem] pr-[5rem]'>
          <div className='w-32'>
            <Typography.LargeText text='JAKARTA' className='mb-[15px]' />
            <Typography.MediumText text='Wisma KGBI Jl.Jend.Sudirman Kav.28 Bendungan Hilir, Kecamatan Tanah Abang, Jakarta Pusat, DKI Jakarta 10210' />
          </div>
          <div className='w-32'>
            <Typography.LargeText text='BANDUNG' className='mb-[15px]' />
            <Typography.MediumText text='Summarecon Bandung, Magna Commercial No MA03 Rancabolang, Kecamatan Gedebage, Bandung, Jawa Barat 40286' />
          </div>
          <div className='w-32'>
            <Typography.LargeText text='FOLLOW US' className='mb-[15px]' />
            <a href='https://www.linkedin.com/company/sagara-asia/mycompany/verification/'>
              <Typography.MediumText text='Linkedin' />
            </a>
            <a href='https://www.instagram.com/sagaratechnology/'>
              <Typography.MediumText text='Instagram' />
            </a>
            <a href='https://www.facebook.com/Sagaratechnology/'>
              <Typography.MediumText text='Facebook' />
            </a>
            <a href='https://www.facebook.com/sagaratech/"'>
              <Typography.MediumText text='Twitter' />
            </a>
          </div>
          <div className='w-32'>
            <Typography.LargeText text='ACCOUNT' className='mb-[15px]' />
            <a href='/'>
              <Typography.MediumText text='Register/Log in' />
            </a>
            <a href='/'>
              <Typography.MediumText text='My Account' />
            </a>
          </div>
          <div className='w-18'>
            <Typography.LargeText
              text='LETS KEEP IN TOUCH'
              className='mb-[15px] gap-2'
            />
            <a href='/'>
              <Typography.MediumText
                text='Dont miss any topics from the great people here.
              <br />
              Join our Newsletter!'
              />
            </a>
          </div>
        </footer>
        {/* Copyrights */}
        <div className='flex justify-center items-center bg-[#303030] border-t-[1px] border-white py-[15px]'>
          <Typography.SmallText
            text='© 2023 Sagara Research | All Rights Reserved.'
            className='gap-2 text-white '
          />
        </div>
      </div>
    </>
  );
}
