import SidebarDashboard from "~/components/dashboard/sidebar";
import QuestionTable from "./QuestionTable";
import type { Question } from "~/types/Question";
import { useEffect, useState } from "react";
import { getQuestions } from "~/services/questionService";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router";

export default function BankQuestion(){
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<Question[]>([]);
      useEffect(() => {
        getQuestions()
        .then(setQuestions).catch(console.error)
      }, []
    )
  return (
    <div className="w-full flex min-h-screen">
      <SidebarDashboard />
      <div className="flex flex-col w-full bg-gray-100">
        <div className="flex justify-between items-center">
        <h3 className="text-1xl text-center text-black">Meus Questions ({questions.length})</h3>
        <button onClick={() => navigate('/new-question')} className="bg-blue-400 flex justify-center text-white p-2 text-sm font-bold">
          <Plus /> Nova Question
        </button>
      </div>
        {questions.map((question) => (
        <QuestionTable question={question}/>       
      ))}  
      </div>

      
      
    </div>
  )
}