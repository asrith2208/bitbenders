
import React, { useRef } from 'react';

interface MagneticLinkProps {
  children: React.ReactNode;
  className?: string;
}

const MagneticLink: React.FC<MagneticLinkProps> = ({ children, className }) => {
  const ref = useRef<HTMLSpanElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - left - width / 2;
    const y = clientY - top - height / 2;
    ref.current.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0px, 0px)';
  };

  return (
    <span
      ref={ref}
      className={`magnetic-link ${className || ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </span>
  );
};

export default MagneticLink;
