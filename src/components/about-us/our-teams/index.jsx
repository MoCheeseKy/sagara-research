import React from 'react';
import Typography from '../../_shared/Typography';
import CustomButton from '../../_shared/CustomButton';
import { Link } from 'react-router-dom';
import { ourTeamsStatisData } from '../../../data/ourTeamsStaticData';

export default function OurTeamsComponent() {
  const TeamsCard = ({ data, id }) => {
    return (
      <>
        <Link to={`/about-us/our-teams/team-detail/${id}`}>
          <div className='flex flex-col justify-center items-center'>
            <img
              alt='profile'
              src={data?.image}
              className='w-[124px] h-[124px] md:w-[150px] md:h-[150px] rounded-full mb-4'
            />
            <Typography.MediumHeading
              className='text-center mb-[5px]'
              text={data?.name}
            />
            <Typography.MediumText
              className='text-center mb-[5px]'
              text={data?.position}
            />
          </div>
        </Link>
      </>
    );
  };
  return (
    <>
      <div
        className='flex h-[100vh] justify-center items-center bg-cover'
        style={{
          backgroundImage:
            'url(../../../assets/Images/business-team-joining-hands-together-city-background.jpg)',
        }}
      >
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
            {ourTeamsStatisData.map((TeamMember, indexTeamMember) => (
              <React.Fragment key={indexTeamMember}>
                <TeamsCard data={TeamMember} id={indexTeamMember} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
