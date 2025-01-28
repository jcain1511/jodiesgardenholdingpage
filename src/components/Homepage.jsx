import React from 'react';

const Homepage = () => {
  return (
    <div className="flex-1 flex flex-col">
      {/* Main content - adjusted margins */}
      <div className="flex-1 px-4 mt-64 sm:mt-72 md:mt-80 lg:mt-96 xl:mt-[400px] 2xl:mt-[450px] 3xl:mt-[500px]">
        <h1 className="text-[#e26016] text-2xl md:text-3xl text-center">
          Blog posts are on their way, thanks for showing interest! See you soon :)
        </h1>
      </div>
      
      {/* Footer */}
      <footer className="w-full bg-[#e26016] text-white py-2 text-center">
        <a
          href="https://www.instagram.com/jodies.garden"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 hover:opacity-80"
        >
          <img 
            src="/instagram.svg"
            alt="Instagram"
            className="w-5 h-5 filter brightness-0 invert" // This makes the SVG white
          />
          <span>Follow me on Instagram</span>
        </a>
      </footer>
    </div>
  );
};

export default Homepage;