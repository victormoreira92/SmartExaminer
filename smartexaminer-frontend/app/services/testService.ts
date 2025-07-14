import type { Test } from '../types/Test';
import { api } from "./api";

export const getTest = async (): Promise<Test[]> => {
  const response = await api.get<Test[]>('/tests')
  console.log(response.data)
  return response.data;
}