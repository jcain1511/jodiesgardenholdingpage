// MainLayout.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import BorderPattern from './BorderPattern';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  return (
    <div className="h-screen flex flex-col bg-[#fef7f1] overflow-hidden">
      <header className="relative">
        {/* Border Pattern Container with fixed height */}
        <div className="w-full h-32 relative">
          <BorderPattern />
        </div>

        {/* Logo Container - Only show on homepage */}
        {isHomepage && (
          <div className="absolute top-8 sm:top-12 md:top-20 lg:top-24 xl:top-28 2xl:top-32 3xl:top-44 left-1/2 transform -translate-x-1/2 w-full px-4">
            <div className="w-4/5 max-w-sm mx-auto transform scale-75 min-[400px]:scale-80 sm:scale-90 md:scale-95 lg:scale-100 xl:scale-105 2xl:scale-110 3xl:scale-125">
              <img 
                src="/logo.svg"
                alt="Jodie's Garden"
                className="w-full h-auto"
              />
            </div>
          </div>
        )}
      </header>

      {/* Main content wrapper */}
      <div className="flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;