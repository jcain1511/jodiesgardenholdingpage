const BorderPattern = () => {
  return (
    <div className="w-full h-full relative">
      {/* Background div */}
      <div className="absolute inset-0" style={{ backgroundColor: '#fef7f1' }} />
      
      {/* SVG Container */}
      <div className="relative max-w-full overflow-hidden">
        <img 
          src={process.env.PUBLIC_URL + '/border-pattern.svg'}
          alt="Decorative floral border"
          className="w-full h-auto"
          style={{ mixBlendMode: 'multiply' }} // This will make white transparent
        />
      </div>
    </div>
  );
};

export default BorderPattern;