interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between mb-2" style={{ color: '#DC9E3A' }}>
        <span className="font-mono text-xs tracking-widest">
          {current} / {total} answered
        </span>
        <span className="font-mono text-xs">{pct}%</span>
      </div>
      <div className="h-px w-full" style={{ background: '#1a1a1a' }}>
        <div
          className="h-px transition-all duration-500"
          style={{
            width: `${pct}%`,
            background: 'linear-gradient(90deg, #EB9A20, #DC9E3A)',
          }}
        />
      </div>
    </div>
  );
}
