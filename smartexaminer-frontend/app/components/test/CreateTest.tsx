import { Card, Select } from "flowbite-react";
import { useEffect, useState } from "react";
import { createTest } from "~/services/testService";
import type { Test } from "~/types/Test";
import CreateCategory from "../category/CreateCategory";
import type { Category } from "~/types/Category";
import { getCategories } from "~/services/categoryService";

export default function CreateTest(){
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState<Category[]>([]);
  const [category_ids, setCategory_ids] = useState<number | null>(null);


  const onSubmitTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !description) {
      return null;
    }
    const testData = {
      test: {
        title,
        description,
        category_ids
      }
    }
    createTest(testData);
    setTitle('');
    setDescription('');
  };

  useEffect(() => {
    getCategories()
      .then(setCategories)
      .catch(console.error);
  }, []);

  return (
    <Card>
      <div className="text-black">
        <h5>Creatte Test</h5>
        <form onSubmit={(e)=> onSubmitTask(e)}>
         <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          name="title"
          placeholder="Digite o título da tarefa"
          className="border border-gray-100 p-1 bg-white rounded-md"
      ></input>
      <CreateCategory 
        onCreated={ async () => {
          const updatedCategories = await getCategories();
            setCategories(updatedCategories);
        }}
      />
      <Select
        onChange={(e) => setCategory_ids(Number(e.target.value))}
      >
        {categories.map((category, index) => (
        
         <option selected={index === 0} key={category.id} value={category.id}>
            {category.category_name}
         </option>
        ))}
      </Select>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        name="description"
        placeholder="Digite a descrição da tarefa"
        className="border border-gray-100 p-1 bg-white rounded-md"
      ></input>
        <button 
        type='submit'
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Create Test
      </button>
        </form>
      </div>
    </Card>
  )
}