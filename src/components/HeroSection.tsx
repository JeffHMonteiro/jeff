import { Button } from '@/components/ui/button';
import { ArrowRight, Eye } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center pt-20 section-spacing">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-muted-foreground text-2xl font-normal block mb-2">
                {t('hero.greeting')}
              </span>
              <span className="gradient-text block">
                {t('hero.title')}
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-4 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('projetos')}
                className="btn-brand group"
              >
                <Eye className="w-5 h-5 mr-2" />
                {t('hero.cta.projects')}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                onClick={() => scrollToSection('contato')}
                variant="outline"
                className="btn-outline-brand"
              >
                {t('hero.cta.contact')}
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-brand animate-slide-in-right">
                <img 
                  src="/lovable-uploads/975f94de-0606-4d4b-a48d-17e056f2f7cd.png" 
                  alt="Jefferson Monteiro - Especialista em Business Intelligence"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-8 left-8 w-full h-full border-2 border-primary/20 rounded-full"></div>
              <div className="absolute -z-20 top-16 left-16 w-full h-full bg-primary/5 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;