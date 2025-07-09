import type { Quiz } from '../types/Quiz';
import { api } from "./api";

export const getQuiz = async (): Promise<Quiz[]> => {
  const response = await api.get<Quiz[]>('/quizzes')
  console.log(response.data)
  return response.data;
}