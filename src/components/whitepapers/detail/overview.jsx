import React from 'react';
import Typography from '../../_shared/Typography';

export default function OverviewComponent({
  description,
  editor,
  fgdDate,
  publication,
  topic,
  license,
  length,
}) {
  return (
    <>
      <div>
        <div className='flex flex-col md:flex-row gap-16 mb-16'>
          <div className='flex-grow'>
            <Typography.MediumText className='text-[#666]' text={description} />
          </div>
          <div className='w-full md:w-[35%] md:min-w-[35%] md:max-w-[35%] leading-3'>
            <Typography.SmallHeading text='Details' bold className='mb-4' />
            <div className='grid grid-cols-2 w-full gap-0'>
              <Typography.MediumText className='text-[#666]' text='Editor :' />
              <Typography.MediumText className='text-[#666]' text={editor} />
              <Typography.MediumText
                className='text-[#666]'
                text='FGD Date :'
              />
              <Typography.MediumText className='text-[#666]' text={fgdDate} />
              <Typography.MediumText
                className='text-[#666]'
                text='Publication :'
              />
              <Typography.MediumText
                className='text-[#666]'
                text={publication}
              />
              <Typography.MediumText className='text-[#666]' text='Topic :' />
              <Typography.MediumText className='text-[#666]' text={topic} />
              <Typography.MediumText className='text-[#666]' text='License :' />
              <Typography.MediumText className='text-[#666]' text={license} />
              <Typography.MediumText className='text-[#666]' text='Length :' />
              <Typography.MediumText
                className='text-[#666]'
                text={`${length}-page(s)`}
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-10 md:gap-16 items-center'>
          <Typography.ExtraLargeHeading
            className='text-primary text-center'
            text='Addressing the skills gap in an organization
requires a comprehensive and proactive approach.'
          />
          <div className='bg-[#ddd] rounded p-4'>
            <Typography.MediumText
              className='text-center'
              text='By addressing the root causes of the skills gap and implementing appropriate solutions, organizations can build a highly skilled and adaptable workforce, ready to face the challenges of the future.'
            />
          </div>
          <Typography.ExtraLargeHeading
            className='text-center'
            text='The Solution from Skills Gap Phenomenon'
          />
          <div>{/*  */}</div>
          <div className='flex flex-col w-full items-center gap-4 md:gap-6'>
            <Typography.ExtraLargeHeading
              className='text-primary text-center'
              text='Watch our whitepaper launch this month'
            />
            <iframe
              className='w-full lg:w-[85%]  aspect-video h-fit'
              src='https://www.youtube.com/embed/CXNwHvRZYxE'
              title='Sagara Technology Work Culture. Life in a Tech Company✨'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            />
          </div>
        </div>
      </div>
    </>
  );
}
