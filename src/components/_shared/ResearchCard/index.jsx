import Typography from '../Typography';
import CustomButton from '../CustomButton';
import { Link } from 'react-router-dom';
import DefaultCover from '../../../assets/Images/DefaultWhitepaperCover.svg';
import React from 'react';

import { AiOutlineUser } from 'react-icons/ai';
import { BsCalendar2Check } from 'react-icons/bs';
import { FiDownload } from 'react-icons/fi';
import { HiLanguage } from 'react-icons/hi2';

export default function ResearchCard({
  image,
  title,
  date,
  topic,
  author,
  desc,
  slug,
  download,
  language,
}) {
  return (
    <>
      <div className='flex flex-col md:flex-row shadow rounded mt-[15px] hover:mt-0 mb-0 hover:mb-[15px] duration-300 overflow-hidden bg-white'>
        <div className='p-6 md:p-[30px] flex flex-col'>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-6'>
              <div
                className='w-fit h-fit'
                style={{
                  backgroundImage: `url(${DefaultCover})`,
                  backgroundSize: 'cover',
                }}
              >
                <img
                  src={image ? image : DefaultCover}
                  alt=' '
                  className='w-[74px] md:min-w-[144px] md:max-w-[144px] aspect-[3/4] h-fit bg-cover'
                />
              </div>
              <div>
                <div>
                  <Typography.LargeText
                    text={title ? `${title}` : '-'}
                    bold
                    className='mb-2'
                  />
                </div>
                <div className='flex flex-wrap gap-[6px]'>
                  {topic?.map((topic, indexTopic) => (
                    <React.Fragment key={indexTopic}>
                      <Link
                        to={`/research/explore-research?topic=${topic?.title}`}
                        onClick={() =>
                          (window.location.href = `/research/explore-research?topic=${topic?.title}`)
                        }
                      >
                        <div className='border-primary border-[1px] px-4 rounded-lg w-fit'>
                          <Typography.Custom
                            text={topic?.title ? topic?.title : '-'}
                            className='text-primary text-xs'
                          />
                        </div>
                      </Link>
                    </React.Fragment>
                  ))}
                </div>
                <div>
                  <Link
                    to={`/research/explore-research?author=${author}`}
                    onClick={() =>
                      (window.location.href = `/research/explore-research?author=${author}`)
                    }
                    className='flex gap-2 mt-2 items-center text-[#808080] hover:text-blue-500'
                  >
                    <AiOutlineUser />
                    <Typography.SmallText text={`${author ? author : '-'}`} />
                  </Link>
                  <div className='flex gap-2 text-[#808080] items-center'>
                    <BsCalendar2Check />
                    <Typography.SmallText text={`${date ? date : '-'}`} />
                  </div>
                  <div className='flex gap-2 text-[#808080] items-center'>
                    <FiDownload />
                    <Typography.SmallText
                      text={`${download ? download : '-'}`}
                    />
                  </div>
                  <Link
                    to={`/research/explore-research?language=${language}`}
                    onClick={() =>
                      (window.location.href = `/research/explore-research?language=${language}`)
                    }
                  >
                    <div className='flex gap-2 mb-2 text-[#808080] hover:text-blue-500 items-center'>
                      <HiLanguage />
                      <Typography.SmallText
                        text={`${language ? language : '-'}`}
                      />
                    </div>
                  </Link>
                  <div className='hidden md:flex md:flex-col'>
                    <Typography.Elipsis
                      text={desc}
                      ellipsis={3}
                      className='text-[#808080]'
                    />
                    <Link to={`/research/detail/${slug}`}>
                      <CustomButton
                        text='Learn More'
                        className='w-fit text-sm py-2'
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col md:hidden'>
            <Typography.Elipsis
              text={desc}
              ellipsis={3}
              className='text-[#808080]'
            />
            <Link to={`/research/detail/${slug}`}>
              <CustomButton text='Learn More' className='w-fit text-sm py-2' />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
