
import {
  BarChart3,
  Database,
  Presentation,
  Target,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { t } = useLanguage();
  const services = [
    {
      icon: BarChart3,
      title: t('services.bi.title'),
      description: t('services.bi.description'),
      features: [t('services.bi.feature1'), t('services.bi.feature2'), t('services.bi.feature3')]
    },
    {
      icon: Database,
      title: t('services.modeling.title'),
      description: t('services.modeling.description'),
      features: [t('services.modeling.feature1'), t('services.modeling.feature2'), t('services.modeling.feature3')]
    },
    {
      icon: Presentation,
      title: t('services.analysis.title'),
      description: t('services.analysis.description'),
      features: [t('services.analysis.feature1'), t('services.analysis.feature2'), t('services.analysis.feature3')]
    },
    {
      icon: Zap,
      title: t('services.automation.title'),
      description: t('services.automation.description'),
      features: [t('services.automation.feature1'), t('services.automation.feature2'), t('services.automation.feature3')]
    },
    {
      icon: Target,
      title: t('services.training.title'),
      description: t('services.training.description'),
      features: [t('services.training.feature1'), t('services.training.feature2'), t('services.training.feature3')]
    },
    {
      icon: Presentation,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      features: [t('services.consulting.feature1'), t('services.consulting.feature2'), t('services.consulting.feature3')]
    }
  ];

  const featuredServices = services.slice(0, 2);
  const coreServices = services.slice(2);

  const serviceStats = [
    { value: '', label: t('services.stats.dashboards') },
    { value: '', label: t('services.stats.automation') }
  ];

  const stackItems = [
    'Power BI',
    'SQL Server',
    'Power Query',
    'DAX',
    'Python',
    'Azure Synapse',
    'ETL',
    'Storytelling',
    'DAX Studio',
    'MCP + IA + BI',
    'Versionamento de BI'
  ];

  return (
    <section id="servicos" className="section-spacing section-pattern">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <span className="gradient-text">{t('services.title')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mb-10">
          {featuredServices.map((service, index) => (
            <article
              key={`featured-${service.title}-${index}`}
              className="rounded-2xl p-6 lg:p-7 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-brand flex flex-col gap-4"
            >
              <span className="inline-flex items-center text-xs uppercase tracking-wide font-semibold bg-white/20 text-white/90 px-3 py-1 rounded-full w-fit">
                {t('services.featured.badge')}
              </span>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm text-white/85 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 text-sm">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span className="text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service, index) => (
            <article key={`core-${service.title}-${index}`} className="card-brand h-full flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  {service.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-12">
          {serviceStats.map((stat, index) => (
            <div key={stat.label + index} className="card-brand text-center py-6">
              {stat.value && <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>}
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="card-brand mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-primary mb-1">{t('services.stack.title')}</h3>
            <p className="text-muted-foreground text-sm max-w-xl">{t('services.stack.subtitle')}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {stackItems.map((item) => (
              <span
                key={item}
                className="px-3 py-1 text-sm font-medium rounded-full bg-primary/5 text-primary border border-primary/10"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
