import { Button, Card, Select } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { createQuestion, enumQuestions } from "~/services/questionService";
import EditorQuestion from "./EditorQuestion";
import { CheckCheckIcon, ListTodoIcon, TextCursorInputIcon, TextIcon } from "lucide-react";
import SidebarDashboard from "~/components/dashboard/sidebar";
import MultipleChoice from "../typeAnswers/MultipleChoice";
import TrueFalse from "../typeAnswers/TrueFalse";
import ShortAnswer from "../typeAnswers/ShortAnswer";
import FreeText from "../typeAnswers/FreeText";
import EssayAnswer from "../typeAnswers/EssayAnswer";

export default function CreateQuestion() {
  const [content, setContent] = useState('');
  const [score, setScore] = useState<number>(0);  
  const [feedback_incorrect, setFeedback_incorrect] = useState('');
  const [feedback_correct, setFeedback_correct] = useState('');
  const [type_answer, setType_answer] = useState<number>(0);
  const [enums, setEnums] = useState([]);
  const [ativo, setAtivo] = useState<string | null>(null)


  const navigate = useNavigate();


  const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setScore(value === '' ? 0 : parseInt(value, 10));
  };

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
  };

  const renderComponente = () => {
    switch (ativo) {
      case 'multiple_choice':
        return <MultipleChoice />
      case 'true_false':
        return <TrueFalse />
      case 'short_answer':
        return <ShortAnswer />
      case 'essay_text':
        return <EssayAnswer />
      default:
        return <p>Escolha um componente para visualizar</p>
    }
  }

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!content || !feedback_incorrect || !feedback_correct ||!type_answer) {
      return null;
    }
    const createdQuestion = {
      question: {
        content,
        feedback_incorrect,
        feedback_correct,
        type_answer,
        score
      }
    };
    console.log(createQuestion)
    createQuestion(createdQuestion);
    navigate('/questions')
  };

  useEffect(() => {
    enumQuestions()
      .then(setEnums)
      .catch(console.error);
    }, []);

  return (
    <div className="w-full flex min-h-screen">
      <SidebarDashboard />
      <div className="flex w-full justify-center p-4 bg-gray-100">
        <Card className="p-6">
        <div className="w-full text-black">
          <h5 className="text-xl font-bold mb-4">Criar Pergunta</h5>
          <form onSubmit={onSubmitForm} className="flex flex-col gap-4">
            <div>
              <label className="block mb-1 font-medium">Tipo de Resposta</label>
              <div className="flex gap-4 justify-between py-3">
                <Button onClick={()=>{setAtivo('multiple_choice')}} className="p-3 h-1/8 text-black text-[12px] bg-gray-200 hover:bg-gray-300">
                  <ListTodoIcon className="text-4xl text-black px-1" /> 
                  Multiple Choice
                </Button>
                <Button onClick={()=>{setAtivo('true_false')}} className="p-3 h-1/8 text-black text-[12px] bg-gray-200 hover:bg-gray-300">
                  <CheckCheckIcon className="text-4xl text-black px-1" /> 
                  True or False
                </Button>
                <Button onClick={()=>{setAtivo('short_answer')}}  className="p-3 h-1/8 text-black text-[12px] bg-gray-200 hover:bg-gray-300">
                  <TextCursorInputIcon className="text-4xl text-black px-1" />
                  Short Answer
                </Button>
                <Button onClick={()=>{setAtivo('essay_text')}} className="p-3 h-1/8 text-black text-[12px] bg-gray-200 hover:bg-gray-300">
                  <TextIcon className="text-4xl text-black px-1" />
                  Essay
                </Button>
              </div>
              
              
              <Select
                value={type_answer}
                onChange={(e) => setType_answer(Number(e.target.value))}
                required
              >
                <option value={0} disabled>Selecione um tipo</option>
                {enums.map((enumOption) => (
                  <option key={enumOption[0]} value={enumOption[0]}>
                    {enumOption[1]}
                  </option>
                ))}
              </Select>
            </div>
  
            <div>
              <label className="block mb-1 font-medium">Conteúdo da Pergunta</label>
              <EditorQuestion
                initialContent={content}
                content={content} // Sincroniza o conteúdo atual
                onContentChange={handleContentChange}
              />
            </div>
            <div>
            <label className="block mb-1 font-medium">Answers</label>
              {renderComponente()}
            </div>
  
            <div>
              <label className="block mb-1 font-medium">Pontuação</label>
              <input
                type="number"
                value={score}
                onChange={handleScoreChange}
                min={0}
                max={100}
                required
                placeholder="Pontuação"
                className="border border-gray-300 p-2 bg-white rounded-md w-full"
              />
            </div>
  
            <div>
              <label className="block mb-1 font-medium">Feedback para Resposta Correta</label>
              <input
                type="text"
                value={feedback_correct}
                onChange={(e) => setFeedback_correct(e.target.value)}
                required
                placeholder="Feedback para resposta correta"
                className="border border-gray-300 p-2 bg-white rounded-md w-full"
              />
            </div>
  
            <div>
              <label className="block mb-1 font-medium">Feedback para Resposta Incorreta</label>
              <input
                type="text"
                value={feedback_incorrect}
                onChange={(e) => setFeedback_incorrect(e.target.value)}
                required
                placeholder="Feedback para resposta incorreta"
                className="border border-gray-300 p-2 bg-white rounded-md w-full"
              />
            </div>
  
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mt-4"
            >
              Atualizar Pergunta
            </button>
          </form>
        </div>
      </Card>
      </div>
     
    </div>
  );
}
