import React from 'react';
import Typography from '../../../_shared/Typography';
import { BsLinkedin } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { ourTeamsStatisData } from '../../../../data/ourTeamsStaticData';

export default function TeamDetailComponent() {
  const params = useParams();
  const id = params.id;
  return (
    <>
      <div className='pt-[64px]'></div>
      <div className='py-16 flex flex-col items-center justify-center'>
        <div className='flex flex-col md:flex-row gap-[30px] px-[15px] w-full md:w-[85%] max-w-[1080px]'>
          <img
            className='min-w-[320px] aspect-[3/4] bg-cover bg-center rounded'
            src={ourTeamsStatisData[id]?.image}
            alt='profile'
          />
          <div className='flex flex-col flex-grow items-start'>
            <Typography.LargeHeading
              className='text-primary'
              text={ourTeamsStatisData[id]?.name}
              bold
            />
            <Typography.LargeText
              className='mb-5'
              text={ourTeamsStatisData[id]?.position}
            />
            <div className='flex flex-col gap-4'>
              <Typography.MediumText
                text={ourTeamsStatisData[id]?.description}
              />
              <a href={ourTeamsStatisData[id]?.linkedin}>
                <div className='flex gap-2 items-center'>
                  <BsLinkedin className='text-primary text-base' />
                  <Typography.MediumText
                    text='Linkedin'
                    className='hover:text-primary'
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
