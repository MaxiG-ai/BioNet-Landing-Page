
"use client";

import React from 'react'; // Added import
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Network, Beef, Recycle, Filter, Factory, ArrowRight, ArrowDown } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface FlowStep {
  id: string;
  icon: LucideIcon;
  title: string;
  explanation: string;
  aiHint: string;
}

const flowSteps: FlowStep[] = [
  {
    id: 'cattle',
    icon: Beef,
    title: 'Cattle Farming',
    explanation: 'Uninterrupted farming and fertilizing like before. Just one step for biogas production inserted.',
    aiHint: "cattle farm sustainable"
  },
  {
    id: 'anaerobic-digestion',
    icon: Recycle, // Using Recycle for bioprocessing
    title: 'Anaerobic Digestion',
    explanation: 'Biogas production in underground AD using the manure from cowshed. Converting organic matter and manure into biogas (methane and CO2) and digestate (fertilizer).',
    aiHint: "anaerobic digester tank"
  },
  {
    id: 'biomethane-washing',
    icon: Filter, // Filter for purification/washing
    title: 'Biomethane Washing',
    explanation: 'Collection and Purification of biogas by removing CO2 and other impurities to produce high-quality biomethane at our facility. Injection of Biomethane into the national gas grid.',
    aiHint: "gas purification industrial"
  },
  {
    id: 'industry-use',
    icon: Factory,
    title: 'Industrial Use',
    explanation: 'Utilizing biomethane as a renewable energy source for heat or power. Use of digestate as biofertilizer.',
    aiHint: "modern factory renewable energy"
  },
];

export function InteractiveGraphicSection() {
  return (
    <section id="interactive-graphic" className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How BioNet Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our ecosystem fosters collaboration and innovation across the bioeconomy value chain.
          </p>
        </div>

        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-6">BioNet Ecosystem</h3>
          <div className="flex justify-center items-center mb-6">
            <div className="p-5 bg-primary/10 rounded-full shadow-lg">
              <Network className="w-12 h-12 md:w-16 md:h-16 text-primary" />
            </div>
          </div>
          <div className="flex justify-center mb-8">
            <ArrowDown className="w-10 h-10 text-primary/70 animate-bounce" />
          </div>
        </div>

        <TooltipProvider>
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-0">
            {flowSteps.map((step, index) => (
              <React.Fragment key={step.id}>
                <Tooltip delayDuration={100}>
                  <TooltipTrigger asChild>
                    <Card className="w-full md:w-64 hover:shadow-xl transition-shadow cursor-pointer bg-card">
                      <CardHeader className="items-center p-4">
                        <div className="p-3 bg-primary/10 rounded-full mb-2">
                          <step.icon className="w-10 h-10 text-primary" />
                        </div>
                        <CardTitle className="text-lg text-center text-card-foreground">{step.title}</CardTitle>
                      </CardHeader>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="bg-popover text-popover-foreground border-border shadow-lg max-w-xs p-3 rounded-md">
                    <h4 className="font-semibold text-primary mb-1">{step.title}</h4>
                    <p className="text-sm">{step.explanation}</p>
                  </TooltipContent>
                </Tooltip>
                {index < flowSteps.length - 1 && (
                  <div className="flex-shrink-0 mx-auto my-auto">
                    <ArrowRight className="w-8 h-8 text-primary md:rotate-0 rotate-90" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
}

