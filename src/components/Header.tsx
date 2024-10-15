import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      scrollToTop();
    }
  };

  const handleNavClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: target } });
    } else {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isAboutOrBlog = location.pathname === '/about' || location.pathname === '/blog';
  const textColor = isAboutOrBlog || isScrolled ? 'text-gray-900' : 'text-white';
  const headerStyle = isAboutOrBlog || isScrolled
    ? 'bg-white shadow-sm'
    : 'bg-transparent';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${headerStyle}`}
    >
      <div className="relative z-10 max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <nav className="flex items-center space-x-8 rtl:space-x-reverse">
            <Link to="/" onClick={handleLogoClick} className={`text-2xl font-light ${textColor}`}>®Vecco</Link>
            <Link to="/about" className={`hover:text-gold transition-colors duration-300 ${textColor}`}>אודות</Link>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className={`hover:text-gold transition-colors duration-300 ${textColor}`}>שירותים</a>
            <a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')} className={`hover:text-gold transition-colors duration-300 ${textColor}`}>גלריה</a>
            <Link to="/blog" className={`hover:text-gold transition-colors duration-300 ${textColor}`}>בלוג</Link>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className={`hover:text-gold transition-colors duration-300 ${textColor}`}>צור קשר</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;