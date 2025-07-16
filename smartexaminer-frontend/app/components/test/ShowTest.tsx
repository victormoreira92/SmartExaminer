import { Button, Card } from "flowbite-react";
import { ArrowBigLeft, EllipsisIcon, Play } from "lucide-react";
import { Link } from "react-router";
import type { Test } from "~/types/Test";

export default function ShowTest({test, id}){
    return (
      <div className="w-full flex flex-col items-start p-6 gap-4">
          <Card className="w-full text-black flex justify-between ">
          <div className="flex justify-between">
          <div className="w-1/2">
            <h5 className="text-1xl font-bold tracking-tight text-gray-900">
              {test?.title}
            </h5>
            <span className="p-1 border-4 border-green-700 text-[14px] text-green-700 font-bold uppercase">{test?.status}</span>
            <p className="text-[16px] text-gray-700 pt-2 dark:text-gray-400">
              Numro de Questions
            </p>
            <p className="text-purple-500 text-[14px] pt-2">#{test?.categories.map((category)=>(category.category_name))}</p>
            <div className="flex pt-3 gap-4">
              <Button className="rounded-sm text-[16px]"><ArrowBigLeft />Assign Test</Button>
              <Button className="rounded-sm text-[16px]"><Play />Preview</Button>
              <Link className="px-2" to={`/test/${id}/basic-settings`}><Button className="rounded-sm text-[16px]">Editar</Button></Link>
            </div>
          </div>
          <div className="1/2 flex items-center px-3">
            <div>
              <Button className="rounded-sm">Manage Questions</Button>
            </div>
          </div>
            
          </div>
        </Card>
        <Card>
          <h5 className="w-full text-black">Not Signed</h5>
        </Card>
      </div>
    )
}