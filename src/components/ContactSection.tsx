import { MessageCircle, Linkedin, Instagram, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();
  const contactTitlePrimary = t('contact.title.primary') || t('contact.title');
  const contactTitleHighlight = t('contact.title.highlight');
  const openWhatsApp = () => {
    window.open('https://wa.me/5548998135524', '_blank');
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/jefferson-monteiro-683460181/', '_blank');
  };

  const openInstagram = () => {
    window.open('https:/"#"', '_blank');
  };

  const openEmail = () => {
    window.open('mailto:jefferson.h.monteiro@gmail.com', '_blank');
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      label: t('contact.whatsapp'),
      value: '(48) 99813-5524',
      action: openWhatsApp,
      primary: true
    },
    {
      icon: Linkedin,
      label: t('contact.linkedin'),
      value: 'Jefferson Monteiro',
      action: openLinkedIn,
      primary: false
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@jefferson.monteiro',
      action: openInstagram,
      primary: false
    }
  ];

  return (
    <section id="contato" className="section-spacing bg-muted">
      <div className="section-container">
        <article className="rounded-3xl border border-primary/10 bg-white p-8 shadow-xl">
          <div className="space-y-8">
            <div>
                <p className="text-sm uppercase tracking-[0.3em] text-primary/80">
                  {t('contact.direct.title')}
                </p>
                <h3 className="text-3xl font-semibold mt-3 text-primary">
                  {contactTitlePrimary}
                  {contactTitleHighlight && ` ${contactTitleHighlight}`}
                </h3>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground max-w-2xl">
                {t('contact.direct.subtitle')}
              </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {contactMethods.map((method, index) => (
                  <button
                    key={index}
                    onClick={method.action}
                    className={`rounded-3xl border p-5 text-left transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                      method.primary
                        ? 'border-primary/30 bg-primary/5'
                        : 'border-border bg-muted/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`rounded-2xl px-3 py-2 text-sm font-semibold ${
                        method.primary ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                      }`}>
                        {method.label}
                      </div>
                      <method.icon className={`w-5 h-5 ${method.primary ? 'text-primary' : 'text-primary/70'}`} />
                    </div>
                    <p className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                      {method.value}
                    </p>
                    <span className="mt-2 inline-flex items-center text-sm font-medium text-primary">
                      {method.primary ? t('contact.whatsapp.button') : t('contact.openChannel')}
                    </span>
                  </button>
                ))}
              </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <div className="inline-flex items-center gap-2 rounded-2xl border border-primary/20 bg-primary/5 px-4 py-2 text-primary">
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium">{t('contact.locationValue')}</span>
                </div>
                <button
                  onClick={openEmail}
                  className="inline-flex items-center gap-2 rounded-2xl border border-primary/20 px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/5"
                >
                  <Mail className="w-4 h-4" />
                  {t('contact.email.cta')}
                </button>
              </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ContactSection;