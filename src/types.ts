export type Answer = 'yes' | 'no' | null;

export type Stage =
  | 'landing'
  | 'discovery'
  | 'result-discovery-low'
  | 'result-discovery-high'
  | 'mvp'
  | 'result-mvp-low'
  | 'result-mvp-high'
  | 'payment-success';

export interface ChecklistConfig {
  title: string;
  subtitle: string;
  stageLabel: string;
  questions: string[];
}
