import { Card, Select } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { enumQuestions, showQuestion, updateQuestion } from "~/services/questionService";
import EditorQuestion from "../createQuestion/EditorQuestion";

export default function UpdateQuestion() {
  const { id } = useParams(); 
  const [content, setContent] = useState('');
  const [score, setScore] = useState<number>(0);  
  const [feedback_incorrect, setFeedback_incorrect] = useState('');
  const [feedback_correct, setFeedback_correct] = useState('');
  const [type_answer, setType_answer] = useState<number>(0);
  const [enums, setEnums] = useState([]);
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
        score
      }
    };
    updateQuestion(Number(id), updatedQuestion);
    navigate('/questions')
  };

  useEffect(() => {
      enumQuestions()
        .then(setEnums)
        .catch(console.error);
      }, []);

  return (
    <Card className="p-6 w-full">
      <div className="w-full text-black">
        <h5 className="text-xl font-bold mb-4">Atualizar Pergunta</h5>
        <form onSubmit={onSubmitForm} className="flex flex-col gap-4">
          <div>
            <label className="block mb-1 font-medium">Tipo de Resposta</label>
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