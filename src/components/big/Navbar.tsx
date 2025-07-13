"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { X, Menu } from 'lucide-react'; 

import { useState } from 'react';
import ThemeToggle from '../utils/ThemeToggle';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Ineery', href: '#ineery' },
    { name: 'About Me', href: '#about-me' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/95 border-b border-border/50 px-4 md:px-48 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold text-foreground">Ineery.</span>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden lg:flex items-center space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Action Buttons & Theme Toggle */}
      <div className="flex items-center space-x-4">
        <Button
          variant="outline"
          className="hidden md:inline-flex border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-sm"
        >
          Contact Me
        </Button>

        {/* Theme Toggle */}
        <div className='hidden md:inline-flex'>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background/95 border-t border-border/50 shadow-lg py-4 px-8 z-40 animate-in slide-in-from-top-10 duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button
              variant="outline"
              className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-base"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Button>
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}