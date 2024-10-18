import React, { Suspense, lazy } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'; // React Router v6 imports
import Loader from './component/common/Loader';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

AOS.init(); // Initialize AOS

// Lazy load components
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./component/Projects'));

function App() {
  return (
    <div>
      {/* <Projects/> */}
      {/* Use Suspense to wrap lazy-loaded components */}
      <Suspense fallback={<Loader />}>
        <Routes>
           <Route path="/" element={<Projects />} />
          {/* <Route path="/" element={<About />} /> */}
         

        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
