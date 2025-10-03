import React, { useRef, useEffect } from 'react';

interface LiquidCardProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

const LiquidCard: React.FC<LiquidCardProps> = ({ children, className, contentClassName }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const group = cardRef.current;
    if (!group) return;

    const handleMouseMove = (e: MouseEvent) => {
        const glow = group.querySelector('.card-glow') as HTMLDivElement;
        if (!glow) return;
        const rect = group.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        glow.style.setProperty('--mouse-x', `${x}px`);
        glow.style.setProperty('--mouse-y', `${y}px`);
    };
    
    group.addEventListener('mousemove', handleMouseMove);

    return () => {
      group.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={cardRef} className={`group ${className || ''}`}>
      <div className="card-glow"></div>
      <div className={`liquid-card bg-card-light dark:bg-card-dark h-full ${contentClassName || ''}`}>
        {children}
      </div>
    </div>
  );
};

export default LiquidCard;