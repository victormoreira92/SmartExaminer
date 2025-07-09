import { ChartPie, Ellipsis } from "lucide-react";

export default function Card({id, description, title, created_at}){
  const dataFormatada = new Date(created_at).toLocaleDateString('USA');

  return (
    <div id={id} className="bg-white rounded-2xl p-4 text-gray-400 w-full hover:shadow-xl shadow-gray-200">
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
        <span className="border border-gray-400 text-center py-1 px-2 text-[14px] hover:text-gray-700 font-bold">Sem Categoria</span>
      </div>
    </div>
  )
}