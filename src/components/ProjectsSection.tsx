
import { Button } from '@/components/ui/button';
import { ExternalLink, Factory, DollarSign, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProjectsSection = () => {
  const { t } = useLanguage();
  const projects = [
    {
      icon: Factory,
      title: t('projects.industrial.title'),
      description: t('projects.industrial.description'),
      impact: t('projects.industrial.impact'),
      tags: ['Power BI', 'SQL Server', 'KPIs Produção'],
      image: '/placeholder.svg',
      link: '#contato',
      featured: true
    },
    {
      icon: DollarSign,
      title: t('projects.financial.title'),
      description: t('projects.financial.description'),
      impact: t('projects.financial.impact'),
      tags: ['Power BI', 'Oracle SQL', 'Análise Financeira'],
      image: '/placeholder.svg',
      link: '#contato'
    },
    {
      icon: Users,
      title: t('projects.commercial.title'),
      description: t('projects.commercial.description'),
      impact: t('projects.commercial.impact'),
      tags: ['Power BI', 'CRM', 'Sales Analytics'],
      image: '/placeholder.svg',
      link: '#contato'
    }
  ];

  const featuredProject = projects.find((project) => project.featured);
  const secondaryProjects = projects.filter((project) => !project.featured);

  const handleProjectAction = (link?: string) => {
    if (!link) return;
    if (link.startsWith('#')) {
      const element = document.querySelector(link);
      element?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    window.open(link, '_blank');
  };

  const renderTags = (tags: string[]) => (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, tagIndex) => (
        <span
          key={tagIndex}
          className="px-2.5 py-0.5 bg-primary/10 text-primary text-xs rounded-full font-medium"
        >
          {tag}
        </span>
      ))}
    </div>
  );

  return (
    <section id="projetos" className="section-spacing section-contrast">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <span className="gradient-text">{t('projects.title')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        {featuredProject && (
          <article className="grid lg:grid-cols-[1.1fr_0.9fr] gap-4 bg-card/95 rounded-xl border border-white/40 shadow-lg p-4 backdrop-blur">
            <div className="relative rounded-xl overflow-hidden min-h-[180px]">
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 via-primary/20 to-transparent"></div>
              <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-white/20 text-white backdrop-blur rounded-full">
                Case real
              </span>
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <featuredProject.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1">
                    {featuredProject.title}
                  </h3>
                  <p className="text-sm uppercase tracking-wide text-primary/70">
                    Business Intelligence
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                {featuredProject.description}
              </p>

              <div className="text-xs text-primary/90 bg-primary/5 border-l-4 border-primary px-3 py-2 rounded-r-xl mb-4">
                {featuredProject.impact}
              </div>

              <div className="mb-3">
                {renderTags(featuredProject.tags)}
              </div>

              <Button
                className="btn-brand w-full sm:w-auto py-2 text-sm"
                onClick={() => handleProjectAction(featuredProject.link)}
              >
                {t('projects.view')}
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </article>
        )}

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {secondaryProjects.map((project, index) => (
            <article
              key={`${project.title}-${index}`}
              className="card-brand overflow-hidden p-0 flex flex-col group rounded-xl"
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40"></div>
                <span className="absolute bottom-4 left-4 bg-white/90 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                  Dashboard
                </span>
              </div>

                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                      <project.icon className="w-4 h-4 text-primary" />
                  </div>
                    <h3 className="text-lg font-semibold text-primary">
                    {project.title}
                  </h3>
                </div>

                  <p className="text-muted-foreground leading-relaxed mb-2 text-xs">
                  {project.description}
                </p>

                  <div className="text-xs text-primary/80 bg-primary/5 border-l-4 border-primary/60 px-3 py-2 rounded-r-xl mb-3">
                  {project.impact}
                </div>

                {renderTags(project.tags)}

                <Button
                  variant="outline"
                    className="btn-outline-brand mt-4 w-full group py-2 text-sm"
                  onClick={() => handleProjectAction(project.link)}
                >
                  {t('projects.view')}
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
