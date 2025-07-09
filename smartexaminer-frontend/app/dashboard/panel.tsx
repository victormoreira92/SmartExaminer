import { Plus } from "lucide-react";
import Card from "./card";
import { useEffect, useState } from "react";
import type { Quiz } from "~/types/Quiz";
import { getQuiz } from "~/services/quizService";

export default function Panel(){
    const [quizzes, setQuizzes] = useState<Quiz[]>([]);
    useEffect(() => {
      getQuiz().then(setQuizzes).catch(console.error)
    }, []
  )
  return (
    <div className="bg-gray-100 w-full p-6">
      <div className="flex justify-between items-center">
        <h3 className="text-1xl text-center text-black">Meus Testes ({quizzes.length})</h3>
        <button className="bg-blue-400 flex justify-center text-white p-2 text-sm font-bold">
          <Plus /> Novo Teste
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 py-6">
        {quizzes.map((quiz) => (
          <Card
            id={quiz.id}
            title={quiz.title}
            description={quiz.description}
            created_at={quiz.created_at}
          />        
        ))}  
      </div>
    </div>
  )
}