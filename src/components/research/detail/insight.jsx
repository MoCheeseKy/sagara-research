import React from 'react';
import Typography from '../../_shared/Typography';

export default function InsightComponent({ data }) {
  return (
    <>
      {data?.insight ? (
        <div className='grid gap-6'>
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
      ) : (
        <></>
      )}
    </>
  );
}
