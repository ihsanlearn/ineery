import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background text-foreground py-12 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">Ineery.</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Hi there, im an information technology enthusiast.
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="https://linkedin.com/in/ihsan-restu-adi" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="https://github.com/ihsanlearn" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </Link>
            <Link href="https://instagram.com/iihsannr" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Documentation</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Whitepaper</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Me</Link></li>
            <li><Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Press Kit</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Newsletter</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Stay up-to-date with our latest news and updates.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 text-center text-sm text-muted-foreground mt-12 border-t border-border/50 pt-8">
        Ihsan Restu Adi &copy; {new Date().getFullYear()} Ineery. All rights reserved.
      </div>
    </footer>
  );
}