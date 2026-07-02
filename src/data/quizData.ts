import { Question } from '../types';
import { questionsPart1 } from './questionsPart1';
import { questionsPart2 } from './questionsPart2';
import { questionsPart3 } from './questionsPart3';
import { questionsPart4 } from './questionsPart4';

// Consolidating all questions to form the grand total of 300 questions (CEBRASPE simulated exam)
export const quizQuestions: Question[] = [
  ...questionsPart1,
  ...questionsPart2,
  ...questionsPart3,
  ...questionsPart4,
];
