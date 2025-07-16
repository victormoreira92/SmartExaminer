import { Card, Select } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { showTest, updateTest } from "~/services/testService";
import { getCategories } from "~/services/categoryService";
import type { Category } from "~/types/Category";
import type { Test, TestResponse } from "~/types/Test";
import DeleteTest from "./DeleteTest";

export default function BasicSettings() {
  const { id } = useParams(); // rota: /tests/:id
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category_ids, setCategory_ids] = useState<number | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const navigate = useNavigate();


  // Carrega o teste existente
  useEffect(() => {
    if (!id) return;
    showTest(id)
      .then((data: any) => {
        setTitle(data.title);
        setDescription(data.description);
        setCategory_ids(data.category_ids); // ajuste se for array
      })
      .catch(console.error);
  }, [id]);

  // Carrega categorias
  useEffect(() => {
    getCategories()
      .then((cats) => {
        setCategories(cats);
      })
      .catch(console.error);
  }, []);

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(category_ids)
    if (!title || !description || !category_ids) {
      return null;
    }
    const updatedTest = {
      test: {
        title,
        description,
        category_ids
      }
    };
    updateTest(Number(id), updatedTest);
    navigate(`/test/${id}`);
  };

  return (
    <Card className="p-6 h-1/3 w-full">
      <div className="w-full text-black">
        <h5>Atualizar Teste</h5>
        <form onSubmit={(e) => onSubmitForm(e)}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Título"
            className="border border-gray-100 p-1 bg-white rounded-md"
          />

          <Select
            onChange={(e) => setCategory_ids(Number(e.target.value))}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.category_name}
              </option>
            ))}
          </Select>

          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição"
            className="border border-gray-100 p-1 bg-white rounded-md"
          />

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Atualizar Teste
          </button>
        </form>
        <DeleteTest
          id={Number(id)}
        />
      </div>
    </Card>
  );
}
