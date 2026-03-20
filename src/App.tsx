import { useState } from 'react';
import { Answer, Stage } from './types';
import { DISCOVERY_QUESTIONS, MVP_QUESTIONS } from './constants';
import LandingScreen from './components/LandingScreen';
import ChecklistScreen from './components/ChecklistScreen';
import ResultScreen from './components/ResultScreen';
import PaymentSuccess from './components/PaymentSuccess';

function scoreOf(answers: Answer[]): number {
  return answers.filter((a) => a === 'yes').length;
}

export default function App() {
  const [stage, setStage] = useState<Stage>(() => {
    const redirect = sessionStorage.getItem('redirectTo');
    if (redirect === 'payment-success') {
      sessionStorage.removeItem('redirectTo');
      return 'payment-success';
    }
    return 'landing';
  });

  const [discoveryAnswers, setDiscoveryAnswers] = useState<Answer[]>(Array(10).fill(null));
  const [mvpAnswers, setMvpAnswers] = useState<Answer[]>(Array(10).fill(null));

  const handleDiscoveryAnswer = (i: number, v: Answer) => {
    setDiscoveryAnswers((prev) => {
      const next = [...prev];
      next[i] = v;
      return next;
    });
  };

  const handleMvpAnswer = (i: number, v: Answer) => {
    setMvpAnswers((prev) => {
      const next = [...prev];
      next[i] = v;
      return next;
    });
  };

  const submitDiscovery = () => {
    const s = scoreOf(discoveryAnswers);
    setStage(s <= 5 ? 'result-discovery-low' : 'result-discovery-high');
  };

  const submitMvp = () => {
    const s = scoreOf(mvpAnswers);
    setStage(s <= 6 ? 'result-mvp-low' : 'result-mvp-high');
  };

  const restart = () => {
    setDiscoveryAnswers(Array(10).fill(null));
    setMvpAnswers(Array(10).fill(null));
    setStage('landing');
  };

  switch (stage) {
    case 'landing':
      return <LandingScreen onStart={() => setStage('discovery')} />;

    case 'discovery':
      return (
        <ChecklistScreen
          stageLabel="Stage 1 of 2 · Customer Discovery"
          stageNum="1"
          title="Do You Really Know Your Users?"
          subtitle="Answer honestly — this is about clarity, not perfection."
          questions={DISCOVERY_QUESTIONS}
          answers={discoveryAnswers}
          onAnswer={handleDiscoveryAnswer}
          onSubmit={submitDiscovery}
        />
      );

    case 'mvp':
      return (
        <ChecklistScreen
          stageLabel="Stage 2 of 2 · MVP Validation"
          stageNum="2"
          title="Is Your MVP Ready to Launch?"
          subtitle="Evaluate your MVP structure honestly to get the most accurate results."
          questions={MVP_QUESTIONS}
          answers={mvpAnswers}
          onAnswer={handleMvpAnswer}
          onSubmit={submitMvp}
        />
      );

    case 'result-discovery-low':
      return (
        <ResultScreen
          type="discovery-low"
          score={scoreOf(discoveryAnswers)}
          total={10}
          onRestart={restart}
        />
      );

    case 'result-discovery-high':
      return (
        <ResultScreen
          type="discovery-high"
          score={scoreOf(discoveryAnswers)}
          total={10}
          onNext={() => setStage('mvp')}
          onRestart={restart}
        />
      );

    case 'result-mvp-low':
      return (
        <ResultScreen
          type="mvp-low"
          score={scoreOf(mvpAnswers)}
          total={10}
          onRestart={restart}
        />
      );

    case 'result-mvp-high':
      return (
        <ResultScreen
          type="mvp-high"
          score={scoreOf(mvpAnswers)}
          total={10}
          onRestart={restart}
        />
      );

    case 'payment-success':
      return <PaymentSuccess />;
  }
}