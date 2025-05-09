import { Navbar } from '@/components/navbar';
import { IntroSection } from '@/components/intro-section';
import { RoleSelectionSection } from '@/components/role-selection-section';
import { InteractiveGraphicSection } from '@/components/interactive-graphic-section';
import { SuccessStoriesSection } from '@/components/success-stories-section';
import { TimelineSection } from '@/components/timeline-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <IntroSection />
        <RoleSelectionSection />
        <InteractiveGraphicSection />
        <SuccessStoriesSection />
        <TimelineSection />
      </main>
      <Footer />
    </div>
  );
}
