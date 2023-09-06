import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Landing from './screens';
import OurTeams from './screens/about-us/our-teams';
import TeamDetail from './screens/about-us/our-teams/team-detail';
import SagaraResearch from './screens/about-us/sagara-research';
import ExploreWhitepapers from './screens/whitepapers/explore-whitepapers';
import WhitepaperDetail from './screens/whitepapers/detail';
import ContactUs from './screens/contact-us';

function App() {
  return (
    <Suspense fallback={<>Loading</>}>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route
          path='/whitepapers/explore-whitepapers'
          element={<ExploreWhitepapers />}
        />
        <Route path='/whitepapers/detail' element={<WhitepaperDetail />} />
        <Route path='/about-us/our-teams' element={<OurTeams />} />
        <Route
          path='/about-us/our-teams/team-detail'
          element={<TeamDetail />}
        />
        <Route path='/about-us/sagara-research' element={<SagaraResearch />} />
        <Route path='/contact-us' element={<ContactUs />} />

        {/* Handle Not Found */}
        <Route
          path='*'
          element={
            <center>
              <h1>Oops! That page can't be found.</h1>
              <p>
                It looks like nothing was found at this location. Maybe try
                other link ?
              </p>
            </center>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;
