import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchHandler, resetFilter } from '../../../store/global/filter';

import { Button, Drawer, Collapse } from 'antd';
import Typography from '../Typography';
import { Input } from 'antd';

import { GiHamburgerMenu } from 'react-icons/gi';
import { BiChevronRight, BiSearch } from 'react-icons/bi';

import DarkLogo from '../../../assets/Images/SagaraResearchLogo.gif';

export default function MainNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [Search, setSearch] = useState('');

  function FilterSearch(e) {
    if (e.key === 'Enter') {
      dispatch(resetFilter());
      dispatch(searchHandler(Search));
      navigate('/research/explore-research');
    }
  }

  const collapseItem = [
    {
      key: 1,
      label: (
        <Link to='/research/explore-research' style={{ color: 'white' }}>
          RESEARCH
        </Link>
      ),
      style: { borderBottom: '1px solid #404040' },
      showArrow: false,
      collapsible: 'disabled',
    },
    {
      key: 2,
      label: (
        <Link to='/about-us' style={{ color: 'white' }}>
          ABOUT
        </Link>
      ),
      style: { borderBottom: '1px solid #404040' },
      showArrow: false,
      collapsible: 'disabled',
    },
    {
      key: 3,
      label: (
        <Link to='/about-us' style={{ color: 'white' }}>
          CONSULT WITH SAGARA
        </Link>
      ),
      style: { borderBottom: '1px solid #404040' },
      showArrow: false,
      collapsible: 'disabled',
    },
  ];

  return (
    <>
      <nav className='flex fixed z-[999] bg-white w-full items-center justify-between box-border py-[16px] px-[10px] md:px-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.12)]'>
        <div className='flex gap-[70px]'>
          <div>
            <Link to='/'>
              <img src={DarkLogo} className='w-[164px] bg-white' alt='logo' />
            </Link>
          </div>
          <div className='hidden md:flex items-center gap-[30px]'>
            <Link to='/research/explore-research'>
              <Typography.MediumText text='RESEARCH' />
            </Link>
            <Link to='/about-us'>
              <Typography.MediumText text='ABOUT' />
            </Link>
            <Link to='/contact-us'>
              <Typography.MediumText
                bold
                className='text-primary'
                text='CONSULT WITH SAGARA'
              />
            </Link>
          </div>
        </div>
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
          <BiSearch className='lg:hidden' />
          <div className='md:hidden'>
            <Button
              style={{
                borderRadius: '4px',
                border: 'none',
              }}
              onClick={() => setDrawerOpen(true)}
            >
              <GiHamburgerMenu style={{ color: '#555' }} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Navigation for mobile */}
      <Drawer
        title={<span style={{ color: 'white' }}>Menu</span>}
        placement='left'
        closable={false}
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        width={300}
        headerStyle={{ textAlign: 'center', backgroundColor: '#262626' }}
        bodyStyle={{ padding: '0', backgroundColor: '#2a2a2a' }}
        style={{ color: 'white' }}
      >
        <div className='flex flex-col'>
          <Collapse
            accordion
            ghost
            bordered={false}
            items={collapseItem}
            expandIconPosition='end'
            expandIcon={(e) => {
              return (
                <BiChevronRight
                  color='white'
                  size={24}
                  className={`transition ${
                    e.isActive ? 'rotate-90' : 'rotate-0'
                  }`}
                />
              );
            }}
            style={{ color: 'white' }}
          />
        </div>
      </Drawer>
    </>
  );
}
