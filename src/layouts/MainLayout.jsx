import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import MainNavbar from '../components/_shared/Navbar/MainNavbar';
import MainFooter from '../components/_shared/Footer/MainFooter';

export default function MainLayout({ title, children }) {
  const titlePrefix = 'Sagara Research | ';
  useDocumentTitle(`${titlePrefix}${title}`);
  return (
    <>
      <MainNavbar />
      <main>{children}</main>
      <MainFooter />
    </>
  );
}
