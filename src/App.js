import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Landing from './screens';
import OurTeams from './screens/about-us/our-teams';
import TeamDetail from './screens/about-us/our-teams/team-detail';
import SagaraResearch from './screens/about-us/sagara-research';
import ExploreWhitepapers from './screens/whitepapers/explore-whitepapers';
import AboutUs from './screens/about-us';
import WhitepaperDetail from './screens/whitepapers/detail';
import ContactUs from './screens/contact-us';

import MainLayout from './layouts/MainLayout';

import NotFoundImage from './assets/Images/NotFoundPage.svg';

function App() {
  return (
    <Suspense fallback={<>Loading</>}>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route
          path='/whitepapers/explore-whitepapers'
          element={<ExploreWhitepapers />}
        />
        <Route
          path='/whitepapers/detail/:slug'
          element={<WhitepaperDetail />}
        />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/about-us/our-teams' element={<OurTeams />} />
        <Route
          path='/about-us/our-teams/team-detail/:id'
          element={<TeamDetail />}
        />
        <Route path='/about-us/sagara-research' element={<SagaraResearch />} />
        <Route path='/contact-us' element={<ContactUs />} />

        {/* Handle Not Found */}
        <Route
          path='*'
          element={
            <MainLayout>
              <div className='h-[100vh] flex flex-col justify-center items-center'>
                <div className='h-[64px]'></div>
                <div
                  style={{ backgroundImage: `url(${NotFoundImage})` }}
                  className='px-[15px] w-full lg:w-[60%] aspect-video bg-cover'
                />
              </div>
            </MainLayout>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;
