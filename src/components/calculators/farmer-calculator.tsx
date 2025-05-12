
"use client";

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export function FarmerCalculator() {
  const [cattleCount, setCattleCount] = useState<number>(0);
  const [hasDigesterSpace, setHasDigesterSpace] = useState<boolean>(false);
  const [yearlyEarnings, setYearlyEarnings] = useState<number>(0);

  useEffect(() => {
    const cattleEarnings = cattleCount * 100;
    const digesterBonus = hasDigesterSpace ? 2500 : 0;
    setYearlyEarnings(cattleEarnings + digesterBonus);
  }, [cattleCount, hasDigesterSpace]);

  const handleCattleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setCattleCount(isNaN(value) || value < 0 ? 0 : value);
  };

  const handleCheckboxChange = (checked: boolean | 'indeterminate') => {
    // Ensure checked is boolean
     if (typeof checked === 'boolean') {
      setHasDigesterSpace(checked);
    }
  };


  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">Estimate your potential yearly earnings with BioNet.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
        <div className="space-y-2">
          <Label htmlFor="cattleCount">Number of Cattle</Label>
          <Input
            id="cattleCount"
            type="number"
            value={cattleCount}
            onChange={handleCattleChange}
            min="0"
            placeholder="e.g., 50"
          />
        </div>
        <div className="flex items-center space-x-2 sm:pb-2">
          <Checkbox
            id="digesterSpace"
            checked={hasDigesterSpace}
             onCheckedChange={handleCheckboxChange}
          />
          <Label htmlFor="digesterSpace" className="cursor-pointer">
            I have space for a digester
          </Label>
        </div>
      </div>
      <Card className="bg-background/50 mt-4">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium text-foreground">Estimated Yearly Earnings</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-primary">
            €{yearlyEarnings.toLocaleString()}
          </p>
          <p className="text-xs text-muted-foreground">
            Based on €100 per cow + €2500 digester bonus.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
