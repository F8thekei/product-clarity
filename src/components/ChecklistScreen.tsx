import { Answer } from '../types';
import GoldButton from './GoldButton';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';

interface ChecklistScreenProps {
  stageLabel: string;
  stageNum: '1' | '2';
  title: string;
  subtitle: string;
  questions: string[];
  answers: Answer[];
  onAnswer: (index: number, value: Answer) => void;
  onSubmit: () => void;
}

export default function ChecklistScreen({
  stageLabel,
  stageNum,
  title,
  subtitle,
  questions,
  answers,
  onAnswer,
  onSubmit,
}: ChecklistScreenProps) {
  const answered = answers.filter((a) => a !== null).length;
  const score = answers.filter((a) => a === 'yes').length;
  const allDone = answered === questions.length;

  return (
    <div className="min-h-screen flex flex-col relative" style={{ background: '#000' }}>

      {/* Grid bg */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(235,154,32,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(235,154,32,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Top bar */}
      <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, #EB9A20, #DC9E3A, transparent)' }} />

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 sticky top-0 z-20 backdrop-blur-sm"
        style={{ borderBottom: '1px solid #111', background: 'rgba(0,0,0,0.85)' }}>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#EB9A20' }} />
          <span className="font-mono text-xs tracking-[0.2em] uppercase" style={{ color: '#EB9A20' }}>
            Product Clarity System
          </span>
        </div>
        {/* Stage indicator */}
        <div className="flex items-center gap-2">
          {(['1', '2'] as const).map((n) => (
            <div
              key={n}
              className="w-6 h-6 flex items-center justify-center border font-mono text-xs transition-all duration-300"
              style={{
                borderColor: n === stageNum ? '#EB9A20' : '#222',
                background: n === stageNum ? 'rgba(235,154,32,0.1)' : 'transparent',
                color: n === stageNum ? '#EB9A20' : '#333',
              }}
            >
              {n}
            </div>
          ))}
        </div>
      </nav>

      <div className="flex-1 flex flex-col items-center px-4 py-10 relative z-10">
        <div className="w-full max-w-2xl">

          {/* Stage pill */}
          <div
            className="inline-flex items-center gap-2 border px-3 py-1 mb-8"
            style={{ borderColor: '#222', background: 'rgba(235,154,32,0.05)' }}
          >
            <span className="w-1 h-1 rounded-full" style={{ background: '#EB9A20' }} />
            <span className="font-mono text-xs tracking-[0.18em] uppercase" style={{ color: '#EB9A20' }}>
              {stageLabel}
            </span>
          </div>

          <h2
            className="font-black leading-tight mb-2"
            style={{
              fontSize: 'clamp(26px,4vw,42px)',
              fontFamily: "'Playfair Display', serif",
              color: '#fff',
              animation: 'fadeSlideUp 0.5s ease both',
            }}
          >
            {title}
          </h2>
          <p
            className="text-sm mb-8"
            style={{ color: '#666', fontFamily: "'Lora', serif", animation: 'fadeSlideUp 0.5s ease 0.05s both' }}
          >
            {subtitle}
          </p>

          <ProgressBar current={answered} total={questions.length} />

          {/* Questions */}
          <div className="space-y-3">
            {questions.map((q, i) => (
              <QuestionCard
                key={i}
                index={i}
                question={q}
                answer={answers[i]}
                onAnswer={(v) => onAnswer(i, v)}
                animationDelay={i * 40}
              />
            ))}
          </div>

          {/* Running score */}
          {answered > 0 && (
            <div
              className="mt-8 flex items-center gap-3 font-mono text-xs"
              style={{ color: '#444', animation: 'fadeSlideUp 0.4s ease both' }}
            >
              <span>Running score:</span>
              <span className="text-xl font-black" style={{ color: '#EB9A20' }}>{score}</span>
              <span>/ {answered} answered</span>
            </div>
          )}

          {/* Submit */}
          <div className="mt-10 flex justify-end">
            {allDone ? (
              <GoldButton onClick={onSubmit} size="lg">
                See My Results →
              </GoldButton>
            ) : (
              <GoldButton size="lg" disabled>
                Answer All {questions.length} Questions First
              </GoldButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
