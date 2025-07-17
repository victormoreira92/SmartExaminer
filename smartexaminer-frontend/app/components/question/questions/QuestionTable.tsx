import { Card } from "flowbite-react";
import type { Question } from "~/types/Question";
import DeleteQuestion from "../deleteQuestion/DeleteQuestion";

export default function QuestionTable({question}){
  const dataFormatada = new Date(question.created_at).toLocaleDateString('USA');

  return (
    <div className="w-full bg-gray-100 p-6">
      <Card className="text-black">
        <div className="flex justify-between">
          <h5>Question Order</h5>
          <div>
            <p className="p-3 inline">Type Question: <span className="p-2 bg-blue-800 text-white text-[14px]">{question.type_answer}</span></p>
            <p className="p-3 inline">Score: {question.score}</p>
          </div>
        </div>
        <div className="">
          <p>{question.content}</p>
        </div>
        <div>
          <p>Alternatives</p>
        </div>
        <div>
          <p>Created: {dataFormatada}</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-blue-800 text-white p-1">Edit</button> 
          <DeleteQuestion id={question.id} />
        </div>
      </Card>
    </div>
  )
}