import Typography from '../Typography';
import CustomButton from '../CustomButton';
import { Link } from 'react-router-dom';
import DefaultCover from '../../../assets/Images/DefaultWhitepaperCover.svg';

export default function WhitepaperCard({
  image,
  title,
  date,
  topic,
  speaker,
  desc,
  slug,
}) {
  return (
    <>
      <div className='flex flex-col md:flex-row shadow rounded mt-[15px] hover:mt-0 mb-0 hover:mb-[15px] duration-300 overflow-hidden bg-white'>
        <div
          className='w-fit h-fit hidden md:flex'
          style={{
            backgroundImage: `url(${DefaultCover})`,
            backgroundSize: 'cover',
          }}
        >
          <img
            src={image ? image : DefaultCover}
            alt=' '
            className='md:min-w-[240px] md:max-w-[240px] aspect-[3/4] h-fit bg-cover'
          />
        </div>
        <div className='p-[30px] flex flex-col'>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-6'>
              <div
                className='md:hidden w-fit h-fit'
                style={{
                  backgroundImage: `url(${DefaultCover})`,
                  backgroundSize: 'cover',
                }}
              >
                <img
                  src={image ? image : DefaultCover}
                  alt=' '
                  className='w-[74px] md:min-w-[240px] md:max-w-[240px] aspect-[3/4] h-fit bg-cover'
                />
              </div>
              <div>
                <div>
                  <Typography.LargeText text={title ? title : '-'} bold />
                </div>
                <div>
                  <Typography.MediumText
                    text={`Topic : ${topic ? topic : '-'}`}
                    className='text-[#808080]'
                  />
                  <Typography.MediumText
                    text={`Speaker : ${speaker ? speaker : '-'}`}
                    className='text-[#808080]'
                  />
                  <Typography.MediumText
                    text={`Date : ${date ? date : '-'}`}
                    className='text-[#808080]'
                  />
                </div>
              </div>
            </div>
            <Typography.Elipsis
              text={desc}
              ellipsis={3}
              className='text-[#808080]'
            />
            <Link to={`/whitepapers/detail/${slug}`}>
              <CustomButton text='Learn More' className='w-fit' />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
