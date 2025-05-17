"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Dot } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import type { TooltipProps } from 'recharts';
import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import React from 'react';

const timelineData = [
  { year: '2025', value: 1, image: '/AD-astrid.jpeg', description: 'Launched BioNet platform, onboarded first farmers', aiHint: "startup launch team" },
  { year: '2026', value: 1, image: '/gas-injection.jpg', description: 'Onboarded 25 farmes in Kildare, finishing injection point', aiHint: "business expansion map" },
  { year: '2027', value: 1, image: '/kildare-map.jpeg', description: 'Working with 100+ farmers, selling to 3 industry clients.', aiHint: "funding investment handshake" },
  { year: '2030', value: 1, image: '/pie-chart.jpg', description: 'Replacing 10% of Irelands gas supply with biogas', aiHint: "global network future" },
  { year: 'Future', value: 1, image: '/worldwide.jpg', description: 'Expanding BioGas operations globally', aiHint: "global network future" },
]; // value is set to 1 for consistent Y positioning

const CustomTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>) => {
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
          {/* Impact score can be added here if it's part of data */}
        </CardContent>
      </Card>
    );
  }
  return null;
};

// Custom Dot for the LineChart
const CustomDot = (props: any) => {
  const { cx, cy, stroke, payload } = props;
  // Conditionally style the "Future" dot or others
  const isFuture = payload.year === 'Future';
  return (
    <svg x={cx - 10} y={cy - 10} width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill={isFuture ? "hsl(var(--accent))" : "hsl(var(--primary))"} stroke="hsl(var(--background))" strokeWidth="2"/>
      {isFuture && <path d="M12 6v6l4 2" stroke="hsl(var(--accent-foreground))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>}
    </svg>
  );
};


export function TimelineSection() {
  return (
    <section id="timeline" className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey & Future Vision</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tracking our progress and milestones as we build a sustainable future. Hover over milestones for details.
          </p>
        </div>
        <Card className="shadow-lg bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">BioNet Growth Milestones</CardTitle>
            <CardDescription className="text-muted-foreground">Timeline to create BioNet in Ireland.</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] md:h-[400px] p-2 md:p-6">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={timelineData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis 
                  dataKey="year" 
                  stroke="hsl(var(--foreground))" 
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} 
                  axisLine={{ stroke: 'hsl(var(--border))' }}
                  tickLine={{ stroke: 'hsl(var(--border))' }}
                  padding={{ left: 30, right: 30 }}
                  interval={0} 
                />
                <YAxis hide={true} domain={[0, 2]} /> {/* Hidden Y-axis, domain ensures dots are centered */}
                <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'hsl(var(--accent))', strokeWidth: 2, strokeDasharray: '3 3' }} />
                <Line 
                  type="monotone" 
                  dataKey="value" // All values are 1 to place dots on the same horizontal line
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  activeDot={{ r: 8, fill: 'hsl(var(--primary))', stroke: 'hsl(var(--background))', strokeWidth: 2 }}
                  dot={<CustomDot />}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
