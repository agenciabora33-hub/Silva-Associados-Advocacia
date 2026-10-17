export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  badge: string;
  iconName: string;
  heroHeadline: string;
  longDescription: string;
  benefits: string[];
  stages: { step: string; title: string; description: string }[];
  documentsRequired: string[];
  faqs: { question: string; answer: string }[];
  targetAudience: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'familia' | 'inventario' | 'tea' | 'geral';
}

export interface LeadSubmission {
  nome: string;
  telefone: string;
  email: string;
  assunto: string;
  urgencia: 'imediata' | 'proximos_dias' | 'orientacao_preventiva';
  mensagem: string;
  cidade: string;
}
