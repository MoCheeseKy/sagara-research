import React from 'react';
import Typography from '../_shared/Typography';

import { MdCall } from 'react-icons/md';
import { HiMail } from 'react-icons/hi';

export default function ContactUsComponent() {
  return (
    <>
      <div className='py-16 flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center px-[15px] w-full md:w-[85%] max-w-[1080px]'>
          <div className='flex flex-col justify-center items-center text-center mb-[60px]'>
            <Typography.LargeHeading
              text='Contact Information'
              className='mb-[16px]'
            />
            <Typography.MediumText
              text='Your feedback is invaluable, please dont hesitate to get in touch with us <br/>
We appreciate your trust and look forward to assisting you with any inquiries you may have'
            />
            <div className='flex items-center gap-2'>
              <MdCall className='text-[#e31937] text-base' />
              <a href='tel:003024630820'>
                <Typography.MediumText
                  text='+62 814 1720 2212'
                  className='hover:text-[#e31937]'
                />
              </a>
              <HiMail className='text-[#e31937] text-base' />
              <a href='mailto:office@evolo.com'>
                <Typography.MediumText
                  text='sagararesearch.com'
                  className='hover:text-[#e31937]'
                />
              </a>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 bg-black h-[200px] w-full gap-[30px]'>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
