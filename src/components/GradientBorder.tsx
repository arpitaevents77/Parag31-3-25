import React from 'react';

interface GradientBorderProps {
  children: React.ReactNode;
  className?: string;
}

const GradientBorder: React.FC<GradientBorderProps> = ({ children, className = '' }) => {
  return (
    <div className={`gradient-border ${className}`}>
      {children}
    </div>
  );
};

export default GradientBorder;