import React from 'react';
import Typography from '../Typography';
import CustomButton from '../CustomButton';
import { Link, useNavigate } from 'react-router-dom';
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
      <div className='flex flex-col md:flex-row shadow rounded mt-[15px] lg:hover:mt-0 mb-0 lg:hover:mb-[15px] duration-300 overflow-hidden bg-white'>
        <div className='p-6 md:p-[30px] flex flex-col'>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-6'>
              <div
                onClick={() => CardNavigate('Open Detail')}
                className='w-fit h-fit cursor-pointer'
                style={{
                  backgroundImage: `url(${DefaultCover})`,
                  backgroundSize: 'cover',
                }}
              >
                <img
                  src={image ? image : DefaultCover}
                  alt='defaultCover'
                  className='min-w-[74px] max-w-[74px] md:min-w-[144px] md:max-w-[144px] aspect-[3/4] h-fit bg-cover'
                />
              </div>
              <div>
                <div onClick={() => CardNavigate('Open Detail')}>
                  <Typography.LargeText
                    text={title ? `${title}` : '-'}
                    bold
                    className='mb-2 w-fit cursor-pointer'
                  />
                </div>
                <div className='flex flex-wrap gap-[6px]'>
                  {topic?.map((topic, indexTopic) => (
                    <React.Fragment key={indexTopic}>
                      <div
                        className='border-primary cursor-pointer border-[1px] px-4 rounded-lg w-fit'
                        onClick={() =>
                          CardNavigate('Topic Filter', topic?.title)
                        }
                      >
                        <Typography.Custom
                          text={topic?.title ? topic?.title : '-'}
                          className='text-primary text-xs'
                        />
                      </div>
                    </React.Fragment>
                  ))}
                </div>
                <div>
                  <button
                    onClick={() => CardNavigate('Author Filter', author)}
                    className='flex gap-2 mt-2 items-center text-[#808080] hover:text-blue-500 cursor-pointer'
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
                    className='cursor-pointer'
                  >
                    <div className='flex w-fit gap-2 mb-2 text-[#808080] hover:text-blue-500 items-center'>
                      <HiLanguage />
                      <Typography.SmallText
                        text={`${language ? language : '-'}`}
                      />
                    </div>
                  </button>
                  <div className='hidden md:flex md:flex-col'>
                    <Typography.Elipsis
                      onClick={() => CardNavigate('Open Detail')}
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
              onClick={() => CardNavigate('Open Detail')}
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
