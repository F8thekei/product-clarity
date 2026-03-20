import GoldButton from './GoldButton';
import { LINKS } from '../constants';

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ background: '#000' }}>

      {/* Grid bg */}
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
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(235,154,32,0.10) 0%, transparent 70%)',
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
        <span className="font-mono text-xs" style={{ color: '#333' }}>Digital Consulting Lab</span>
      </nav>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 relative z-10 py-16">
        <div className="w-full max-w-lg text-center">

          {/* Animated checkmark */}
          <div
            className="inline-flex items-center justify-center w-20 h-20 border-2 mb-10 mx-auto"
            style={{
              borderColor: '#EB9A20',
              background: 'rgba(235,154,32,0.08)',
              animation: 'fadeSlideUp 0.5s ease both',
            }}
          >
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path
                d="M6 18L14 26L30 10"
                stroke="#EB9A20"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  strokeDasharray: 40,
                  strokeDashoffset: 0,
                  animation: 'drawCheck 0.6s ease 0.3s both',
                }}
              />
            </svg>
          </div>

          {/* Headline */}
          <div
            className="font-mono text-xs tracking-[0.2em] uppercase mb-4"
            style={{ color: '#EB9A20', animation: 'fadeSlideUp 0.5s ease 0.1s both' }}
          >
            Payment Confirmed
          </div>

          <h1
            className="font-black leading-tight mb-4"
            style={{
              fontSize: 'clamp(28px, 5vw, 48px)',
              fontFamily: "'Playfair Display', serif",
              color: '#fff',
              animation: 'fadeSlideUp 0.5s ease 0.15s both',
            }}
          >
            You're In. Let's{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #EB9A20, #DC9E3A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Build.
            </span>
          </h1>

          <p
            className="text-sm leading-relaxed mb-10"
            style={{
              color: '#888',
              fontFamily: "'Lora', serif",
              animation: 'fadeSlideUp 0.5s ease 0.2s both',
            }}
          >
            Your MVP Strategy Call is booked and paid. Check your email for confirmation details.
            We'll see you on the call — come ready to build.
          </p>

          {/* What happens next */}
          <div
            className="border p-6 mb-10 text-left"
            style={{
              borderColor: '#1e1e1e',
              background: '#080808',
              borderLeft: '2px solid #EB9A20',
              animation: 'fadeSlideUp 0.5s ease 0.25s both',
            }}
          >
            <div
              className="font-mono text-xs tracking-[0.18em] uppercase mb-5"
              style={{ color: '#EB9A20' }}
            >
              What Happens Next
            </div>
            <ul className="space-y-4">
              {[
                { step: '01', text: 'Check your email — you\'ll receive a confirmation with your call details.' },
                { step: '02', text: 'Prepare your idea, current blockers, and any MVP thinking you\'ve done so far.' },
                { step: '03', text: 'Show up to the 60–75 min session ready to walk away with a clear roadmap.' },
                { step: '04', text: 'After the call, you\'ll receive your personal roadmap PDF + 3-day follow-up support.' },
              ].map((item) => (
                <li key={item.step} className="flex gap-4 items-start">
                  <span
                    className="font-mono text-xs shrink-0 mt-0.5"
                    style={{ color: '#EB9A20' }}
                  >
                    {item.step}
                  </span>
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: '#bbb', fontFamily: "'Lora', serif" }}
                  >
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables reminder */}
          <div
            className="border p-5 mb-10"
            style={{
              borderColor: 'rgba(235,154,32,0.3)',
              background: 'rgba(235,154,32,0.03)',
              animation: 'fadeSlideUp 0.5s ease 0.3s both',
            }}
          >
            <div
              className="font-mono text-xs tracking-[0.18em] uppercase mb-4"
              style={{ color: '#EB9A20' }}
            >
              ✦ Your Session Includes
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                'Personal roadmap PDF',
                'Audit + scoring sheet',
                'MVP structure outline',
                '3-day email/chat follow-up',
              ].map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2 text-xs"
                  style={{ color: '#bbb', fontFamily: "'Lora', serif" }}
                >
                  <span style={{ color: '#EB9A20', fontSize: 8 }}>◆</span>
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            className="flex flex-col items-center gap-4"
            style={{ animation: 'fadeSlideUp 0.5s ease 0.35s both' }}
          >
            <p className="text-xs font-mono" style={{ color: '#444' }}>
              Need to reschedule or have questions?
            </p>
            <GoldButton href={LINKS.calendly} outline size="md">
              Contact Us →
            </GoldButton>
          </div>

        </div>
      </div>

      <div className="text-center py-6 font-mono text-xs" style={{ color: '#222' }}>
        © 2025 Digital Consulting Lab · All rights reserved
      </div>

      <style>{`
        @keyframes drawCheck {
          from { stroke-dashoffset: 40; }
          to   { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}