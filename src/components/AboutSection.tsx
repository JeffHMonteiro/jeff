import { BarChart3, Target, TrendingUp, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();
  const aboutTitlePrimary = t('about.title.primary') || t('about.title');
  const aboutTitleHighlight = t('about.title.highlight');
  const highlights = [
    {
      icon: BarChart3,
      title: t('about.highlights.bi.title'),
      description: t('about.highlights.bi.description')
    },
    {
      icon: Target,
      title: t('about.highlights.results.title'),
      description: t('about.highlights.results.description')
    },
    {
      icon: TrendingUp,
      title: t('about.highlights.storytelling.title'),
      description: t('about.highlights.storytelling.description')
    },
    {
      icon: Users,
      title: t('about.highlights.experience.title'),
      description: t('about.highlights.experience.description')
    }
  ];

  return (
    <section id="sobre" className="section-spacing bg-muted">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {aboutTitlePrimary}
            {aboutTitleHighlight && (
              <>
                {' '}
                <span className="gradient-text">{aboutTitleHighlight}</span>
              </>
            )}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t('about.subtitle')}
          </p>
          
          <div className="text-lg leading-relaxed text-muted-foreground space-y-6">
            <p>
              {t('about.description1')}
            </p>
  
            <p>
              {t('about.description2')}
            </p>
  
            <p>
              {t('about.description3')}
            </p>
          </div>

        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div key={index} className="card-brand text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-primary">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;