
"use client";

import { useState, useEffect, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import type { ChartConfig } from '@/components/ui/chart';

const chartConfig = {
  naturalGas: {
    label: "Natural Gas",
    color: "hsl(var(--muted))",
  },
  bioGas: {
    label: "BioNet Biogas",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

const YEARS_FORECAST = 20;
const NATURAL_GAS_GROWTH_RATE = 0.07; // 7%
const BIOGAS_INITIAL_PRICE = 0.35;
const BIOGAS_GROWTH_RATE = 0.01; // 1%

export function IndustryCalculator() {
  const [currentGasPrice, setCurrentGasPrice] = useState<number>(0.30); // Default price €0.30/kWh
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    const data = [];
    let ngPrice = currentGasPrice;
    let bgPrice = BIOGAS_INITIAL_PRICE;
    const currentYear = new Date().getFullYear();

    for (let i = 0; i <= YEARS_FORECAST; i++) {
      data.push({
        year: currentYear + i,
        naturalGas: parseFloat(ngPrice.toFixed(3)),
        bioGas: parseFloat(bgPrice.toFixed(3)),
      });
      ngPrice *= (1 + NATURAL_GAS_GROWTH_RATE);
      bgPrice *= (1 + BIOGAS_GROWTH_RATE);
    }
    setChartData(data);
  }, [currentGasPrice]);

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setCurrentGasPrice(isNaN(value) || value < 0 ? 0 : value);
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">Compare projected natural gas costs with BioNet's stable biogas pricing.</p>
      <div className="space-y-2">
        <Label htmlFor="currentGasPrice">Current Natural Gas Price (€/kWh)</Label>
        <Input
          id="currentGasPrice"
          type="number"
          value={currentGasPrice}
          onChange={handlePriceChange}
          step="0.01"
          min="0"
          placeholder="e.g., 0.30"
        />
         <p className="text-xs text-muted-foreground pt-1">
            Assumes a {NATURAL_GAS_GROWTH_RATE * 100}% annual increase for natural gas vs {BIOGAS_GROWTH_RATE * 100}% for BioNet Biogas.
         </p>
      </div>

      <Card className="bg-background/50 mt-4">
        <CardHeader>
          <CardTitle className="text-base font-medium text-foreground">20-Year Price Forecast (€/kWh)</CardTitle>
           <CardDescription className="text-xs text-muted-foreground">Projected cost comparison</CardDescription>
        </CardHeader>
        <CardContent className="h-[250px] p-2 pr-6 pb-6">
           <ChartContainer config={chartConfig} className="h-full w-full">
             <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{ top: 5, right: 10, left: -20, bottom: 0 }} // Adjusted margins
              >
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false}/>
                <XAxis
                  dataKey="year"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.toString()} // Keep full year
                   tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => `€${value.toFixed(2)}`}
                   tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
                   domain={['auto', 'auto']}
                />
                 <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                  />
                <Line
                  dataKey="naturalGas"
                  type="monotone"
                  stroke="var(--color-naturalGas)"
                  strokeWidth={2}
                  dot={false}
                  name="Natural Gas"
                />
                <Line
                  dataKey="bioGas"
                  type="monotone"
                  stroke="var(--color-bioGas)"
                  strokeWidth={2}
                  dot={false}
                  name="BioNet Biogas"
                />
                <Legend verticalAlign="top" height={36}/>
              </LineChart>
               </ResponsiveContainer>
           </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
