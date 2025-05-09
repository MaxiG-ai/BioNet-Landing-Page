import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SuccessStoryCardProps {
  imageSrc: string;
  imageAlt: string;
  aiHint: string;
  category: 'Farmer' | 'Industry';
  title: string;
  description: string;
  quote?: string;
}

export function SuccessStoryCard({ imageSrc, imageAlt, aiHint, category, title, description, quote }: SuccessStoryCardProps) {
  return (
    <Card className="overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card">
      <div className="relative aspect-video w-full">
        <Image 
          src={imageSrc} 
          alt={imageAlt} 
          fill={true}
          style={{objectFit: "cover"}}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          data-ai-hint={aiHint}
        />
      </div>
      <CardHeader>
        <Badge variant={category === 'Farmer' ? 'secondary' : 'default'} className="w-fit mb-2 self-start">
          {category} Success
        </Badge>
        <CardTitle className="text-xl md:text-2xl font-semibold text-card-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground mb-4">{description}</CardDescription>
        {quote && (
          <blockquote className="border-l-4 border-primary pl-4 italic text-card-foreground/80">
            "{quote}"
          </blockquote>
        )}
      </CardContent>
    </Card>
  );
}
