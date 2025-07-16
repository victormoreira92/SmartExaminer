import { deleteTest } from '~/services/testService';
import { useNavigate } from 'react-router';

export default function DeleteTest({ id }: { id: number }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (confirm("Tem certeza que deseja deletar este teste?")) {
      await deleteTest(id);
      navigate('/dashboard'); // ou redirecione para sua rota de listagem
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
