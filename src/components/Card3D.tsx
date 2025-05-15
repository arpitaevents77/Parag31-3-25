import React from 'react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
}

const Card3D: React.FC<Card3DProps> = ({ children, className = '' }) => {
  return (
    <div className={`perspective-container ${className}`}>
      <div className="card-3d glass-effect p-6 rounded-lg">
        {children}
      </div>
    </div>
  );
};

export default Card3D;