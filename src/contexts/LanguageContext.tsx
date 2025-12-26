import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    // Header
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.services': 'Serviços',
    'nav.certifications': 'Certificações',
    'nav.contact': 'Contato',
    'header.cta': 'Fale Comigo',
    
    // Hero Section
    'hero.greeting': 'Olá, eu sou',
    'hero.title': 'Jefferson Monteiro',
    'hero.subtitle': 'Analista de Dados | Especialista em Power BI',
    'hero.description': 'Transformo dados em insights estratégicos para impulsionar o crescimento do seu negócio através de dashboards inteligentes e análises precisas.',
    'hero.cta.projects': 'Ver Projetos',
    'hero.cta.contact': 'Entrar em Contato',
    
    // About Section
    'about.title': 'Sobre Mim',
    'about.title.primary': 'Sobre',
    'about.title.highlight': 'Mim',
    'about.subtitle': 'Conheça minha trajetória e paixão por dados',
    'about.description1': 'Sou Analista de Dados focado em transformar dados em informação clara para dar previsibilidade e apoiar decisões. Muito além da visualização, mergulho no contexto, estruturo bases, automatizo rotinas e desenho fluxos que reduzem esforço manual e aumentam o controle das áreas.',
    'about.description2': 'Conecto dados, processos e sistemas utilizando Power BI, SQL, Python e Jira, sempre com atenção à qualidade da informação e ao ritmo das demandas. Tenho vivência em ambientes que exigem governança e segurança (ISO 27001 e ISO 27701), o que influencia a forma como organizo dados, acessos e processos.',
    'about.description3': 'Também exploro o desenvolvimento de soluções internas com C# .NET e React para ampliar entregas de automação. Acredito que dados só geram valor quando estão estruturados, acessíveis e alinhados com quem decide — é nesse ponto que concentro meu trabalho e aprendizado contínuo.',
    'about.experience': 'Anos de Experiência',
    'about.projects': 'Projetos Concluídos',
    'about.clients': 'Clientes Satisfeitos',
    'about.certifications': 'Certificações',
    'about.highlights.bi.title': 'Business Intelligence',
    'about.highlights.bi.description': 'Dashboards inteligentes e análises estratégicas',
    'about.highlights.results.title': 'Foco em Resultados',
    'about.highlights.results.description': 'Soluções práticas que geram impacto real',
    'about.highlights.storytelling.title': 'Storytelling Visual',
    'about.highlights.storytelling.description': 'Dados que contam histórias e facilitam decisões',
    'about.highlights.experience.title': 'Experiência Diversificada',
    'about.highlights.experience.description': 'Projetos em TI, indústria, saúde e consultoria',
    
    // Projects Section
    'projects.title': 'Projetos',
    'projects.subtitle': 'Confira alguns dos meus principais trabalhos',
    'projects.industrial.title': 'BI para Operações Industriais',
    'projects.industrial.description': 'Dashboards integrando indicadores de produção e eficiência, otimizando processos e reduzindo custos operacionais.',
    'projects.industrial.impact': 'Redução de 18% no tempo de parada e visibilidade diária da eficiência em todas as plantas.',
    'projects.financial.title': 'DRE e Faturamento',
    'projects.financial.description': 'Visualizações financeiras com KPIs estratégicos para acompanhamento de receitas, custos e margem de lucro.',
    'projects.financial.impact': 'Consolidação automática da DRE aumentou a precisão das projeções de caixa em 25%.',
    'projects.commercial.title': 'CRM Comercial',
    'projects.commercial.description': 'Análise de oportunidades, vendas e taxas de conversão com dashboards interativos para equipes comerciais.',
    'projects.commercial.impact': 'Pipeline mais saudável e crescimento de 12% na conversão priorizando os leads certos.',
    'projects.view': 'Ver Projeto',
    
    // Services Section
    'services.title': 'Serviços',
    'services.subtitle': 'Soluções completas em análise de dados',
    'services.featured.badge': 'Serviço-chave',
    'services.bi.title': 'Dashboard Power BI',
    'services.bi.description': 'Criação de dashboards interativos e relatórios automatizados para visualização de dados em tempo real.',
    'services.bi.feature1': 'Dashboards interativos',
    'services.bi.feature2': 'Relatórios automatizados',
    'services.bi.feature3': 'Visualização em tempo real',
    'services.modeling.title': 'Modelagem de Dados',
    'services.modeling.description': 'Estruturação e otimização de modelos de dados para melhor performance e confiabilidade das análises.',
    'services.modeling.feature1': 'Modelagem dimensional',
    'services.modeling.feature2': 'Data warehouse',
    'services.modeling.feature3': 'Otimização de performance',
    'services.analysis.title': 'Análise de Dados',
    'services.analysis.description': 'Análises estatísticas aprofundadas para identificar padrões, tendências e oportunidades de negócio.',
    'services.analysis.feature1': 'Análises estatísticas',
    'services.analysis.feature2': 'Identificação de padrões',
    'services.analysis.feature3': 'Insights acionáveis',
    'services.automation.title': 'Automação de Processos',
    'services.automation.description': 'Automatização de coleta, tratamento e análise de dados para maior eficiência operacional.',
    'services.automation.feature1': 'ETL automatizado',
    'services.automation.feature2': 'Coleta de dados',
    'services.automation.feature3': 'Processamento eficiente',
    'services.training.title': 'Treinamentos',
    'services.training.description': 'Capacitação de equipes em ferramentas de BI e metodologias de análise de dados.',
    'services.training.feature1': 'Capacitação em BI',
    'services.training.feature2': 'Workshops práticos',
    'services.training.feature3': 'Metodologias de análise',
    'services.consulting.title': 'Consultoria em BI',
    'services.consulting.description': 'Consultoria especializada para implementação de soluções de Business Intelligence sob medida.',
    'services.consulting.feature1': 'Consultoria especializada',
    'services.consulting.feature2': 'Soluções customizadas',
    'services.consulting.feature3': 'Implementação completa',
    'services.stats.dashboards': '+ de 20 dashboards entregues',
    'services.stats.automation': '+ de 15 fluxos automatizados',
    'services.stack.title': 'Ferramentas & Metodologias',
    'services.stack.subtitle': 'DAX Studio, MCP + IA + BI, versionamento profissional de BI e muito mais.',
    
    // Certifications Section
    'certifications.title': 'Certificações',
    'certifications.subtitle': 'Minha formação e certificações técnicas',
    'certifications.fundamentals': 'Fundamentos de Análise de Dados',
    'certifications.fundamentals.description': 'Base sólida em conceitos de análise de dados e estatística aplicada',
    'certifications.powerquery': 'Power Query Essencial',
    'certifications.powerquery.description': 'Transformação e preparação de dados com Power Query',
    'certifications.modeling': 'Modelagem de Dados Essencial',
    'certifications.modeling.description': 'Técnicas avançadas de modelagem dimensional e relacional',
    'certifications.dax': 'Linguagem DAX Essencial',
    'certifications.dax.description': 'Domínio completo da linguagem DAX para cálculos avançados',
    'certifications.storytelling': 'Storytelling e Visualizações de Dados 2.0',
    'certifications.storytelling.description': 'Arte de contar histórias através de dados e visualizações impactantes',
    'certifications.service': 'Power BI Serviço Essencial',
    'certifications.service.description': 'Publicação, compartilhamento e gestão de relatórios no Power BI Service',
    'certifications.pythonImmersion': 'Imersão Dados com Python',
    'certifications.pythonImmersion.description': 'Experiência prática em Python, Pandas e visualização para explorar e comunicar insights',
    'certifications.pythonStatistics': 'Estatística com Python: resumindo e analisando dados',
    'certifications.pythonStatistics.description': 'Aplicação de estatística descritiva e inferencial com Python para apoiar decisões',
    'certifications.pythonPowerBI': 'Python e Power BI: analisando dados do mercado financeiro',
    'certifications.pythonPowerBI.description': 'Integra análises em Python com visualizações no Power BI usando dados reais do mercado financeiro.',
    'certifications.completed': 'Concluído',
    'certifications.inProgress': 'Em andamento',
    'certifications.view': 'Ver Certificado',
    'certifications.evolution.title': 'Sempre em',
    'certifications.evolution.highlight': 'Evolução',
    'certifications.evolution.description': 'Acredito que o aprendizado contínuo é fundamental para entregar sempre as melhores soluções em Business Intelligence e análise de dados.',
    
    // Contact Section
    'contact.title': 'Contato',
    'contact.title.primary': 'Entre em',
    'contact.title.highlight': 'Contato',
    'contact.subtitle': 'Vamos conversar sobre seu projeto',
    'contact.description': 'Estou sempre disponível para discutir novos projetos e oportunidades. Entre em contato comigo através do WhatsApp ou e-mail.',
    'contact.whatsapp': 'WhatsApp',
    'contact.whatsapp.button': 'Iniciar Conversa no WhatsApp',
    'contact.email': 'E-mail',
    'contact.linkedin': 'LinkedIn',
    'contact.location': 'Localização',
    'contact.locationValue': 'Florianópolis, SC - Brasil',
    'contact.direct.title': 'Fale direto comigo',
    'contact.direct.subtitle': 'Me conte rapidamente o desafio e já alinhemos o próximo passo para evoluir seu BI.',
    'contact.responseTime.label': 'Tempo médio de resposta',
    'contact.responseTime.value': '< 1h no WhatsApp',
    'contact.availability.label': 'Disponibilidade',
    'contact.availability.value': 'Seg à Sex · 9h às 19h',
    'contact.channels.title': 'Escolha seu canal favorito',
    'contact.email.cta': 'Enviar e-mail',
    'contact.openChannel': 'Abrir canal',
    
    // Footer
    'footer.tagline': 'Transformando dados em decisões estratégicas',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.built': 'Desenvolvido com',
    'footer.by': 'por Jefferson Monteiro',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.certifications': 'Certifications',
    'nav.contact': 'Contact',
    'header.cta': 'Contact Me',
    
    // Hero Section
    'hero.greeting': 'Hello, I am',
    'hero.title': 'Jefferson Monteiro',
    'hero.subtitle': 'Data Analyst | Power BI Specialist',
    'hero.description': 'I transform data into strategic insights to drive your business growth through intelligent dashboards and precise analysis.',
    'hero.cta.projects': 'View Projects',
    'hero.cta.contact': 'Get in Touch',
    
    // About Section
    'about.title': 'About Me',
    'about.title.primary': 'About',
    'about.title.highlight': 'Me',
    'about.subtitle': 'Learn about my journey and passion for data',
    'about.description1': 'I am a Data Analyst focused on turning data into clear insights that bring predictability and support decisions. Beyond BI and dashboards, I dive into the context, structure datasets, automate routines, and design flows that reduce manual effort and increase control.',
    'about.description2': 'I connect data, processes, and systems using Power BI, SQL, Python, and Jira, always paying attention to information quality and delivery cadence. My experience with governance and security (ISO 27001 and ISO 27701) shapes the way I organize data, access, and processes.',
    'about.description3': 'I also explore building internal solutions with C# .NET and React to expand automation outcomes. I believe data only creates value when it is structured, accessible, and aligned with decision-makers — that is where I focus my work and continuous learning.',
    'about.experience': 'Years of Experience',
    'about.projects': 'Completed Projects',
    'about.clients': 'Satisfied Clients',
    'about.certifications': 'Certifications',
    'about.highlights.bi.title': 'Business Intelligence',
    'about.highlights.bi.description': 'Smart dashboards and strategic analysis',
    'about.highlights.results.title': 'Results Focused',
    'about.highlights.results.description': 'Practical solutions that generate real impact',
    'about.highlights.storytelling.title': 'Visual Storytelling',
    'about.highlights.storytelling.description': 'Data that tells stories and facilitates decisions',
    'about.highlights.experience.title': 'Diverse Experience',
    'about.highlights.experience.description': 'Projects in IT, industry, healthcare and consulting',
    
    // Projects Section
    'projects.title': 'Projects',
    'projects.subtitle': 'Check out some of my main works',
    'projects.industrial.title': 'BI for Industrial Operations',
    'projects.industrial.description': 'Dashboards integrating production and efficiency indicators, optimizing processes and reducing operational costs.',
    'projects.industrial.impact': 'Cut downtime by 18% and delivered daily efficiency visibility across plants.',
    'projects.financial.title': 'Financial Statement and Billing',
    'projects.financial.description': 'Financial visualizations with strategic KPIs for tracking revenue, costs, and profit margins.',
    'projects.financial.impact': 'Automated P&L consolidation improved cash-flow forecasting accuracy by 25%.',
    'projects.commercial.title': 'Commercial CRM',
    'projects.commercial.description': 'Analysis of opportunities, sales, and conversion rates with interactive dashboards for sales teams.',
    'projects.commercial.impact': 'Healthier pipeline and 12% conversion lift by focusing the team on the right leads.',
    'projects.view': 'View Project',
    
    // Services Section
    'services.title': 'Services',
    'services.subtitle': 'Complete data analysis solutions',
    'services.featured.badge': 'Core service',
    'services.bi.title': 'Power BI Dashboards',
    'services.bi.description': 'Creation of interactive dashboards and automated reports for real-time data visualization.',
    'services.bi.feature1': 'Interactive dashboards',
    'services.bi.feature2': 'Automated reports',
    'services.bi.feature3': 'Real-time visualization',
    'services.modeling.title': 'Data Modeling',
    'services.modeling.description': 'Structuring and optimization of data models for better performance and reliability of analyses.',
    'services.modeling.feature1': 'Dimensional modeling',
    'services.modeling.feature2': 'Data warehouse',
    'services.modeling.feature3': 'Performance optimization',
    'services.analysis.title': 'Data Analysis',
    'services.analysis.description': 'In-depth statistical analysis to identify patterns, trends, and business opportunities.',
    'services.analysis.feature1': 'Statistical analysis',
    'services.analysis.feature2': 'Pattern identification',
    'services.analysis.feature3': 'Actionable insights',
    'services.automation.title': 'Process Automation',
    'services.automation.description': 'Automation of data collection, processing, and analysis for greater operational efficiency.',
    'services.automation.feature1': 'Automated ETL',
    'services.automation.feature2': 'Data collection',
    'services.automation.feature3': 'Efficient processing',
    'services.training.title': 'Training',
    'services.training.description': 'Team training in BI tools and data analysis methodologies.',
    'services.training.feature1': 'BI training',
    'services.training.feature2': 'Practical workshops',
    'services.training.feature3': 'Analysis methodologies',
    'services.consulting.title': 'BI Consulting',
    'services.consulting.description': 'Specialized consulting for implementing custom Business Intelligence solutions.',
    'services.consulting.feature1': 'Specialized consulting',
    'services.consulting.feature2': 'Custom solutions',
    'services.consulting.feature3': 'Complete implementation',
    'services.stats.dashboards': '20+ dashboards delivered',
    'services.stats.automation': '15+ automated flows',
    'services.stack.title': 'Tools & Methodologies',
    'services.stack.subtitle': 'DAX Studio, MCP + AI + BI and professional BI versioning.',
    
    // Certifications Section
    'certifications.title': 'Certifications',
    'certifications.subtitle': 'My education and technical certifications',
    'certifications.fundamentals': 'Data Analysis Fundamentals',
    'certifications.fundamentals.description': 'Solid foundation in data analysis concepts and applied statistics',
    'certifications.powerquery': 'Essential Power Query',
    'certifications.powerquery.description': 'Data transformation and preparation with Power Query',
    'certifications.modeling': 'Essential Data Modeling',
    'certifications.modeling.description': 'Advanced dimensional and relational modeling techniques',
    'certifications.dax': 'Essential DAX Language',
    'certifications.dax.description': 'Complete mastery of DAX language for advanced calculations',
    'certifications.storytelling': 'Storytelling and Data Visualizations 2.0',
    'certifications.storytelling.description': 'The art of storytelling through data and impactful visualizations',
    'certifications.service': 'Essential Power BI Service',
    'certifications.service.description': 'Publishing, sharing, and managing reports in Power BI Service',
    'certifications.pythonImmersion': 'Python Data Immersion',
    'certifications.pythonImmersion.description': 'Hands-on practice with Python, Pandas, and visualization to explore and communicate insights',
    'certifications.pythonStatistics': 'Statistics with Python: summarizing and analyzing data',
    'certifications.pythonStatistics.description': 'Descriptive and inferential statistics in Python to support better decisions',
    'certifications.pythonPowerBI': 'Python and Power BI: analyzing financial market data',
    'certifications.pythonPowerBI.description': 'Combines Python analytics with Power BI dashboards using real financial market datasets.',
    'certifications.completed': 'Completed',
    'certifications.inProgress': 'In progress',
    'certifications.view': 'View Certificate',
    'certifications.evolution.title': 'Always',
    'certifications.evolution.highlight': 'Evolving',
    'certifications.evolution.description': 'I believe that continuous learning is fundamental to always deliver the best solutions in Business Intelligence and data analysis.',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.title.primary': 'Get in',
    'contact.title.highlight': 'Touch',
    'contact.subtitle': 'Let\'s talk about your project',
    'contact.description': 'I\'m always available to discuss new projects and opportunities. Contact me via WhatsApp or email.',
    'contact.whatsapp': 'WhatsApp',
    'contact.whatsapp.button': 'Start WhatsApp Conversation',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.location': 'Location',
    'contact.locationValue': 'Florianópolis, SC - Brazil',
    'contact.direct.title': 'Talk directly with me',
    'contact.direct.subtitle': 'Share your context and I\'ll line up the next step to evolve your BI initiatives.',
    'contact.responseTime.label': 'Average response time',
    'contact.responseTime.value': '< 1h on WhatsApp',
    'contact.availability.label': 'Availability',
    'contact.availability.value': 'Mon to Fri · 9am to 7pm',
    'contact.channels.title': 'Pick your favorite channel',
    'contact.email.cta': 'Send email',
    'contact.openChannel': 'Open channel',
    
    // Footer
    'footer.tagline': 'Transforming data into strategic decisions',
    'footer.rights': 'All rights reserved.',
    'footer.built': 'Built with',
    'footer.by': 'by Jefferson Monteiro',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
