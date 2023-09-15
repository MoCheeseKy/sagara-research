import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// Import Screens :
import Landing from './screens';
import ExploreWhitepapers from './screens/whitepapers/explore-whitepapers';
import AboutUs from './screens/about-us';
import WhitepaperDetail from './screens/whitepapers/detail';
import ContactUs from './screens/contact-us';
import MainLayout from './layouts/MainLayout';

// Importing Image :
import NotFoundImage from './assets/Images/NotFoundPage.svg';

function App() {
  return (
    <Suspense fallback={<>Loading</>}>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route
          path='/research/explore-research'
          element={<ExploreWhitepapers />}
        />
        <Route path='/research/detail/:slug' element={<WhitepaperDetail />} />
        <Route path='/about-us' element={<AboutUs />} />
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
