import { Plus } from "lucide-react";
import Card from "./card";
import { useEffect, useState } from "react";
import type { Test } from "~/types/Test";
import { getQuiz } from "~/services/quizService";

export default function Panel(){
    const [tests, setTests] = useState<Test[]>([]);
    useEffect(() => {
      getQuiz().then(setTests).catch(console.error)
    }, []
  )
  return (
    <div className="bg-gray-100 w-full p-6">
      <div className="flex justify-between items-center">
        <h3 className="text-1xl text-center text-black">Meus Testes ({tests.length})</h3>
        <button className="bg-blue-400 flex justify-center text-white p-2 text-sm font-bold">
          <Plus /> Novo Teste
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 py-6">
        {tests.map((test) => (
          <Card
            id={test.id}
            title={test.title}
            description={test.description}
            created_at={test.created_at}
          />        
        ))}  
      </div>
    </div>
  )
}