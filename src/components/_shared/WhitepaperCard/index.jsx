import Typography from '../Typography';
import CustomButton from '../CustomButton';
import { Link } from 'react-router-dom';
import DefaultCover from '../../../assets/Images/DefaultWhitepaperCover.svg';
import React from 'react';

export default function WhitepaperCard({
  image,
  title,
  date,
  topic,
  author,
  desc,
  slug,
  download,
}) {
  return (
    <>
      <Link to={`/whitepapers/detail/${slug}`}>
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
                  <div className='flex flex-wrap gap-[6px]'>
                    {topic?.map((topic, indexTopic) => (
                      <React.Fragment key={indexTopic}>
                        <div className='flex gap-[6px] mb-2'>
                          <div className='border-primary border-[1px] px-4 rounded-lg w-fit'>
                            <Typography.Custom
                              text={topic?.title ? topic?.title : '-'}
                              className='text-primary text-xs'
                            />
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                  <div>
                    <Typography.LargeText
                      text={title ? `${title} Testing Testing Testing` : '-'}
                      bold
                    />
                  </div>
                  <div>
                    <Link to={`/whitepapers/explore-whitepapers?author=${author}`}>
                      <Typography.SmallText
                        text={`Author : ${author ? author : '-'}`}
                        className='text-[#808080] mt-2'
                      />
                    </Link>
                    <Typography.SmallText
                      text={`Publish : ${date ? date : '-'}`}
                      className='text-[#808080]'
                    />
                    <Typography.SmallText
                      text={`Download : ${download ? download : '-'}`}
                      className='text-[#808080] mb-2'
                    />
                    <div className='hidden md:flex md:flex-col'>
                      <Typography.Elipsis
                        text={desc}
                        ellipsis={3}
                        className='text-[#808080]'
                      />
                      <Link to={`/whitepapers/detail/${slug}`}>
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
              <Link to={`/whitepapers/detail/${slug}`}>
                <CustomButton
                  text='Learn More'
                  className='w-fit text-sm py-2'
                />
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
