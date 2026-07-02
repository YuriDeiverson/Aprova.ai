export interface StudyCard {
  id: string;
  title: string;
  paretoRatio: string; // e.g. "Alta Relevância (80/20)"
  isQuente: boolean;
  content: string; // Markdown or rich HTML-friendly text
  keyTakeaways: string[];
  materials?: string[];
  tools?: string[];
}

export interface StudySection {
  id: string;
  title: string;
  icon: string;
  color: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  weight: string; // Percentage of questions in exam
  paretoJustification: string;
  cards: StudyCard[];
}

export type QuestionCategory = 
  // SEPLAG Informática
  | 'Português'
  | 'TI Básica'
  | 'Ética e Compliance'
  | 'Conhecimentos de Alagoas'
  | 'Conhecimentos Específicos'
  
  // Técnico em Enfermagem
  | 'Fundamentos de Enfermagem'
  | 'Saúde Pública e SUS'
  | 'Urgência e Emergência'
  | 'Farmacologia e Administração'
  
  // Jornalismo
  | 'Teorias da Comunicação'
  | 'Técnicas de Redação'
  | 'Assessoria de Imprensa'
  | 'Jornalismo Digital e Web'
  | 'Marco Legal de CT&I e FAPEAL'
  | 'Divulgação Científica e Sistemas de Inovação'
  | 'Ética e Legislação dos Meios';

export interface Question {
  id: number;
  category: QuestionCategory;
  text: string;
  correct: 'Certo' | 'Errado';
  explanation: string;
  reference?: string; // e.g., "CEBRASPE - TRT 8 - 2022"
  passageId?: string; // e.g., "capitalismo-vigilancia"
}

export interface QuizState {
  answers: { [key: number]: 'Certo' | 'Errado' };
  submitted: { [key: number]: boolean };
  scoreMode: 'tradicional' | 'simples'; // tradicional = Cebraspe (-1 for wrong), simples = +1 for right
}

export interface StudyBlock {
  id: string;
  title: string;
  duration: string; // e.g., "2h"
  methodology: string; // e.g., "30% Teoria, 50% Exercícios, 20% Revisão"
  subtopics: string[];
  done: boolean;
}

export interface ScheduleWeek {
  id: string;
  title: string;
  dateRange: string;
  focus: string;
  blocks: StudyBlock[];
}