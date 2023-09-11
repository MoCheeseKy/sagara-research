import React from 'react';
import Typography from '../../_shared/Typography';

export default function OverviewComponent({ data }) {
  return (
    <>
      <div>
        <div className='flex flex-col md:flex-row gap-16'>
          <div className='flex-grow'>
            <Typography.MediumText
              className='text-[#666]'
              text={data?.overview ? data?.overview : '-'}
            />
          </div>
          <div className='w-full md:w-[35%] md:min-w-[35%] md:max-w-[35%] leading-3'>
            <Typography.SmallHeading text='Details' bold className='mb-4' />
            <div className='grid grid-cols-2 w-full gap-0'>
              <Typography.MediumText className='text-[#666]' text='Editor :' />
              <Typography.MediumText
                className='text-[#666]'
                text={data?.about?.editor ? data?.about?.editor : '-'}
              />
              <Typography.MediumText
                className='text-[#666]'
                text='FGD Date :'
              />
              <Typography.MediumText
                className='text-[#666]'
                text={data?.about?.FGD_date ? data?.about?.FGD_date : '-'}
              />
              <Typography.MediumText
                className='text-[#666]'
                text='Publication :'
              />
              <Typography.MediumText
                className='text-[#666]'
                text={
                  data?.about?.published_at ? data?.about?.published_at : '-'
                }
              />
              <Typography.MediumText className='text-[#666]' text='Topic :' />
              <Typography.MediumText
                className='text-[#666]'
                text={data?.about?.topic ? data?.about?.topic : '-'}
              />
              <Typography.MediumText className='text-[#666]' text='License :' />
              <Typography.MediumText
                className='text-[#666]'
                text={data?.about?.license ? data?.about?.license : '-'}
              />
              <Typography.MediumText className='text-[#666]' text='Length :' />
              <Typography.MediumText
                className='text-[#666]'
                text={`${
                  data?.about?.length ? data?.about?.length : '-'
                }-page(s)`}
              />
            </div>
          </div>
        </div>
        {data?.insight ? (
          <>
            <div className='mt-6'>
              <Typography.SmallHeading
                text='Insight'
                className='text-primary'
                bold
              />
              <div className='grid md:grid-cols-2 gap-12 mt-6'>
                {data?.insight?.map((insight, indexInsight) => (
                  <div key={indexInsight}>
                    <Typography.SmallHeading
                      text={insight?.title}
                      bold
                      className='mb-2'
                    />
                    <Typography.MediumText text={insight?.description} />
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
