import React from 'react';
import MainLayout from '../layouts/MainLayout';
import LandingComponent from '../components/landing';

export default function Home() {
  return (
    <MainLayout title='Landing'>
      <LandingComponent />
    </MainLayout>
  );
}
