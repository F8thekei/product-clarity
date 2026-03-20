import { Answer } from '../types';

interface QuestionCardProps {
  index: number;
  question: string;
  answer: Answer;
  onAnswer: (value: Answer) => void;
  animationDelay?: number;
}

export default function QuestionCard({
  index,
  question,
  answer,
  onAnswer,
  animationDelay = 0,
}: QuestionCardProps) {
  return (
    <div
      className="relative border p-5 transition-all duration-300 group"
      style={{
        borderColor: answer ? '#EB9A20' : '#1e1e1e',
        background: answer ? 'rgba(235,154,32,0.04)' : '#0a0a0a',
        animation: `fadeSlideUp 0.4s ease both`,
        animationDelay: `${animationDelay}ms`,
      }}
    >
      {/* Gold left accent when answered */}
      <div
        className="absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-300"
        style={{ background: answer ? '#EB9A20' : 'transparent' }}
      />

      <div className="flex gap-4 items-start pl-2">
        {/* Number */}
        <span
          className="font-mono text-xs mt-1 shrink-0 w-6 text-right transition-colors duration-300"
          style={{ color: answer ? '#EB9A20' : '#333' }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className="flex-1 min-w-0">
          {/* Question text */}
          <p
            className="text-sm leading-relaxed mb-4 transition-colors duration-300"
            style={{
              color: answer ? '#ffffff' : '#aaaaaa',
              fontFamily: "'Lora', serif",
            }}
          >
            {question}
          </p>

          {/* Answer buttons */}
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => onAnswer('yes')}
              className="px-5 py-2 text-xs font-black uppercase tracking-widest border transition-all duration-200 hover:scale-[1.04] active:scale-95"
              style={
                answer === 'yes'
                  ? { background: '#EB9A20', borderColor: '#EB9A20', color: '#000' }
                  : { background: 'transparent', borderColor: '#2a2a2a', color: '#555' }
              }
            >
              Yes
            </button>
            <button
              onClick={() => onAnswer('no')}
              className="px-5 py-2 text-xs font-black uppercase tracking-widest border transition-all duration-200 hover:scale-[1.04] active:scale-95"
              style={
                answer === 'no'
                  ? { background: '#1e1e1e', borderColor: '#555', color: '#fff' }
                  : { background: 'transparent', borderColor: '#2a2a2a', color: '#555' }
              }
            >
              No / Not Sure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
