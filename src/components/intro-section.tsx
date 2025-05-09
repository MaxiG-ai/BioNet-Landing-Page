"use client";

import { Button } from '@/components/ui/button';
import { ArrowDownCircle, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const bulletPoints = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  "Nisi ut aliquip ex ea commodo consequat aute irure dolor.",
  "Duis aute irure dolor in reprehenderit in voluptate velit."
];

export function IntroSection() {
  return (
    <section id="intro" className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden pt-20"> {/* Added pt-20 for navbar */}
      <Image
        src="https://picsum.photos/1920/1080"
        alt="Lush green field background"
        fill={true}
        priority={true}
        sizes="100vw"
        style={{objectFit: "cover"}}
        quality={80}
        className="z-0 brightness-50"
        data-ai-hint="green field nature"
      />
      <div className="relative z-10 p-4 md:p-8 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Welcome to <span className="text-primary">BioNet</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 drop-shadow-md">
          Pioneering sustainable solutions by connecting agriculture, industry, and investment for a greener tomorrow.
        </p>
        <div className="mb-10 space-y-3 text-left max-w-md mx-auto bg-black/30 backdrop-blur-sm p-6 rounded-lg shadow-xl">
          {bulletPoints.map((item, index) => (
            <div key={index} className="flex items-start space-x-2">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-base md:text-lg">{item}</p>
            </div>
          ))}
        </div>
        <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl transform transition-transform hover:scale-105">
          <Link href="#roles">Discover Your Role</Link>
        </Button>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <Link href="#roles" aria-label="Scroll to next section">
          <ArrowDownCircle className="h-10 w-10 text-white/70 hover:text-white animate-bounce transition-colors" />
        </Link>
      </div>
    </section>
  );
}
