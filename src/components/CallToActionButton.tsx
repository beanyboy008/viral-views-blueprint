
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface CallToActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'lg';
}

export function CallToActionButton({ 
  className, 
  variant = 'primary', 
  size = 'default',
  children,
  ...props 
}: CallToActionButtonProps) {
  return (
    <Button
      className={cn(
        "font-bold rounded-md transition-all shadow-lg",
        variant === 'primary' 
          ? "bg-electric-blue hover:bg-electric-blue/90 text-white" 
          : "bg-white hover:bg-gray-100 text-black",
        size === 'lg' && "text-lg py-6 px-8",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
