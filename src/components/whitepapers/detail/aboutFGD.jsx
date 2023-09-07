import React from 'react';
import Typography from '../../_shared/Typography';

export default function AboutFGDComponent({ data }) {
  return (
    <>
      <Typography.MediumText className='text-[#666]' text={data} />
    </>
  );
}
