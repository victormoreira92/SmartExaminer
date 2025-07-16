import type { Category } from './../types/Category';
import { api } from "./api";

export const createCategory = async (categoryData: any): Promise<Category> => {
  try {
    const response = await api.post<Category>('/categories', categoryData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar categoria:', error);
    throw new Error('Erro ao criar categoria');
  }
};