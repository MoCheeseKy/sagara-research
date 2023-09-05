import React from 'react';
import Typography from '../../_shared/Typography';
import CustomButton from '../../_shared/CustomButton';
import { Link } from 'react-router-dom';

export default function OurTeamsComponent() {
  const TeamsCard = ({ name, position }) => {
    return (
      <>
        <Link to='/about-us/our-teams/team-detail'>
          <div className='flex flex-col justify-center items-center'>
            <div className='w-[124px] h-[124px] md:w-[150px] md:h-[150px] bg-black rounded-full mb-4 bg-cover bg-[url(/public/assets/Images/arif.png)]'></div>
            <Typography.MediumHeading
              className='text-center mb-[5px]'
              text={name}
            />
            <Typography.MediumText
              className='text-center mb-[5px]'
              text={position}
            />
          </div>
        </Link>
      </>
    );
  };
  return (
    <>
      <div className='flex h-[100vh] justify-center items-center bg-[url(/public/assets/Images/business-team-joining-hands-together-city-background.jpg)] bg-cover'>
        <div className='flex w-full h-full justify-center items-center bg-[rgba(250,250,250,0.5)]'>
          <div className='flex flex-col items-center gap-5 md:gap-10 px-[15px] w-full md:w-[85%] max-w-[1080px]'>
            <Typography.LargeHeading text='Our Team' bold />
            <Typography.MediumText
              className='text-center'
              text='Meet our team who shared passion for innovation, committed to exploring cutting-edge technologies, pushing boundaries, and driving progress.
Together, we inspiring each other to achieve remarkable results by constantly pushing the boundaries of technology and remain at the forefront of innovation, driving progress and delivering transformative solutions for our great clients.'
            />
            <CustomButton text='Get to know more about Sagara Research' />
          </div>
        </div>
      </div>
      <div className='flex justify-center w-full'>
        <div className='py-16 flex flex-col items-center justify-center px-[15px] w-full md:w-[85%] max-w-[1080px] gap-12'>
          <Typography.LargeHeading text='Sagara Research Leadership' />
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-[50px]'>
            <TeamsCard
              name='Arif Dzikrullah'
              position='Lead Of Sagara Technology'
            />
            <TeamsCard
              name='Arif Dzikrullah'
              position='Lead Of Sagara Technology'
            />
            <TeamsCard
              name='Arif Dzikrullah'
              position='Lead Of Sagara Technology'
            />
            <TeamsCard
              name='Arif Dzikrullah'
              position='Lead Of Sagara Technology'
            />
            <TeamsCard
              name='Arif Dzikrullah'
              position='Lead Of Sagara Technology'
            />
          </div>
        </div>
      </div>
    </>
  );
}
