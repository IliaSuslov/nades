import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span
      className="ml-2 items-center gap-2 px-2 py-1.5 rounded-full 
    bg-gradient-to-r from-red-500/20 to-orange-500/20 
    border border-red-500/30 
    text-red-400 text-xs font-semibold
    shadow-lg shadow-red-500/10
    backdrop-blur-sm"
    >
      {children}
    </span>
  );
}
