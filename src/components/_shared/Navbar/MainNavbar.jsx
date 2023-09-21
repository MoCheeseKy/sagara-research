import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchHandler, resetFilter } from '../../../store/global/filter';

import { Button, Drawer } from 'antd';
import Typography from '../Typography';
import { Input } from 'antd';

import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSearch } from 'react-icons/bi';
import { IoCloseOutline } from 'react-icons/io5';

import DarkLogo from '../../../assets/Images/SagaraResearchLogo.gif';

export default function MainNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [Search, setSearch] = useState('');
  const [OpenSearch, setOpenSearch] = useState(false);

  function FilterSearch(e) {
    if (e.key === 'Enter') {
      dispatch(resetFilter());
      dispatch(searchHandler(Search));
      navigate('/research/explore-research');
    }
  }

  function MobileSearchHandler() {
    setSearch('');
    setOpenSearch(!OpenSearch);
  }

  return (
    <>
      <nav className='flex fixed gap-16 lg:gap-0 z-[99999] bg-white w-full items-center justify-between box-border py-[16px] px-[10px] md:px-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.12)]'>
        {OpenSearch ? (
          <>
            <div className='border-b-2 w-full'>
              <Input
                bordered={false}
                placeholder='Find Research'
                className='flex flex-row-reverse justify-end custom-borderless-input'
                onChange={(e) => setSearch(e.target.value)}
                onKeyUp={(e) => FilterSearch(e)}
              />
            </div>
          </>
        ) : (
          <>
            <div className='flex gap-[70px]'>
              <div>
                <Link to='/research'>
                  <img
                    src={DarkLogo}
                    className='w-[164px] bg-white'
                    alt='logo'
                  />
                </Link>
              </div>
              <div className='hidden md:flex items-center gap-[30px]'>
                <Link to='/research/explore-research'>
                  <Typography.MediumText text='RESEARCH' />
                </Link>
                <Link to='/about-sagara-research'>
                  <Typography.MediumText text='ABOUT' />
                </Link>
                <Link to='/research/contact-us'>
                  <Typography.MediumText
                    bold
                    className='text-primary'
                    text='CONSULT WITH SAGARA'
                  />
                </Link>
              </div>
            </div>
          </>
        )}
        <div className='flex flex-row gap-4 items-center'>
          <div className='border-b-2 hidden lg:block'>
            <Input
              bordered={false}
              placeholder='Find Research'
              className='flex flex-row-reverse justify-end custom-borderless-input'
              prefix={<BiSearch />}
              onChange={(e) => setSearch(e.target.value)}
              onKeyUp={(e) => FilterSearch(e)}
            />
          </div>
          {OpenSearch ? (
            <>
              <IoCloseOutline
                className='lg:hidden text-xl'
                onClick={() => MobileSearchHandler()}
              />
            </>
          ) : (
            <>
              <BiSearch
                className='lg:hidden'
                onClick={() => MobileSearchHandler()}
              />
            </>
          )}
          <div className='md:hidden'>
            <Button
              style={{
                borderRadius: '4px',
                border: 'none',
              }}
              onClick={() => setDrawerOpen(!drawerOpen)}
            >
              <GiHamburgerMenu style={{ color: '#555' }} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Navigation for mobile */}
      <Drawer
        placement='top'
        closable={false}
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        height='fit-content'
        bodyStyle={{
          padding: '0',
          backgroundColor: '#ffffff',
          height: 'fit-content',
        }}
        style={{
          color: 'white',
          zIndex: '10',
          paddingTop: '64px',
          paddingBottom: '0px',
        }}
        className='bg-primary'
      >
        <Link className='h-fit m-0 p-0 ' to='/research'>
          <div className='text-black  px-[15px] pt-[24px]'>HOME</div>
        </Link>
        <Link className='h-fit m-0 p-0 ' to='/research/explore-research'>
          <div className='text-black  px-[15px] pt-[24px]'>RESEARCH</div>
        </Link>
        <Link className='h-fit m-0 p-0 ' to='/about-sagara-research'>
          <div className='text-black  px-[15px] pt-[24px]'>ABOUT</div>
        </Link>
        <Link className='h-fit m-0 p-0 ' to='/research/contact-us'>
          <div className='text-black  px-[15px] py-[24px]'>
            CONSULT WITH SAGARA
          </div>
        </Link>
      </Drawer>
    </>
  );
}
