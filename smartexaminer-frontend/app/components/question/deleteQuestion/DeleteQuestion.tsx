import { useNavigate } from 'react-router';
import { deleteQuestion } from '~/services/questionService';

export default function DeleteQuestion({ id }: { id: number }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (confirm("Tem certeza que deseja deletar este question?")) {
      await deleteQuestion(id);
      window.location.reload()
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
    >
      Deletar
    </button>
  );
}
