
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-xl font-bold text-primary-600">Ótica Pública</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">Início</a>
            <a href="#objetivos" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">Objetivos</a>
            <a href="#impacto" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">Impacto</a>
            <a href="#beneficios" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">Benefícios</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="text-gray-700 hover:text-primary-600 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Início</a>
              <a href="#objetivos" className="text-gray-700 hover:text-primary-600 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Objetivos</a>
              <a href="#impacto" className="text-gray-700 hover:text-primary-600 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Impacto</a>
              <a href="#beneficios" className="text-gray-700 hover:text-primary-600 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Benefícios</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
