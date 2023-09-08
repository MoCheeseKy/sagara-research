import React from 'react';
import Typography from '../../_shared/Typography';
import { GiThreeFriends } from 'react-icons/gi';
import { GiPowerLightning } from 'react-icons/gi';
import { CgCommunity } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import CustomButton from '../../_shared/CustomButton';

export default function SagaraResearchComponent() {
  const phylosophyData = [
    {
      icon: <GiThreeFriends className='text-[#a51535]' />,
      about: 'Collaboration',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: <GiPowerLightning className='text-[#a51535]' />,
      about: 'Empowerment',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: <CgCommunity className='text-[#a51535]' />,
      about: 'Community',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];
  const PhylosophyCard = ({ icon, about, desc }) => {
    return (
      <>
        <div className='flex justify-center items-center flex-col'>
          <div className='text-[84px] mb-4'>{icon}</div>
          <Typography.MediumHeading
            className='text-center mb-[5px]'
            text={about}
          />
          <Typography.MediumText className='text-center' text={desc} />
        </div>
      </>
    );
  };
  return (
    <>
      <div
        className={`flex h-[100vh] justify-center items-center bg-[url('https://img.freepik.com/free-photo/3d-abstract-background-with-low-poly-network-communications-design_1048-15812.jpg?size=626&ext=jpg&uid=R88885619&ga=GA1.1.1504920545.1679825258&semt=sph')] bg-cover`}
      >
        <div className='flex w-full h-full justify-center items-center bg-gradient-to-r from-white to-transparent'>
          <div className='grid md:grid-cols-2 px-[15px] w-full md:w-[85%] max-w-[1080px]'>
            <div>
              <Typography.LargeHeading
                text='What is Sagara Research?'
                bold
                className='mb-10'
              />
              <Typography.MediumText text='Sagara Research is a premier online platform dedicated to empowering tech enthusiasts and professionals with curated whitepaper and expert perspectives. Explore our thought-provoking insights, in-depth analysis, and real-world case studies covering topics such as AI, Cybersecurity, Blockchain, and Data Science, authored by industry-leading experts.' />
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center w-full'>
        <div className='py-16 flex flex-col items-center justify-center px-[15px] w-full md:w-[85%] max-w-[1080px] gap-12'>
          <Typography.LargeHeading text='Our Philosophy' />
          <div className='bg-[#ddd] p-4 rounded '>
            <Typography.MediumText
              text='We embrace open collaboration with the C-Level ini many fields such as academic community, industry partners, and non-profit organizations.
By fostering a culture of sharing knowledge, data, and resources, we believe that we can collectively address complex challenges and drive transformative innovation for the greater good.'
              className='text-center'
            />
          </div>
          <div className='grid md:grid-cols-3 w-full'>
            {phylosophyData.map((phylosophy, indexPhylosophy) => (
              <React.Fragment key={indexPhylosophy}>
                <PhylosophyCard
                  icon={phylosophy.icon}
                  about={phylosophy.about}
                  desc={phylosophy.desc}
                />
              </React.Fragment>
            ))}
          </div>
          <div className='w-full flex flex-col md:flex-row gap-[30px]'>
            <div
              className={`w-full md:w-[40%] md:min-w-[40%] aspect-video bg-cover bg-[url('https://img.freepik.com/free-photo/multiracial-group-young-creative-people-smart-casual-wear-discussing-business-brainstorming-meeting-ideas-mobile-application-software-design-project-modern-office-coworker-teamwork-concept_7861-2693.jpg?w=740&t=st=1691237033~exp=1691237633~hmac=c7a597ee6164db4f1d0a0f0f34ed599610507a942829f983958dd59a6e09109e')] rounded`}
            />
            <div className='flex flex-col flex-grow'>
              <Typography.LargeHeading text='Our Team' className='mb-4' />
              <Typography.MediumText
                text='Meet our team who is composed of dedicated and passionate individuals who share a common goal: to push the boundaries of technology research and make a positive impact on the world.'
                className='mb-4'
              />
              <Link to='/about-us/our-teams'>
                <CustomButton text='Learn More' />
              </Link>
            </div>
          </div>
          <div className='w-full flex flex-col-reverse md:flex-row gap-[30px]'>
            <div className='flex flex-col flex-grow'>
              <Typography.LargeHeading text='Our Journey' className='mb-4' />
              <Typography.MediumText text='Collaboration is at the core of our journey. We believe that the best ideas come from diverse perspectives working together. Our team fosters a culture of open communication, mutual respect, and synergy. By combining our unique strengths and skills, we create a powerful force for innovation.' />
            </div>
            <div
              className={`w-full md:w-[40%] md:min-w-[40%] aspect-video bg-cover bg-[url('https://img.freepik.com/free-photo/close-up-hands-with-different-items_23-2148925821.jpg?w=826&t=st=1691237159~exp=1691237759~hmac=bb5843f03687f8f67a167ac64cb4e7daff1efe45c7ec9a35d88a4c44362a445f')] rounded`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
