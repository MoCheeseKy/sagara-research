import React, { useState } from 'react';
import Typography from '../Typography';

export default function CustomTabs({ Options }) {
  const [ActiveTabs, setActiveTabs] = useState(0);
  return (
    <>
      <div className='flex flex-col gap-6'>
        <div className='flex items-center gap-6'>
          {Options?.map((TabsLabel, indexTabsLabel) => (
            <React.Fragment key={indexTabsLabel}>
              <button
                onClick={() => {
                  setActiveTabs(indexTabsLabel);
                }}
              >
                <Typography.SmallHeading
                  text={TabsLabel?.label}
                  bold
                  className={`${
                    ActiveTabs === indexTabsLabel
                      ? 'text-[#a51535]'
                      : 'text-black'
                  }`}
                />
                <div
                  className={`h-[2px] w-full bg-[#a51535] relative opacity-0 duration-100 ${
                    ActiveTabs === indexTabsLabel ? 'opacity-100' : ''
                  }`}
                ></div>
              </button>
            </React.Fragment>
          ))}
        </div>
        {Options?.map((TabsChildren, indexTabsChildren) => (
          <React.Fragment key={indexTabsChildren}>
            {ActiveTabs === indexTabsChildren ? (
              <>{TabsChildren?.children}</>
            ) : (
              <></>
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
