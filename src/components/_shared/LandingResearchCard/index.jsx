import React from 'react';
import Typography from '../Typography';
import CustomButton from '../CustomButton';
import { useNavigate } from 'react-router-dom';
import {
  resetFilter,
  authorHandler,
  topicHandler,
  languageHandler,
} from '../../../store/global/filter';
import { useDispatch } from 'react-redux';

import { AiOutlineUser } from 'react-icons/ai';
import { BsCalendar2Check } from 'react-icons/bs';
import { FiDownload } from 'react-icons/fi';
import { HiLanguage } from 'react-icons/hi2';

import DefaultCover from '../../../assets/Images/DefaultWhitepaperCover.svg';

export default function LandingResearchCard({
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function CardNavigate(type, value) {
    if (type === 'Open Detail') {
      navigate(`/research/detail/${slug}`);
    } else if (type !== 'Open Detail') {
      if (type === 'Topic Filter') {
        dispatch(resetFilter());
        dispatch(topicHandler(value));
      } else if (type === 'Author Filter') {
        dispatch(resetFilter());
        dispatch(authorHandler(value));
      } else {
        dispatch(resetFilter());
        dispatch(languageHandler(value));
      }
      navigate(`/research/explore-research`);
    } else {
      navigate(`/`);
    }
  }

  return (
    <>
      <div className=' flex flex-col md:flex-row shadow rounded mt-[15px] lg:hover:mt-0 lg:mb-0 lg:hover:mb-[15px] duration-300 overflow-hidden bg-white'>
        <img
          onClick={() => CardNavigate('Open Detail')}
          src={image ? image : DefaultCover}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = DefaultCover;
          }}
          alt='defaultCover'
          className='cursor-pointer md:min-w-[260px] md:max-w-[260px] aspect-[3/4] h-fit bg-cover hidden md:block'
        />
        <div className='p-6 md:p-[30px] flex flex-col'>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-6'>
              <img
                onClick={() => CardNavigate('Open Detail')}
                src={image ? image : DefaultCover}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = DefaultCover;
                }}
                alt='defaultCover'
                className='cursor-pointer w-[74px] md:hidden md:min-w-[144px] md:max-w-[144px] aspect-[3/4] h-fit bg-cover'
              />
              <div>
                <Typography.LargeText
                  onClick={() => CardNavigate('Open Detail')}
                  className='cursor-pointer w-fit mb-2'
                  text={title ? `${title}` : '-'}
                  bold
                />
                <div className='flex flex-wrap gap-[6px]'>
                  {topic?.map((topic, indexTopic) => (
                    <React.Fragment key={indexTopic}>
                      <button
                        onClick={() =>
                          CardNavigate('Topic Filter', topic?.title)
                        }
                        className='border-primary cursor-pointer border-[1px] px-4 rounded-lg w-fit'
                      >
                        <Typography.Custom
                          text={topic?.title ? topic?.title : '-'}
                          className='text-primary text-xs'
                        />
                      </button>
                    </React.Fragment>
                  ))}
                </div>
                <div>
                  <button
                    onClick={() => CardNavigate('Author Filter', author)}
                    className='flex cursor-pointer gap-2 mt-2 items-center text-[#808080] hover:text-blue-500'
                  >
                    <AiOutlineUser />
                    <Typography.SmallText text={`${author ? author : '-'}`} />
                  </button>
                  <div className='flex gap-2 text-[#808080] items-center'>
                    <BsCalendar2Check />
                    <Typography.SmallText text={`${date ? date : '-'}`} />
                  </div>
                  <div className='flex gap-2 text-[#808080] items-center'>
                    <FiDownload />
                    <Typography.SmallText
                      text={`${download ? download : '0'}`}
                    />
                  </div>
                  <button
                    onClick={() => CardNavigate('Language Filter', language)}
                  >
                    <div className='flex gap-2 mb-2 text-[#808080] items-center hover:text-blue-500'>
                      <HiLanguage />
                      <Typography.SmallText
                        text={`${language ? language : '-'}`}
                      />
                    </div>
                  </button>
                  <div className='hidden md:flex md:flex-col'>
                    <Typography.Elipsis
                      text={desc}
                      ellipsis={3}
                      className='text-[#808080] cursor-pointer'
                      onClick={() => CardNavigate('Open Detail')}
                    />
                    <CustomButton
                      text='Learn More'
                      className='w-fit text-sm py-2'
                      onClick={() => CardNavigate('Open Detail')}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col md:hidden'>
              <Typography.Elipsis
                text={desc}
                ellipsis={3}
                className='text-[#808080] cursor-pointer'
                onClick={() => CardNavigate('Open Detail')}
              />
              <CustomButton
                text='Learn More'
                className='w-fit text-sm py-2'
                onClick={() => CardNavigate('Open Detail')}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
