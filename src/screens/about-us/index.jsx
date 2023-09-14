import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import AboutUsComponent from '../../components/about-us';

export default function AboutUs() {
  return (
    <MainLayout title='About Us'>
      <AboutUsComponent />
    </MainLayout>
  );
}
