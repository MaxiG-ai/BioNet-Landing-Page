"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import type { TooltipProps } from 'recharts';
import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

const timelineData = [
  { year: '2022', value: 10, image: 'https://picsum.photos/150/100?random=1', description: 'Launched BioNet platform, onboarded first 50 farmers.', aiHint: "startup launch team" },
  { year: '2023', value: 30, image: 'https://picsum.photos/150/100?random=2', description: 'Expanded to 3 regions, partnered with 5 industrial clients.', aiHint: "business expansion map" },
  { year: '2024', value: 60, image: 'https://picsum.photos/150/100?random=3', description: 'Secured Series A funding, initiated international pilot programs.', aiHint: "funding investment handshake" },
  { year: '2025', value: 85, image: 'https://picsum.photos/150/100?random=4', description: 'Projected to achieve carbon neutrality for partnered farms.', aiHint: "carbon neutral certificate" },
  { year: 'Future', value: 100, image: 'https://picsum.photos/150/100?random=5', description: 'Aiming for global leadership in bioeconomy solutions.', aiHint: "global network future" },
];

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <Card className="w-64 shadow-xl border-border bg-popover text-popover-foreground">
        <CardHeader className="p-3">
          <CardTitle className="text-lg">{data.year}</CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-0">
          <div className="relative aspect-[3/2] mb-2 rounded overflow-hidden">
            <Image 
              src={data.image} 
              alt={`Timeline event ${data.year}`} 
              fill={true} 
              style={{objectFit:"cover"}} 
              sizes="150px"
              data-ai-hint={data.aiHint} />
          </div>
          <p className="text-sm text-muted-foreground">{data.description}</p>
          <p className="text-sm font-semibold text-primary mt-1">Impact Score: {data.value}</p>
        </CardContent>
      </Card>
    );
  }
  return null;
};

export function TimelineSection() {
  return (
    <section id="timeline" className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey & Future Vision</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tracking our progress and milestones as we build a sustainable future. Hover over bars for details.
          </p>
        </div>
        <Card className="shadow-lg bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">BioNet Growth Trajectory</CardTitle>
            <CardDescription className="text-muted-foreground">Illustrating key milestones and impact over time.</CardDescription>
          </CardHeader>
          <CardContent className="h-[400px] md:h-[500px] p-2 md:p-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={timelineData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="year" 
                  stroke="hsl(var(--foreground))" 
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} 
                  axisLine={{ stroke: 'hsl(var(--border))' }}
                  tickLine={{ stroke: 'hsl(var(--border))' }}
                />
                <YAxis 
                  stroke="hsl(var(--foreground))" 
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                  label={{ value: 'Impact Score', angle: -90, position: 'insideLeft', fill: 'hsl(var(--foreground))', fontSize: 14, dy: 40, dx:10 }}
                  axisLine={{ stroke: 'hsl(var(--border))' }}
                  tickLine={{ stroke: 'hsl(var(--border))' }}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(var(--accent)/0.1)' }} />
                <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} barSize={50} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
