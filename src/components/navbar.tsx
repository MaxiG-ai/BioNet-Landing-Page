
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '#intro' },
  { label: 'Roles', href: '#roles' },
  { label: 'How It Works', href: '#interactive-graphic' },
  { label: 'Success Stories', href: '#success-stories' },
  { label: 'Timeline', href: '#timeline' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    // Call handleScroll once to set initial state based on scroll position
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Server-side rendering placeholder to avoid hydration mismatch
  const renderLogoPlaceholder = () => (
    <Link href="#intro" aria-label="BioNet Home">
      <div>
        <Image
          src={'/bionet-logo.svg'}
          alt="My Company Logo"
          width={150} // Required for next/image
          height={75} // Required for next/image
          layout="fixed" // Or "fixed", "fill", "intrinsic"
        />
      </div>
    </Link>
  );

  if (!isClient) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          {renderLogoPlaceholder()}
          {/* Minimal structure to match client for hydration */}
          <div className="hidden md:flex items-center gap-6"></div>
          <div className="md:hidden"></div>
        </div>
      </header>
    );
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#intro" aria-label="BioNet Home">
          <Image
            src={"/bionet-logo.svg"} // Correct path for public folder
            alt="BioNet Logo"
            width={120}
            height={40}
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="default" className="bg-primary hover:bg-primary/90">
            <Link href="#contact">Contact Us</Link>
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-foreground" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background">
              <div className="flex flex-col gap-6 p-6">
                <Link href="#intro" aria-label="BioNet Home">
                  <Image
                    src="/bionet-logo.png" // Correct path for public folder
                    alt="BioNet Logo"
                    width={100}
                    height={33}
                    priority
                  />
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild variant="default" className="mt-4 bg-primary hover:bg-primary/90">
                  <Link href="#intro">Contact Us</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
