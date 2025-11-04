// src/components/navbar/navbar.tsx
import { useState, useEffect } from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SanitizedGithub, SanitizedSocial } from '../../interfaces/sanitized-config';

interface NavbarProps {
  github: SanitizedGithub;
  social: SanitizedSocial;
  loading: boolean;
  navItems: Array<{ label: string; link: string }>;
}

const Navbar = ({ github, social, loading, navItems }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const DISPLAY_NAME = 'Vipsa Kamani';
  const SUBTITLE = 'Software Enginerring';

  // Check if screen is mobile size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle smooth scrolling
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // Close menu if open (for mobile)
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    
    // If it's the home link (just #), scroll to top
    if (targetId === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    
    // Remove the # symbol
    const id = targetId.substring(1);
    const element = document.getElementById(id);
    
    if (element) {
      // Scroll to the element
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Update URL without page reload
      window.history.pushState(null, '', targetId);
    }
  };

  // Desktop sidebar navigation
  const DesktopSidebar = () => (
    <nav className="fixed top-0 left-0 w-80 h-full bg-transparent backdrop-blur-sm flex flex-col items-center py-8 shadow-lg z-40">
      {/* Profile Photo */}
      <div className="avatar mb-6">
        <div className="w-36 h-36 rounded-full overflow-hidden ring-4 ring-indigo-500 ring-offset-2 ring-offset-base-100 shadow-lg">
          <img 
            src={`https://github.com/${github.username}.png`} 
            alt={DISPLAY_NAME}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      
      {/* Name and Title */}
      <h1 className="text-xl font-bold text-base-content">
        {loading ? 'Loading...' : DISPLAY_NAME}
      </h1>
      <h2 className="text-indigo-400 mb-8 text-sm text-center uppercase tracking-wide">{SUBTITLE}</h2>
      
      {/* Navigation Links */}
      <div className="w-full px-4">
        <ul className="space-y-2 text-base-content text-center">
          {navItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.link}
                onClick={(e) => scrollToSection(e, item.link)} 
                className="block py-2 hover:text-indigo-400 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Social Links */}
      <div className="mt-auto mb-6 flex justify-center space-x-6">
        <a
          href={`https://github.com/${github.username}`}
          target="_blank"
          rel="noreferrer"
          className="text-base-content hover:text-indigo-400 transition-colors"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
        
        {social?.linkedin && (
          <a
            href={`https://www.linkedin.com/in/${social.linkedin}`}
            target="_blank"
            rel="noreferrer"
            className="text-base-content hover:text-indigo-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        )}
        <a
          href="mailto:vipsakamani11@gmail.com"
          className="text-base-content hover:text-indigo-400 transition-colors"
          aria-label="Email"
        >
          <FaEnvelope size={24} />
        </a>
      </div>
    </nav>
  );

  // Mobile top navigation
  const MobileNavbar = () => (
    <>
      <nav className="fixed top-0 left-0 w-full bg-base-100 bg-opacity-90 backdrop-blur-sm flex justify-between items-center p-4 shadow-md z-40">
        <div className="flex items-center">
          <div className="avatar mr-3">
            <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-indigo-500">
              <img 
                src={`https://github.com/${github.username}.png`} 
                alt={DISPLAY_NAME}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div>
            <h1 className="text-base font-bold text-base-content">
              {loading ? 'Loading...' : DISPLAY_NAME}
            </h1>
            <h2 className="text-indigo-400 text-xs uppercase tracking-wide">{SUBTITLE}</h2>
          </div>
        </div>
        
        <button 
          onClick={toggleMenu}
          className="text-base-content bg-base-300 rounded-full p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <RiCloseLine className="w-6 h-6" />
          ) : (
            <RiMenuLine className="w-6 h-6" />
          )}
        </button>
      </nav>
      
      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-base-300 bg-opacity-95 z-50 pt-20 animate-fadeIn">
          <div className="flex flex-col items-center h-full">
            <ul className="space-y-4 text-center w-full px-6 mb-8">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.link} 
                    onClick={(e) => scrollToSection(e, item.link)}
                    className="block py-3 text-lg hover:text-indigo-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex space-x-8 mt-4">
              <a
                href={`https://github.com/${github.username}`}
                target="_blank"
                rel="noreferrer"
                className="text-base-content hover:text-indigo-400 transition-colors"
              >
                <FaGithub size={28} />
              </a>
              
              {social?.linkedin && (
                <a
                  href={`https://www.linkedin.com/in/${social.linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base-content hover:text-indigo-400 transition-colors"
                >
                  <FaLinkedin size={28} />
                </a>
              )}
              <a
                href="mailto:vipsakamani11@gmail.com"
                className="text-base-content hover:text-indigo-400 transition-colors"
              >
                <FaEnvelope size={28} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );

  // Render appropriate navigation based on screen size
  return isMobile ? <MobileNavbar /> : <DesktopSidebar />;
};

export default Navbar;
