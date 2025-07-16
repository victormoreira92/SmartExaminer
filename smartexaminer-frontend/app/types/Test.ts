import type { Category } from "./Category";

export interface Test {
  id: number,
  title: string,
  description: string,
  status: string,
  created_at: Date,
  updated_at: Date,
  categories: Category[]
}