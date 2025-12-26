import { Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="section-container">
        <div className="text-center">
          <div className="mb-4">
            <span className="text-xl font-bold gradient-text">Jefferson Monteiro</span>
            <span className="text-muted-foreground ml-2">| Data Solutions</span>
          </div>
          
          <p className="text-muted-foreground mb-4">
            {t('footer.tagline')}
          </p>
          
          <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground">
            <span>© {currentYear} {t('footer.rights')} {t('footer.built')}</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>{t('footer.by')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;