import { Card, Select } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { showQuestion, updateQuestion } from "~/services/questionService";

export default function BasicSettings() {
  const { id } = useParams(); 
  const [content, setContent] = useState('');
  const [score, setScore] = useState<number>(0);  
  const [feedback_incorrect, setFeedback_incorrect] = useState('');
  const [feedback_correct, setFeedback_correct] = useState('');
  const [type_answer, setType_answer] = useState('');
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
  };

  return (
    <Card className="p-6 h-1/3 w-full">
      <div className="w-full text-black">
        <h5>Atualizar Question</h5>
        <form onSubmit={(e) => onSubmitForm(e)}>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            placeholder="Content"
            className="border border-gray-100 p-1 bg-white rounded-md"
          />

          <input
            type="number"
            value={score}
            onChange={handleScoreChange}
            min={0}
            max={100}
            required
            placeholder="Score"
            className="border border-gray-100 p-1 bg-white rounded-md"
          />

          <input
            type="text"
            value={feedback_correct}
            onChange={(e) => setFeedback_correct(e.target.value)}
            required
            placeholder="Feedback Positivo"
            className="border border-gray-100 p-1 bg-white rounded-md"
          />

          <input
            type="text"
            value={feedback_incorrect}
            onChange={(e) => setFeedback_incorrect(e.target.value)}
            required
            placeholder="Feedback Positivo"
            className="border border-gray-100 p-1 bg-white rounded-md"
          />

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Atualizar Teste
          </button>
        </form>
      </div>
    </Card>
  );
}
