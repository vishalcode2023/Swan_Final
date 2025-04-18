import React from 'react';
import { cn } from '../ChatBot_Lib/utils';

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-primary/30 bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));

Card.displayName = "Card";

export { Card }; 