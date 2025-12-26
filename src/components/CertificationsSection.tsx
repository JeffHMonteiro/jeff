
import { Button } from '@/components/ui/button';
import { Award, Database, ExternalLink, Layers, PenSquare, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CertificationsSection = () => {
  const { t } = useLanguage();
  const viewLabel = t('certifications.view');
  const inProgressLabel = t('certifications.inProgress');
  const brandStyles: Record<string, { bg: string; badge: string }> = {
    Xperium: {
      bg: 'bg-primary/10 text-primary',
      badge: 'from-primary/20'
    },
    Alura: {
      bg: 'bg-amber-100 text-amber-800',
      badge: 'from-amber-200'
    }
  };
  const defaultBrandStyle = brandStyles['Xperium'];

  const certifications = [
    {
      title: t('certifications.fundamentals'),
      provider: 'Xperium',
      description: t('certifications.fundamentals.description'),
      status: t('certifications.completed'),
      link: 'https://app.xperiun.com/certificado/1vuo6f3i6jeyiq83yguk',
      featured: false,
      icon: Sparkles
    },
    {
      title: t('certifications.powerquery'),
      provider: 'Xperium',
      description: t('certifications.powerquery.description'),
      status: t('certifications.completed'),
      link: 'https://app.xperiun.com/certificado/h1xdb7jhb17i0bngf0ca',
      featured: false,
      icon: Database
    },
    {
      title: t('certifications.modeling'),
      provider: 'Xperium',
      description: t('certifications.modeling.description'),
      status: t('certifications.completed'),
      link: 'https://app.xperiun.com/certificado/qdfqjmb4ux4cn5sf6ejd',
      featured: false,
      icon: Layers
    },
    {
      title: t('certifications.dax'),
      provider: 'Xperium',
      description: t('certifications.dax.description'),
      status: t('certifications.completed'),
      link: 'https://app.xperiun.com/certificado/uebtoy48bbe0c4axp6sh',
      featured: true,
      icon: TrendingUp
    },
    {
      title: t('certifications.storytelling'),
      provider: 'Xperium',
      description: t('certifications.storytelling.description'),
      status: t('certifications.completed'),
      link: 'https://app.xperiun.com/certificado/uw7kd1owvwkrcwwo40q8',
      featured: false,
      icon: PenSquare
    },
    {
      title: t('certifications.service'),
      provider: 'Xperium',
      description: t('certifications.service.description'),
      status: t('certifications.completed'),
      link: 'https://app.xperiun.com/certificado/mq3lwhky8wd9gk2pr550',
      featured: false,
      icon: ShieldCheck
    },
    {
      title: t('certifications.pythonImmersion'),
      provider: 'Alura',
      description: t('certifications.pythonImmersion.description'),
      status: t('certifications.completed'),
      link: 'https://cursos.alura.com.br/user/jefferson-h-monteiro/immersion/certificate/86684',
      featured: true,
      icon: Database
    },
    {
      title: t('certifications.pythonStatistics'),
      provider: 'Alura',
      description: t('certifications.pythonStatistics.description'),
      status: t('certifications.completed'),
      link: 'https://cursos.alura.com.br/user/jefferson-h-monteiro/course/estatistica-python-resumindo-analisando-dados/certificate',
      featured: false,
      icon: TrendingUp
    },
    {
      title: t('certifications.pythonPowerBI'),
      provider: 'Alura',
      description: t('certifications.pythonPowerBI.description'),
      status: t('certifications.inProgress'),
      link: '',
      featured: false,
      icon: Database
    }
  ];

  return (
    <section id="certificacoes" className="section-spacing section-gradient">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <span className="gradient-text">{t('certifications.title')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('certifications.subtitle')}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {certifications.map((cert, index) => {
            const brand = brandStyles[cert.provider] || defaultBrandStyle;
            const isFeatured = cert.featured;
            return (
              <article
                key={`${cert.title}-${index}`}
                className={`relative overflow-hidden rounded-[28px] border bg-white shadow-lg p-5 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 ${
                  isFeatured ? 'shadow-2xl scale-[1.01]' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-transparent pointer-events-none" />
                <div className="relative flex items-start justify-between">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center text-primary ${brand.bg}`}>
                    {cert.icon ? <cert.icon className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                    {cert.status}
                  </span>
                </div>

                <div className="relative">
                  <h3 className="text-xl font-semibold text-primary mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="relative flex flex-wrap items-center gap-3 pt-2 mt-auto">
                  <Button
                    size="sm"
                    className="btn-brand px-4 py-2"
                    disabled={cert.status === inProgressLabel || !cert.link}
                    onClick={() => {
                      if (cert.status === inProgressLabel || !cert.link) return;
                      window.open(cert.link, '_blank');
                    }}
                  >
                    {cert.status === inProgressLabel ? inProgressLabel : viewLabel}
                    {cert.status !== inProgressLabel && <ExternalLink className="w-3 h-3 ml-2" />}
                  </Button>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${brand.badge} to-white text-primary/80 border border-white/60`}>
                    {cert.provider}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <div className="card-brand w-full text-center">
            <h3 className="text-xl font-semibold mb-4">
              {t('certifications.evolution.title')} <span className="text-primary">{t('certifications.evolution.highlight')}</span>
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {t('certifications.evolution.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
