import { Hero } from '@/components/home/hero';
import { ImpactStats } from '@/components/home/impact-stats';
import { AboutSection } from '@/components/home/about-section';
import { ServicePreview } from '@/components/home/service-preview';
import { FeatureProject } from '@/components/home/feature-project';
import { ProductsSection } from '@/components/home/products-section';
import { TrainingSection } from '@/components/home/training-section';
import { Testimonials } from '@/components/home/testimonials';
import { FaqSection } from '@/components/home/faq-section';
import { ContactSection } from '@/components/home/contact-section';
import { CtaBanner } from '@/components/home/cta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <AboutSection />
      <ServicePreview />
      <FeatureProject />
      <ProductsSection />
      <TrainingSection />
      <Testimonials />
      <FaqSection />
      <ContactSection />
      <CtaBanner />
    </>
  );
}
