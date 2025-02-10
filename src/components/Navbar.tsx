import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    
    if (path === 'projects') {
      // Navigate to projects page
      window.location.href = '/projects';
    } else {
      // Handle scroll navigation for other items
      if (!window.location.pathname.includes('projects')) {
        const element = document.getElementById(path);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setIsMenuOpen(false);
        }
      } else {
        window.location.href = `/#${path}`;
      }
    }
  };

  const menuItems = [
    { name: "Home", url: "home" },
    { name: "About", url: "about" },
    { name: "Projects", url: "projects" },
    { name: "Experience", url: "experience" },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 left-0 
      bg-white/90 dark:bg-[#121212]/90 
      backdrop-blur-sm 
      border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              onClick={(e) => handleNavigation(e, 'home')}
              className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Shin Kaung
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.url}`}
                onClick={(e) => handleNavigation(e, item.url)}
                className="relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors
                  after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:origin-left
                  after:scale-x-0 after:bg-blue-500 after:transition-transform after:duration-300
                  hover:after:scale-x-100"
              >
                {item.name}
              </a>
            ))}
            
            {/* Theme Switcher */}
            <div className="flex items-center gap-2 ml-4">
              <button
                onClick={() => setTheme('light')}
                className={`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 
                  ${theme === 'light' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
                aria-label="Light theme"
              >
                🌞
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 
                  ${theme === 'dark' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
                aria-label="Dark theme"
              >
                🌙
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-white dark:bg-[#121212] border-b border-gray-200 dark:border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.url}`}
                  onClick={(e) => handleNavigation(e, item.url)}
                  className="relative block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white
                    after:absolute after:left-3 after:bottom-1 after:h-[2px] after:w-[calc(100%-24px)] after:origin-left
                    after:scale-x-0 after:bg-blue-500 after:transition-transform after:duration-300
                    hover:after:scale-x-100"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}