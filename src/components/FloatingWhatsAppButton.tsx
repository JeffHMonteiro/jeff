import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const FloatingWhatsAppButton = () => {
  const { t } = useLanguage();

  const openWhatsApp = () => {
    window.open('https://wa.me/5548998135524', '_blank');
  };

  return (
    <Button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 btn-brand shadow-lg hover:shadow-xl transition-all duration-300 rounded-full w-14 h-14 p-0 lg:w-auto lg:h-auto lg:px-6 lg:py-3 lg:rounded-md"
      aria-label={t('header.cta')}
    >
      <Phone className="w-5 h-5 lg:w-4 lg:h-4 lg:mr-2" />
      <span className="hidden lg:inline">{t('header.cta')}</span>
    </Button>
  );
};

export default FloatingWhatsAppButton;