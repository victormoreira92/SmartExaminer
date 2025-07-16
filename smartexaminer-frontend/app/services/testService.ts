import type { Test, TestResponse } from '../types/Test';
import { api } from "./api";

export const getTest = async (): Promise<Test[]> => {
  const response = await api.get<Test[]>('/tests')
  console.log(response.data)
  return response.data;
}

export const showTest = async (id: any): Promise<Test> => {
  try {
    const response = await api.get<Test>(`/tests/${id}`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error(error)
    throw new Error(`Erro ao buscar teste com ID ${id}:`);
  }
};

export const createTest = async (testData: any): Promise<TestResponse> => {
  try {
    console.log(testData)
    const response = await api.post<TestResponse>('/tests', testData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar teste:', error);
    throw new Error('Erro ao criar teste');
  }
};