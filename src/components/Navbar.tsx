
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

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
              <span className="text-xl font-bold ml-2">Visão Clara</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">Início</a>
            <a href="#servicos" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">Serviços</a>
            <a href="#sobre" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">Sobre</a>
            <a href="#contato" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">Contato</a>
          </nav>
          
          <div className="hidden md:block">
            <Button className="bg-primary-600 hover:bg-primary-700">
              Agendar Consulta
            </Button>
          </div>
          
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
              <a href="#servicos" className="text-gray-700 hover:text-primary-600 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Serviços</a>
              <a href="#sobre" className="text-gray-700 hover:text-primary-600 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Sobre</a>
              <a href="#contato" className="text-gray-700 hover:text-primary-600 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Contato</a>
              <Button className="bg-primary-600 hover:bg-primary-700 w-full">
                Agendar Consulta
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
