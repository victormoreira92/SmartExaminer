import { ChartPie, Ellipsis } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { showTest } from "~/services/testService";

export default function Card({id, description, title, created_at, categories}){
  const dataFormatada = new Date(created_at).toLocaleDateString('USA');
  const navigate = useNavigate();

  const handleCardClick = async () => {
    try {
      const test = await showTest(id); // Faz a requisição para obter os dados do teste
      navigate(`/test/${id}`, { state: { test } }); 
    } catch (error) {
      console.error('Erro ao buscar teste:', error);
    }
  };
  return (
    <div onClick={()=> handleCardClick()} id={id} className="bg-white rounded-2xl p-4 text-gray-400 w-full hover:shadow-xl shadow-gray-200">
      <div className="flex justify-between">
        <div className="flex justify-between gap-2 items-center">
          <span className="border border-gray-400 text-center py-1 px-2 text-[12px]">Ended</span>
          <p className="text-gray-400 text-sm text-[12px] font-bold">
            Created: {dataFormatada}
          </p>
        </div>
        <button className="p-2">
          <Ellipsis />
        </button>
      </div>
      <div>
        <h4 className="font-bold text-2xl text-black py-2">
          {title}
        </h4>
        <p className="text-sm overflow-ellipsis">
          {description}
        </p>
      </div>
      <div className="flex justify-between pt-4">
        <div className="flex justify-center text-[13px] ">
          <p className="flex gap-1"><ChartPie /> avg. score | Results (0)</p>
          <p></p>
        </div>
        <span className="border border-gray-400 text-center py-1 px-2 text-[14px] hover:text-gray-700 font-bold">{categories}</span>
      </div>
    </div>
  )
}