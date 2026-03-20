import { useEffect, useState } from 'react';

interface ScoreRingProps {
  score: number;
  total: number;
  size?: number;
}

export default function ScoreRing({ score, total, size = 140 }: ScoreRingProps) {
  const [progress, setProgress] = useState(0);
  const radius = (size / 2) - 10;
  const circumference = 2 * Math.PI * radius;
  const pct = Math.round((score / total) * 100);

  useEffect(() => {
    const t = setTimeout(() => setProgress(pct), 120);
    return () => clearTimeout(t);
  }, [pct]);

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        {/* Track */}
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" stroke="#1a1a1a" strokeWidth="8"
        />
        {/* Progress */}
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(0.34,1.56,0.64,1)' }}
        />
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EB9A20" />
            <stop offset="100%" stopColor="#DC9E3A" />
          </linearGradient>
        </defs>
      </svg>
      {/* Centre text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className="font-black leading-none tabular-nums"
          style={{ fontSize: size * 0.2, color: '#EB9A20', fontFamily: "'Playfair Display', serif" }}
        >
          {score}/{total}
        </span>
        <span
          className="font-mono"
          style={{ fontSize: size * 0.09, color: '#555' }}
        >
          {pct}%
        </span>
      </div>
    </div>
  );
}
