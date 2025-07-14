import type { Category } from "./Category";

export interface Test {
  id: number,
  title: string,
  description: Text,
  created_at: Date,
  updated_at: Date,
  categories: Category[]
}