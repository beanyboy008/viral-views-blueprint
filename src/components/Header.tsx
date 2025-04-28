
import React from 'react';
import { cn } from '@/lib/utils';

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Header({ className, ...props }: HeaderProps) {
  return (
    <header className={cn("w-full py-4 px-6 md:px-10 flex items-center justify-between fixed top-0 z-50 bg-black bg-opacity-95", className)} {...props}>
      <div className="flex items-center">
        <h1 className="text-xl md:text-2xl font-bold tracking-tighter">
          <span className="text-gradient">VIRAL</span> VIEWS
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <a 
          href="#book-call" 
          className="bg-electric-blue text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-opacity-90 transition-all"
        >
          Book Call
        </a>
      </div>
    </header>
  );
}
