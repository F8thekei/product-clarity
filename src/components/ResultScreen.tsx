import ScoreRing from './ScoreRing';
import GoldButton from './GoldButton';
import { LINKS, OFFER_FEATURES } from '../constants';

type ResultType = 'discovery-low' | 'discovery-high' | 'mvp-low' | 'mvp-high';

interface ResultScreenProps {
  type: ResultType;
  score: number;
  total: number;
  onNext?: () => void;
  onRestart: () => void;
}

interface CtaConfig {
  label: string;
  href: string;
  outline: boolean;
}

interface ResultConfig {
  icon: string;
  iconBg: string;
  iconColor: string;
  headline: string;
  sub: string;
  insight: (s: number, pct: number) => string;
  cta: CtaConfig | null;
  cta2: CtaConfig | null;
  nextLabel: string | null;
  showOffer: boolean;
}

const RESULT_CONFIG: Record<ResultType, ResultConfig> = {
  'discovery-low': {
    icon: '✕',
    iconBg: 'rgba(220,60,60,0.1)',
    iconColor: '#e05555',
    headline: 'You Need More Clarity',
    sub: "Your customer discovery needs work before moving forward. That's okay — most founders skip this step.",
    insight: (s, pct) =>
      `You scored ${s}/10 (${pct}%). A strong foundation starts with deeply understanding your users. Let's close this gap together in a free clarity call.`,
    cta: { label: 'Book Free Clarity Call — Customer Discovery', href: LINKS.calendly, outline: false },
    cta2: null,
    nextLabel: null,
    showOffer: false,
  },
  'discovery-high': {
    icon: '✓',
    iconBg: 'rgba(60,180,100,0.1)',
    iconColor: '#4caf76',
    headline: 'Strong Customer Understanding!',
    sub: "You have a solid grasp of your users and their pain points. Time to validate your MVP.",
    insight: (s, pct) =>
      `You scored ${s}/10 (${pct}%). You've done the hard work of understanding your market. Now let's see if your MVP is ready to match that clarity.`,
    cta: null,
    cta2: null,
    nextLabel: 'Continue to MVP Validation →',
    showOffer: false,
  },
  'mvp-low': {
    icon: '!',
    iconBg: 'rgba(235,154,32,0.1)',
    iconColor: '#EB9A20',
    headline: 'Your MVP Needs Refining',
    sub: "You're close, but your MVP structure needs more clarity before launch.",
    insight: (s, pct) =>
      `You scored ${s}/10 (${pct}%). A focused clarity session will help you trim the fat, define your core feature, and map your first 30 days.`,
    cta: { label: 'Book Free Clarity Call — MVP Structuring', href: LINKS.calendly, outline: false },
    cta2: null,
    nextLabel: null,
    showOffer: false,
  },
  'mvp-high': {
    icon: '→',
    iconBg: 'rgba(235,154,32,0.12)',
    iconColor: '#EB9A20',
    headline: "Solid Foundation. Let's Build.",
    sub: 'You have the clarity and structure needed to move from idea to execution.',
    insight: (s, pct) =>
      `You scored ${s}/10 (${pct}%). You're ready for a focused strategy session to turn your validated idea into a launched product.`,
    cta: { label: 'Book MVP Strategy Call — $25–$35', href: LINKS.selar, outline: false },
    cta2: null,
    nextLabel: null,
    showOffer: true,
  },
};

export default function ResultScreen({ type, score, total, onNext, onRestart }: ResultScreenProps) {
  const cfg = RESULT_CONFIG[type];
  const pct = Math.round((score / total) * 100);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ background: '#000' }}>

      {/* Radial glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(235,154,32,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Top bar */}
      <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, #EB9A20, #DC9E3A, transparent)' }} />

      {/* Nav */}
      <nav
        className="flex items-center justify-between px-6 md:px-12 py-4"
        style={{ borderBottom: '1px solid #111' }}
      >
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#EB9A20' }} />
          <span className="font-mono text-xs tracking-[0.2em] uppercase" style={{ color: '#EB9A20' }}>
            Product Clarity System
          </span>
        </div>
        <span className="font-mono text-xs" style={{ color: '#333' }}>Results</span>
      </nav>

      <div className="flex-1 flex flex-col items-center justify-start px-4 py-14 relative z-10">
        <div className="w-full max-w-xl">

          {/* Result label */}
          <div
            className="inline-flex items-center gap-2 border px-3 py-1 mb-10"
            style={{ borderColor: '#222', background: 'rgba(235,154,32,0.04)' }}
          >
            <span className="font-mono text-xs tracking-[0.18em] uppercase" style={{ color: '#EB9A20' }}>
              Your Results
            </span>
          </div>

          {/* Score + icon row */}
          <div className="flex items-center gap-8 mb-10" style={{ animation: 'fadeSlideUp 0.5s ease both' }}>
            <ScoreRing score={score} total={total} size={130} />
            <div>
              <div
                className="w-12 h-12 flex items-center justify-center text-xl font-black border mb-4"
                style={{
                  background: cfg.iconBg,
                  borderColor: cfg.iconColor,
                  color: cfg.iconColor,
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {cfg.icon}
              </div>
              <h2
                className="font-black leading-tight"
                style={{
                  fontSize: 'clamp(22px,4vw,34px)',
                  fontFamily: "'Playfair Display', serif",
                  color: '#fff',
                }}
              >
                {cfg.headline}
              </h2>
            </div>
          </div>

          {/* Sub */}
          <p
            className="text-sm leading-relaxed mb-6"
            style={{ color: '#999', fontFamily: "'Lora', serif", animation: 'fadeSlideUp 0.5s ease 0.1s both' }}
          >
            {cfg.sub}
          </p>

          {/* Insight box */}
          <div
            className="border p-5 mb-10 text-sm leading-relaxed"
            style={{
              borderColor: '#1e1e1e',
              background: '#080808',
              borderLeft: '2px solid #EB9A20',
              color: '#bbb',
              fontFamily: "'Lora', serif",
              animation: 'fadeSlideUp 0.5s ease 0.15s both',
            }}
          >
            {cfg.insight(score, pct)}
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3" style={{ animation: 'fadeSlideUp 0.5s ease 0.2s both' }}>
            {cfg.nextLabel && onNext && (
              <GoldButton onClick={onNext} size="lg" fullWidth>
                {cfg.nextLabel}
              </GoldButton>
            )}
            {cfg.cta && (
              <GoldButton href={cfg.cta.href} outline={cfg.cta.outline} size="lg" fullWidth>
                {cfg.cta.label}
              </GoldButton>
            )}
            {cfg.cta2 && (
              <GoldButton href={cfg.cta2.href} outline={cfg.cta2.outline} size="md" fullWidth>
                {cfg.cta2.label}
              </GoldButton>
            )}
            <button
              onClick={onRestart}
              className="font-mono text-xs underline underline-offset-4 mt-3 transition-colors duration-200 text-center"
              style={{ color: '#333' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#666')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#333')}
            >
              ← Start over
            </button>
          </div>

          {/* Paid offer card — mvp-high only */}
          {cfg.showOffer && (
            <div
              className="border mt-14 p-6"
              style={{
                borderColor: 'rgba(235,154,32,0.4)',
                background: 'rgba(235,154,32,0.03)',
                animation: 'fadeSlideUp 0.5s ease 0.3s both',
              }}
            >
              <div
                className="font-mono text-xs tracking-[0.2em] uppercase mb-3"
                style={{ color: '#EB9A20' }}
              >
                ✦ Entry Offer
              </div>
              <h3
                className="text-xl font-black mb-2"
                style={{ color: '#fff', fontFamily: "'Playfair Display', serif" }}
              >
                Move from Clarity to Execution
              </h3>
              <p
                className="text-xs mb-5 leading-relaxed"
                style={{ color: '#888', fontFamily: "'Lora', serif" }}
              >
                A focused 60–75 min strategy session to map your MVP roadmap, so you can stop planning and start building.
              </p>
              <ul className="space-y-2 mb-6">
                {OFFER_FEATURES.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 text-xs"
                    style={{ color: '#bbb', fontFamily: "'Lora', serif" }}
                  >
                    <span style={{ color: '#EB9A20', fontSize: 10 }}>◆</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <span
                    className="font-black"
                    style={{ fontSize: 24, color: '#EB9A20', fontFamily: "'Playfair Display', serif" }}
                  >
                    $25–$35
                  </span>
                  <span className="font-mono text-xs ml-2" style={{ color: '#444' }}>
                    or ₦25,000–₦35,000
                  </span>
                </div>
                <GoldButton href={LINKS.selar} size="sm">
                  Book Now →
                </GoldButton>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}