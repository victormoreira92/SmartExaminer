import type { Test } from '../types/Test';
import { api } from "./api";

export const getQuiz = async (): Promise<Test[]> => {
  const response = await api.get<Test[]>('/quizzes')
  console.log(response.data)
  return response.data;
}