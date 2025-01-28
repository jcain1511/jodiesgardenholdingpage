// components/Logo.jsx
const Logo = () => {
    return (
      <div className="relative w-96 h-auto"> {/* Increased size with w-96 */}
        <div className="absolute inset-0" style={{ backgroundColor: '#fef7f1' }} />
        <div className="relative overflow-hidden">
          <img 
            src={process.env.PUBLIC_URL + '/logo.svg'}
            alt="Jodie's Garden"
            className="w-full h-auto"
            style={{ mixBlendMode: 'multiply' }}
          />
        </div>
      </div>
    );
  };
  
  export default Logo;