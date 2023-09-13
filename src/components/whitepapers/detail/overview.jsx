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
        </div>
      </div>
    </>
  );
}
