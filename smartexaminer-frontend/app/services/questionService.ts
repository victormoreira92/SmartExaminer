import type { Question } from '~/types/Question';
import type { Test, TestResponse } from '../types/Test';
import { api } from "./api";

export const getQuestions = async (): Promise<Question[]> => {
  const response = await api.get<Question[]>('/questions')
  console.log(response.data)
  return response.data;
}

export const showQuestion = async (id: any): Promise<Question> => {
  try {
    const response = await api.get<Question>(`/questions/${id}`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error(error)
    throw new Error(`Erro ao buscar teste com ID ${id}:`);
  }
};

export const createQuestion = async (questionData: any): Promise<Question> => {
  try {
    const response = await api.post<Question>('/questions', questionData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar teste:', error);
    throw new Error('Erro ao criar teste');
  }
};

export const updateQuestion = async (
  id: number,
  data: any
) => {
  return api.put(`/questions/${id}`, data);
};

export const deleteQuestion = async (id: number) => {
  try {
    const response = await api.delete(`/questions/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao deletar teste com ID ${id}:`, error);
    throw error;
  }
};

export const enumQuestions = async (): Promise<any> => {
  const response = await api.get<any>('/questions/enums_question')
  console.log(response.data)
  return response.data;
}
