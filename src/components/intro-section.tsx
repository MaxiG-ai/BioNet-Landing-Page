"use client";

import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ui/contact-form';
import { ArrowDownCircle, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const bulletPoints = [
  "Introducing slurry in biogas production reduces additional efforts and changes to your processes. Make added value easily.",
  "Scale effects alter economic viability. Everybody can profit.",
  "Technical maintenance is done by us. We support you in every aspect.",
  "Learn more about your benefits using our calculator below!",
];

export function IntroSection() {
  const [contactMethod, setContactMethod] = useState<'phone' | 'mail' | null>(null);
  const [contactPlaceholder, setContactPlaceholder] = useState('Enter contact details (phone or mail)');

  return (
    <section id="intro" className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden pt-20"> {/* Added pt-20 for navbar */}
      <Image 
        src="/irish-hills.jpg" // Updated random seed for potentially new image
        alt="Irish landscape with a cattle farm"
        fill={true}
        priority={true}
        sizes="100vw"
        style={{objectFit: "cover"}}
        quality={80}
        className="z-0 brightness-50"
        data-ai-hint="irish landscape cattle farm" // Updated AI hint
      />
      <div className="relative z-10 p-4 md:p-8 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          We at <span className="text-primary">BioNet</span> enable energy transformation
        </h1>
        <p className="text-lg md:text-xl mb-8 drop-shadow-md">
        Join Bionet and start producing biogas together with other farmers in Ireland.
        </p>
        <div className='flex flex-wrap justify-center gap-4 mb-8 md:flex-nowrap'>
          <div className="mb-10 space-y-3 text-left max-w-full md:max-w-md mx-auto bg-black/30 backdrop-blur-sm p-6 rounded-lg shadow-xl w-full md:w-1/2">
            {bulletPoints.map((item, index) => (
              <div key={index} className="flex items-start space-x-2">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-base md:text-lg">{item}</p>
              </div>
            ))}
          </div>
          <div className="mb-10 space-y-3 text-left max-w-full md:max-w-md mx-auto bg-black/30 backdrop-blur-sm p-6 rounded-lg shadow-xl w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
        <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl transform transition-transform hover:scale-105">
          <Link href="#roles">Discover Your Role</Link>
        </Button>
      </div>
    </section>
  );
}
