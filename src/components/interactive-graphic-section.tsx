"use client";

import Image from 'next/image';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Lightbulb, Recycle, Trees, Users } from 'lucide-react';

const interactionPoints = [
  {
    id: 'sustainable-sourcing',
    icon: Trees,
    title: 'Sustainable Sourcing',
    explanation: 'We connect farmers practicing sustainable agriculture with industries seeking eco-friendly raw materials.',
    positionClasses: 'top-[15%] left-[15%]', // Adjusted for better placement
  },
  {
    id: 'bioprocessing',
    icon: Recycle,
    title: 'Innovative Bioprocessing',
    explanation: 'Facilitating the use of cutting-edge technologies to convert biomass into valuable products.',
    positionClasses: 'top-[15%] right-[15%]', // Adjusted
  },
  {
    id: 'market-connection',
    icon: Users,
    title: 'Market Connection',
    explanation: 'Creating a robust marketplace for bio-based products, linking producers with consumers and investors.',
    positionClasses: 'bottom-[15%] left-[25%]', // Adjusted
  },
  {
    id: 'investment-growth',
    icon: Lightbulb,
    title: 'Investment & Growth',
    explanation: 'Driving investment into sustainable bio-projects, fostering innovation and economic growth in the sector.',
    positionClasses: 'bottom-[15%] right-[25%]', // Adjusted
  },
];

export function InteractiveGraphicSection() {
  return (
    <section id="interactive-graphic" className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How BioNet Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our ecosystem fosters collaboration and innovation across the bioeconomy value chain. Hover over the icons to learn more.
          </p>
        </div>
        <div className="relative aspect-video max-w-3xl mx-auto rounded-lg overflow-hidden shadow-2xl">
          <Image
            src="https://picsum.photos/1200/675"
            alt="BioNet ecosystem diagram"
            fill={true}
            style={{objectFit: "cover"}}
            className="brightness-75"
            data-ai-hint="ecosystem network"
          />
          <TooltipProvider>
            {interactionPoints.map((point) => (
              <Tooltip key={point.id} delayDuration={100}>
                <TooltipTrigger asChild>
                  <div
                    className={`absolute p-3 bg-primary/80 text-primary-foreground rounded-full cursor-pointer hover:bg-primary transition-colors shadow-lg transform -translate-x-1/2 -translate-y-1/2 ${point.positionClasses}`}
                    aria-label={point.title}
                  >
                    <point.icon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top" className="bg-popover text-popover-foreground border-border shadow-lg max-w-xs p-3 rounded-md">
                  <h4 className="font-semibold text-primary mb-1">{point.title}</h4>
                  <p className="text-sm">{point.explanation}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="p-4 md:p-6 bg-background/80 backdrop-blur-sm rounded-full shadow-xl">
                <h3 className="text-xl md:text-3xl font-bold text-primary text-center">
                    BioNet <br/> Ecosystem
                </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
