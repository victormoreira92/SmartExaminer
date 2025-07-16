import { Card } from "flowbite-react";
import { useState } from "react";
import { createTest } from "~/services/testService";
import type { Test } from "~/types/Test";
import CreateCategory from "../category/CreateCategory";

export default function CreateTest(){
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onSubmitTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !description) {
      return null;
    }
    const testData = {
      title,
      description,
    };
    createTest(testData);
    setTitle('');
    setDescription('');
  };
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
      <CreateCategory />
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