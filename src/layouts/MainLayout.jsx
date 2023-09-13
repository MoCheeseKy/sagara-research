import React, { useEffect } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import MainNavbar from '../components/_shared/Navbar/MainNavbar';
import MainFooter from '../components/_shared/Footer/MainFooter';
import { useLocation } from 'react-router-dom';

export default function MainLayout({ title, children }) {
  const { pathname } = useLocation()
  const titlePrefix = 'Sagara Research | ';
  useDocumentTitle(`${titlePrefix}${title}`);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <MainNavbar />
      <main className='bg-gray-100'>{children}</main>
      <MainFooter />
    </>
  );
}
