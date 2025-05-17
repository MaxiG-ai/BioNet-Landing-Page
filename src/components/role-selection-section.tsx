
"use client";

import { Leaf, Factory, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { LucideIcon } from 'lucide-react';
import { FarmerCalculator } from '@/components/calculators/farmer-calculator';
import { IndustryCalculator } from '@/components/calculators/industry-calculator';
import { InvestorDisplay } from '@/components/calculators/investor-display';

interface Role {
  icon: LucideIcon;
  title: string;
  value: string; // for TabsTrigger value
  description: string;
  features: string[];
  tool: string;
}

const roles: Role[] = [
  {
    icon: Leaf,
    title: "For Farmers",
    value: "farmers",
    description: "Cultivate sustainability and efficiency with our tailored bio-solutions.",
    features: [
      "Access to expertise in biogas production.",
      "Minimal effort required to integrate biogas into farming operations.",
      "Build additional source of income."
    ],
    tool: "Earnings Calculator",
  },
  {
    icon: Factory,
    title: "For Industry",
    value: "industry",
    description: "Integrate eco-friendly processes and materials into your operations.",
    features: [
      "Independence from natural gas.",
      "Reduced carbon footprint.",
      "Long-term stable prices & supply."
    ],
    tool: "Gas Price Projection",
  },
  {
    icon: TrendingUp,
    title: "For Investors",
    value: "investors",
    description: "Invest in the future of sustainability and bio-innovation with high-growth potential.",
    features: [
      "Simple and secure investment.",
      "Support local & green technology.",
      "Long-term commitment, long-term earnings."
    ],
    tool: "Investment Information",
  }
];

export function RoleSelectionSection() {
  return (
    <section id="roles" className="py-16 md:py-24 bg-background mb-16 md:mb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tailored Solutions for Every Partner
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
            BioNet offers specialized resources and tools designed to meet the unique needs of farmers, industry leaders, and investors in the bioeconomy.
          </p>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Select your role below to learn more.
          </p>
        </div>

        <Tabs defaultValue={roles[0].value} className="w-full max-w-3xl mx-auto">
          <TabsList className="grid grid-cols-3 w-full shadow mb-4 bg-muted/50 rounded-md">
              {roles.map((role) => (
                <TabsTrigger
                  key={role.value}
                  value={role.value}
                  className="flex items-center justify-center text-sm md:text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg py-2.5 rounded-md flex-1 whitespace-nowrap"
              >
                <role.icon className="w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" />
                <span>{role.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
            {roles.map((role) => (
              <TabsContent key={role.value} value={role.value} className="py-4">
                <Card className="overflow-hidden shadow-xl transform transition-all duration-300 bg-card">
                  <CardHeader className="bg-muted/20 p-6">
                    <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                      <div className="p-4 bg-primary/10 rounded-full">
                        <role.icon className="w-12 h-12 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl md:text-3xl font-semibold text-foreground mb-2">{role.title}</CardTitle>
                        <CardDescription className="text-base text-muted-foreground">{role.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    {/* Calculator/Display Section */}
                    <Card className="bg-secondary/20 border-secondary/50">
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold text-secondary-foreground">{role.tool}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        {role.value === 'farmers' && <FarmerCalculator />}
                        {role.value === 'industry' && <IndustryCalculator />}
                        {role.value === 'investors' && <InvestorDisplay />}
                      </CardContent>
                    </Card>

                    {/* Key Features Section */}
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-4">Key Features & Benefits:</h4>
                      <ul className="space-y-3 text-card-foreground/90 mb-2">
                        {role.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 bg-muted/20">
                    <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transform transition-transform hover:scale-105">
                      <Link href='#intro'>Get in touch!</Link>
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
