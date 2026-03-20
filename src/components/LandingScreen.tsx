import GoldButton from './GoldButton';
import ritaPhoto from '../assets/rita.jpeg';

interface LandingScreenProps {
  onStart: () => void;
}

const STEPS = [
  {
    num: '01',
    title: 'Customer Discovery',
    desc: '10 questions to assess how deeply you know your users and their pain.',
  },
  {
    num: '02',
    title: 'MVP Validation',
    desc: '10 questions to evaluate your readiness to build and launch.',
  },
];

export default function LandingScreen({ onStart }: LandingScreenProps) {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ background: '#000' }}>

      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(235,154,32,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(235,154,32,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(235,154,32,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Top bar */}
      <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, #EB9A20, #DC9E3A, transparent)' }} />

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-5 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#EB9A20' }} />
          <span className="font-mono text-xs tracking-[0.25em] uppercase" style={{ color: '#EB9A20' }}>
            Product Clarity System
          </span>
        </div>
        <span className="font-mono text-xs" style={{ color: '#333' }}>
          Digital Consulting Lab
        </span>
      </nav>

      {/* Hero — split layout */}
      <div className="flex-1 flex flex-col relative z-10 px-6 md:px-12 py-12">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 max-w-6xl mx-auto w-full">

          {/* LEFT — text */}
          <div className="flex-1 flex flex-col items-start text-left">

            <div
              className="inline-flex items-center gap-2 border px-4 py-1.5 mb-8"
              style={{
                borderColor: 'rgba(235,154,32,0.4)',
                background: 'rgba(235,154,32,0.06)',
                animation: 'fadeSlideUp 0.6s ease both',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#EB9A20' }} />
              <span className="font-mono text-xs tracking-[0.2em] uppercase" style={{ color: '#EB9A20' }}>
                4-Minute Assessment
              </span>
            </div>

            <h1
              className="font-black leading-[1.02] mb-6"
              style={{
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontFamily: "'Playfair Display', serif",
                color: '#fff',
                animation: 'fadeSlideUp 0.6s ease 0.1s both',
              }}
            >
              Do You Really{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #EB9A20, #DC9E3A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Know
              </span>{' '}
              Your Product?
            </h1>

            <p
              className="text-base leading-relaxed mb-4 max-w-md"
              style={{
                color: '#888',
                fontFamily: "'Lora', serif",
                animation: 'fadeSlideUp 0.6s ease 0.2s both',
              }}
            >
              Discover exactly where you stand — and your single highest-impact next step to build a profitable, freedom-based business.
            </p>

            <p
              className="font-mono text-xs mb-10 tracking-widest"
              style={{ color: '#444', animation: 'fadeSlideUp 0.6s ease 0.25s both' }}
            >
              Customer Discovery · MVP Validation · Personalised Results
            </p>

            <div style={{ animation: 'fadeSlideUp 0.6s ease 0.3s both' }}>
              <GoldButton onClick={onStart} size="lg">
                Start My Assessment →
              </GoldButton>
            </div>

            {/* Step cards */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-14 w-full max-w-md"
              style={{ animation: 'fadeSlideUp 0.6s ease 0.4s both' }}
            >
              {STEPS.map((s) => (
                <div
                  key={s.num}
                  className="border p-5 transition-all duration-300 group"
                  style={{ borderColor: '#1e1e1e', background: '#080808' }}
                >
                  <div className="font-mono text-xs mb-2" style={{ color: '#EB9A20' }}>
                    {s.num}
                  </div>
                  <div
                    className="text-sm font-black mb-1.5 uppercase tracking-widest"
                    style={{ color: '#fff', fontFamily: "'Playfair Display', serif" }}
                  >
                    {s.title}
                  </div>
                  <div className="text-xs leading-relaxed" style={{ color: '#555', fontFamily: "'Lora', serif" }}>
                    {s.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — photo */}
          <div
            className="flex-shrink-0 flex flex-col items-center"
            style={{ animation: 'fadeSlideUp 0.7s ease 0.15s both' }}
          >
            <div className="relative">
              {/* Gold corner brackets */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2" style={{ borderColor: '#EB9A20' }} />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2" style={{ borderColor: '#EB9A20' }} />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2" style={{ borderColor: '#EB9A20' }} />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2" style={{ borderColor: '#EB9A20' }} />

              {/* Glow behind photo */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(235,154,32,0.15) 0%, transparent 70%)',
                  transform: 'scale(1.2)',
                }}
              />

              <img
                src={ritaPhoto}
                alt="Digital Consulting Lab"
                className="relative z-10 object-cover object-top"
                style={{
                  width: 'clamp(260px, 30vw, 380px)',
                  height: 'clamp(320px, 38vw, 460px)',
                  filter: 'brightness(0.95) contrast(1.05)',
                }}
              />
            </div>

            {/* Name tag */}
            <div
              className="mt-5 border px-5 py-2.5 text-center"
              style={{
                borderColor: 'rgba(235,154,32,0.3)',
                background: 'rgba(235,154,32,0.04)',
                width: 'clamp(260px, 30vw, 380px)',
              }}
            >
              <div
                className="font-black text-sm uppercase tracking-widest"
                style={{ color: '#fff', fontFamily: "'Playfair Display', serif" }}
              >
                Digital Consulting Lab
              </div>
              <div className="font-mono text-xs mt-1" style={{ color: '#EB9A20' }}>
                Product Clarity · MVP Strategy
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="text-center py-6 font-mono text-xs" style={{ color: '#222' }}>
        © 2025 Digital Consulting Lab · All rights reserved
      </div>
    </div>
  );
}