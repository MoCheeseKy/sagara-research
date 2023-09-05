import React from 'react';
import Typography from '../../../_shared/Typography';
import { BsLinkedin } from 'react-icons/bs';

export default function TeamDetailComponent() {
  return (
    <>
      <div className='pt-[77px]'></div>
      <div className='py-16 flex flex-col items-center justify-center'>
        <div className='flex flex-col md:flex-row gap-[30px] px-[15px] w-full md:w-[85%] max-w-[1080px]'>
          <div className='min-w-[320px] aspect-[3/4] bg-cover bg-center bg-[url(/public/assets/Images/arif.png)] rounded'></div>
          <div className='flex flex-col flex-grow items-start'>
            <Typography.LargeHeading
              className='text-[#a51535]'
              text='Arif Dzikrullah'
              bold
            />
            <Typography.LargeText
              className='mb-5'
              text='Lead Sagara Technology'
            />
            <div className='flex flex-col gap-4'>
              <Typography.MediumText text='John Doe is Founding Partner at Sagara Research, a premier online platform dedicated to empowering tech enthusiasts and professionals with curated whitepaper and expert perspectives in-depth analysis, and real-world case studies.' />
              <Typography.MediumText text='Under John Does leadership, Sagara Research successfully forged strategic collaborations and partnerships with industry leaders, academic institutions, and research organizations. These alliances spearheaded the development of groundbreaking technologies that revolutionized various topic industries such as AI, Cybersecurity, Blockchain, and Data Science, authored by industry-leading experts.' />
              <Typography.MediumText text='Johns holds bachelor degree in Computer Science from Takushoku University Japan.' />
              <a href='google.com'>
                <div className='flex gap-2 items-center'>
                  <BsLinkedin className='text-[#a51535] text-base' />
                  <Typography.MediumText
                    text='Linkedin'
                    className='hover:text-[#a51535]'
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
