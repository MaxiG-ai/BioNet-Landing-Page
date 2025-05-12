
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export function InvestorDisplay() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">Invest in a sustainable future with clear benefits.</p>
      <Card className="bg-background/50">
         <CardHeader className="pb-2">
           <CardTitle className="text-base font-medium text-foreground">Investment Overview</CardTitle>
           <CardDescription className="text-xs text-muted-foreground">Simple and transparent co-op participation.</CardDescription>
         </CardHeader>
        <CardContent className="pt-4">
           <ul className="space-y-2 text-sm text-foreground/90">
            <li className="flex items-start">
              <CheckCircle2 className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
              <span>Buy a share of the BioNet co-op for a fixed price of <span className="font-semibold">€200</span>.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
              <span>Receive proportional earnings per share distributed annually.</span>
            </li>
            <li className="flex items-start">
               <CheckCircle2 className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
              <span>Flexibility to sell your share back to the co-op at the purchase price (€200) at any time.</span>
            </li>
          </ul>
        </CardContent>
      </Card>
       <p className="text-xs text-muted-foreground pt-2 italic">
          Note: This provides a simplified overview. Detailed terms and conditions apply. Contact us for the full investment prospectus.
       </p>
    </div>
  );
}
