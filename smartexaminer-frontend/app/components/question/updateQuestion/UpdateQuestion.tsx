import { Card, Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { enumQuestions, showQuestion, updateQuestion } from "~/services/questionService";
import EditorQuestion from "../createQuestion/EditorQuestion";
import MultipleChoiceEditor from "./MultipleChoiceEditor";
import TrueFalseEditor from "./TrueFalseEditor";
import ShortAnswerEditor from "./ShortAnswerEditor";
import { CheckCheckIcon, ListTodoIcon, TextCursorInputIcon, TextIcon } from "lucide-react";


export default function UpdateQuestion() {
  const { id } = useParams(); 
  const [content, setContent] = useState('');
  const [score, setScore] = useState<number>(0);  
  const [feedback_incorrect, setFeedback_incorrect] = useState('');
  const [feedback_correct, setFeedback_correct] = useState('');
  const [type_answer, setType_answer] = useState('');
  const [enums, setEnums] = useState([]);
  const [alternatives_attributes, setAlternatives] = useState([]);
  const navigate = useNavigate();


  // Carrega o teste existente
  useEffect(() => {
    if (!id) return;
    showQuestion(id)
      .then((data: any) => {
        setContent(data.content);
        setScore(data.score);
        setFeedback_incorrect(data.feedback_incorrect);
        setFeedback_correct(data.feedback_correct);
        setType_answer(data.type_answer)
        setAlternatives(data.alternatives || []);
      })
      .catch(console.error);
  }, [id]);

  const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setScore(value === '' ? 0 : parseInt(value, 10));
  };

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!content || !feedback_incorrect || !feedback_correct || !type_answer) {
      return null;
    }
    const updatedQuestion = {
      question: {
        content,
        feedback_incorrect,
        feedback_correct,
        type_answer,
        score, 
        alternatives_attributes
      }
    };
    updateQuestion(Number(id), updatedQuestion);
    //navigate('/questions')
  };

  useEffect(() => {
      enumQuestions()
        .then(setEnums)
        .catch(console.error);
      }, []);

  const renderComponentByButton = () => {
      switch (type_answer) {
        case 'multi_choice':
          return <MultipleChoiceEditor alternatives={alternatives_attributes} setAlternatives={setAlternatives} />
        case 'true_or_false':
          return <TrueFalseEditor alternative={alternatives_attributes} setAlternatives={setAlternatives} />
        case 'short_answer':
          return <ShortAnswerEditor alternative={alternatives_attributes} setAlternatives={setAlternatives} />
        case 'essay_text':
          return <p>Escolha um componente para visualizar</p>
      }
    }

  return (
    <Card className="p-6 w-full">
      <div className="w-full text-black">
        <h5 className="text-xl font-bold mb-4">Atualizar Pergunta</h5>
        <form onSubmit={onSubmitForm} className="flex flex-col gap-4">
          <div>
            <label className="block mb-1 font-medium">Tipo de Resposta</label>
            <div>
              <div className="flex gap-4 justify-between py-3">
                <Button onClick={()=>{
                                setType_answer('multi_choice')
                                }} 
                  className={`p-3 h-1/8 text-black text-[12px] bg-gray-200 hover:bg-gray-300 ${type_answer == 'multi_choice' ? 'border border-3 border-primary-300' : ''}`}>
                  <ListTodoIcon className="text-4xl text-black px-1" /> 
                  Multiple Choice
                </Button>
                <Button onClick={()=>{
                    setType_answer('true_false')}}
                    className={`${type_answer =='true_or_false' ? 'border border-3 border-primary-300' : ''} p-3  h-1/8 text-black  text-[12px] bg-gray-200 hover:bg-gray-300 `}>
                  <CheckCheckIcon className="text-4xl text-black px-1" /> 
                  True or False
                </Button>
                <Button onClick={()=>{
                  setType_answer('short_answer')}}  
                  className={`p-3 h-1/8 text-black text-[12px] bg-gray-200 hover:bg-gray-300 ${type_answer == 'short_answer' ? 'border border-3 border-primary-300' : ''}`}>
                  <TextCursorInputIcon className="text-4xl text-black px-1" />
                  Short Answer
                </Button>
                <Button onClick={()=>{
                  setType_answer('essay_text')}} className={`p-3 h-1/8 text-black text-[12px] bg-gray-200 hover:bg-gray-300 ${type_answer == 'border border-3 border-primary-300' ? 'border-primary-300' : ''}`}>
                  <TextIcon className="text-4xl text-black px-1" />
                  Essay
                </Button>
              </div>
            </div>
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
              {renderComponentByButton()}
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
  );
}