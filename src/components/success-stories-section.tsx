import { SuccessStoryCard } from './success-story-card';

const stories = [
  {
    imageSrc: "https://picsum.photos/600/400?random=1",
    imageAlt: "Farmer John smiling in his field",
    aiHint: "happy farmer field",
    category: "Farmer" as const,
    title: "Farmer John's Bountiful Harvest",
    description: "By adopting BioNet's soil health recommendations and sustainable practices, Farmer John increased his crop yield by 25% while reducing water usage by 15%.",
    quote: "BioNet transformed the way I farm. My land is healthier, and my profits are up. It's a win-win!"
  },
  {
    imageSrc: "https://picsum.photos/600/400?random=2",
    imageAlt: "Modern eco-friendly factory",
    aiHint: "modern factory eco",
    category: "Industry" as const,
    title: "GreenChem's Sustainable Shift",
    description: "GreenChem partnered with BioNet to source bio-based alternatives for their chemical production, resulting in a 30% reduction in their carbon footprint and new market opportunities.",
    quote: "Thanks to BioNet, we're not just greener; we're more competitive. Sustainability is now a core part of our success."
  }
];

export function SuccessStoriesSection() {
  return (
    <section id="success-stories" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Real Impact, Real Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how BioNet is making a tangible difference for farmers and industries alike.
          </p>
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
