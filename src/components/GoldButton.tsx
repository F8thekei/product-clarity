import { ReactNode, MouseEvent } from 'react';

interface GoldButtonProps {
  children: ReactNode;
  onClick?: (e: MouseEvent) => void;
  href?: string;
  outline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
}

export default function GoldButton({
  children,
  onClick,
  href,
  outline = false,
  size = 'md',
  fullWidth = false,
  disabled = false,
}: GoldButtonProps) {
  const sizeClasses = {
    sm: 'px-5 py-2 text-xs tracking-widest',
    md: 'px-8 py-3.5 text-sm tracking-widest',
    lg: 'px-10 py-4 text-base tracking-widest',
  }[size];

  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-black uppercase border-2 transition-all duration-200
    hover:scale-[1.03] active:scale-[0.97]
    ${sizeClasses}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-30 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}
  `;

  const style = outline
    ? { borderColor: '#EB9A20', color: '#EB9A20', background: 'transparent' }
    : { borderColor: '#EB9A20', background: '#EB9A20', color: '#000000' };

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses} style={style}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses} style={style} disabled={disabled}>
      {children}
    </button>
  );
}
