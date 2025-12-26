import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ServicesSection from '@/components/ServicesSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';

const Index = () => {
  useEffect(() => {
    // Add smooth scroll behavior to html element
    document.documentElement.classList.add('smooth-scroll');
    
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all fade-in-up elements
    const animateElements = document.querySelectorAll('.fade-in-up');
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('smooth-scroll');
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Index;
