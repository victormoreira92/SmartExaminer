import { Card } from "flowbite-react";
import type { Question } from "~/types/Question";
import DeleteQuestion from "../deleteQuestion/DeleteQuestion";
import sanitizeHtml from "sanitize-html"
import { Link } from "react-router";

export default function QuestionTable({question}){
  const dataFormatada = new Date(question.created_at).toLocaleDateString('USA');
  const sanitizedContent = sanitizeHtml(question.content, {
    allowedTags: ['p', 'span', 'strong', 'em', 'ul', 'ol', 'li', 'table', 'tr', 'td', 'img'],
    allowedAttributes: {
      span: ['style'],
      img: ['src'],
    },
  });
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
        <div
            className="prose max-h-40 overflow-y-auto border-gray-300 p-2 rounded-md"
            dangerouslySetInnerHTML={{__html: sanitizedContent}}
        />
        <div>
          <p>{question.alternatives.map((aleternative) => (
            <div>
              <p>{aleternative.content}</p>
              <p>{aleternative.is_correct}</p>
            </div>
          ))}</p>
        </div>
        <div>
          <p>Created: {dataFormatada}</p>
        </div>
        <div className="flex gap-2">
          <Link to={`/question/${question.id}`}><button className="bg-blue-800 text-white p-1">Edit</button> </Link>
          <DeleteQuestion id={question.id} />
        </div>
      </Card>
    </div>
  )
}