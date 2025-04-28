
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  color?: 'black' | 'dark-gray' | 'white';
}

export function Section({ 
  className, 
  id,
  color = 'black',
  children,
  ...props 
}: SectionProps) {
  const bgColor = {
    'black': 'bg-black',
    'dark-gray': 'bg-zinc-900',
    'white': 'bg-white text-black'
  };

  return (
    <section 
      id={id}
      className={cn(
        "w-full py-16 md:py-24", 
        bgColor[color],
        className
      )} 
      {...props}
    >
      <div className="container px-4 md:px-6">
        {children}
      </div>
    </section>
  );
}
