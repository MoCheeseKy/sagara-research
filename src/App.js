import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Landing from './screens';
import OurTeams from './screens/about-us/our-teams';
import TeamDetail from './screens/about-us/our-teams/team-detail';
import SagaraResearch from './screens/about-us/sagara-research';
import ExploreWhitepapers from './screens/whitepapers/explore-whitepapers';
import WhitepaperDetail from './screens/whitepapers/detail';
import ContactUs from './screens/contact-us';

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
            <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
              <div
                style={{ backgroundImage: `url(${NotFoundImage})` }}
                className='px-[15px] w-full md:w-[85%] max-w-[1080px] aspect-video bg-cover'
              />
            </div>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;
