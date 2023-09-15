import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Import Screens :
import Landing from './screens';
import ExploreResearch from './screens/research/explore-research';
import ResearchDetail from './screens/research/detail';
import AboutUs from './screens/about-us';
import ContactUs from './screens/contact-us';

// Importing Image :
import NotFoundImage from './assets/Images/NotFoundPage.svg';

function App() {
  return (
    <Suspense fallback={<>Loading</>}>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route
          path='/research/explore-research'
          element={<ExploreResearch />}
        />
        <Route path='/research/detail/:slug' element={<ResearchDetail />} />
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
