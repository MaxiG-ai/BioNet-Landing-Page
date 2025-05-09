
"use client";

import { Leaf, Factory, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { LucideIcon } from 'lucide-react';

interface Role {
  icon: LucideIcon;
  title: string;
  value: string; // for TabsTrigger value
  description: string;
  features: string[];
  ctaLink: string;
  ctaText: string;
}

const roles: Role[] = [
  {
    icon: Leaf,
    title: "For Farmers",
    value: "farmers",
    description: "Cultivate sustainability and efficiency with our tailored bio-solutions.",
    features: [
      "Access to advanced soil health analytics.",
      "Tools for optimizing resource usage.",
      "Marketplace for sustainable produce.",
      "Guidance on regenerative agriculture practices."
    ],
    ctaLink: "#contact", 
    ctaText: "Explore Farmer Solutions"
  },
  {
    icon: Factory,
    title: "For Industry",
    value: "industry",
    description: "Integrate eco-friendly processes and materials into your operations.",
    features: [
      "Bio-based material sourcing platform.",
      "Carbon footprint reduction strategies.",
      "Supply chain transparency tools.",
      "Support for circular economy models."
    ],
    ctaLink: "#contact", 
    ctaText: "Discover Industry Innovations"
  },
  {
    icon: TrendingUp,
    title: "For Investors",
    value: "investors",
    description: "Invest in the future of sustainability and bio-innovation with high-growth potential.",
    features: [
      "Curated portfolio of bio-tech startups.",
      "Impact investment metrics and reporting.",
      "Access to exclusive market research.",
      "Networking opportunities with innovators."
    ],
    ctaLink: "#contact", 
    ctaText: "Find Investment Opportunities"
  }
];

export function RoleSelectionSection() {
  return (
    <section id="roles" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tailored Solutions for Every Partner
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            BioNet offers specialized resources and tools designed to meet the unique needs of farmers, industry leaders, and investors in the bioeconomy. Select your role to learn more.
          </p>
        </div>

        <Tabs defaultValue={roles[0].value} className="w-full max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 shadow-md">
            {roles.map((role) => (
              <TabsTrigger 
                key={role.value} 
                value={role.value} 
                className="flex items-center justify-center py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg"
              >
                <role.icon className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>{role.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {roles.map((role) => (
            <TabsContent key={role.value} value={role.value}>
              <Card className="overflow-hidden shadow-xl transform transition-all duration-300 bg-card">
                <CardHeader className="bg-muted/20 p-6">
                  <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <role.icon className="w-12 h-12 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl md:text-3xl font-semibold text-foreground mb-1">{role.title}</CardTitle>
                      <CardDescription className="text-base text-muted-foreground">{role.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-foreground mb-4">Key Features & Benefits:</h4>
                  <ul className="space-y-3 text-card-foreground/90 mb-6">
                    {role.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="p-4 bg-secondary/20 rounded-lg border border-secondary/50">
                    <h5 className="text-lg font-semibold text-secondary-foreground mb-2">Custom Tools & Insights</h5>
                    <p className="text-sm text-muted-foreground italic">
                      (Placeholder for role-specific calculators and detailed target-group information. This section will be tailored with data-driven tools and resources.)
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="p-6 bg-muted/20">
                  <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transform transition-transform hover:scale-105">
                    <Link href={role.ctaLink}>{role.ctaText}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
