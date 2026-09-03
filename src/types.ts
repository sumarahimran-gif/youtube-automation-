export interface FAQItem {
  id: string;
  question: string;
  answer: string | string[];
}

export type LegalDocType = 'terms' | 'privacy' | 'refund' | null;
