import { SuccessStoryCard } from './success-story-card';

const stories = [
  {
    imageSrc: "/farmer-john.jpg",
    imageAlt: "Farmer John smiling in his field",
    aiHint: "happy farmer field",
    category: "Farmer" as const,
    title: "Farmer John's increased earnings",
    description: "Farmer John will build a anaerobic digester on my farm. By joining BioNet, he will increase his income and have a positive impact on irish economy.",
    quote: "I'm looking forward to use resources from farming to produce sustainable gas!"
  },
  {
    imageSrc: "/gas-pipes.jpg",
    imageAlt: "Modern eco-friendly factory",
    aiHint: "modern factory eco",
    category: "Industry" as const,
    title: "ChipMan's Sustainable Shift",
    description: "ChipMap partnered with BioNet to source bio gas for their exhaust cleaning, resulting in a 30% reduction in their carbon footprint and ecological market leadership.",
    quote: "Thanks to BioNet, we're not just greener; we're leading chip industry sustainability."
  }
];

export function SuccessStoriesSection() {
  return (
    <section id="success-stories" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Real Impact, Real Stories</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {stories.map((story) => (
            <SuccessStoryCard key={story.title} {...story} />
          ))}
        </div>
      </div>
    </section>
  );
}
