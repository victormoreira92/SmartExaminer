import type { Alternative } from "./Alternative";

export interface Question {
  id: number,
  content: string,
  feedback_correct: string,
  feedback_incorrect: string,
  score: number,
  type_answer: number,
  created_at: Date,
  updated_at: Date,
  alternatives: Alternative[]
}