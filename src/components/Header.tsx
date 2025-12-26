import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    /*{ id: 'inicio', label: t('nav.home') },*/
    { id: 'sobre', label: t('nav.about') },
    { id: 'projetos', label: t('nav.projects') },
    { id: 'servicos', label: t('nav.services') },
    { id: 'certificacoes', label: t('nav.certifications') },
    { id: 'contato', label: t('nav.contact') },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
    }`}>
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div 
            className="text-xl lg:text-2xl font-bold cursor-pointer"
            onClick={() => scrollToSection('inicio')}
          >
            <span className="gradient-text">Jefferson Monteiro</span>
            <span className="text-muted-foreground ml-1 text-sm lg:text-base font-normal">
              | Data Solutions
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-16">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Language Selector - Desktop */}
          <div className="hidden lg:flex items-center">
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border">
            <nav className="section-container py-4">
              <div className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <LanguageSelector />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;