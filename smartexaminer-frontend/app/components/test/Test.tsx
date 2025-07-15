import { Button, Card, Popover } from "flowbite-react";
import SidebarDashboard from "../dashboard/sidebar";
import SidebarTest from "./SidebarTest";
import { ArrowBigLeft, Badge, Book, BookIcon, EllipsisIcon, Play } from "lucide-react";
import { useLocation, useParams } from "react-router";
import type { Test } from "~/types/Test";
import { useEffect, useState } from "react";
import { showTest } from "~/services/testService";

type LocationState = {
  test: Test;
};

export default function Test(){

  const location = useLocation();
  const { id } = useParams();
  const [test, setTest] = useState<Test>();

    useEffect(() => {
      if (!test && id){
        showTest(id).then(setTest).catch(console.error)
      }
    }), []

  return (
    <div className="w-full flex min-h-screen bg-gray-100">
      <SidebarDashboard />
      <div className=" w-full flex flex-col items-start p-6 gap-4">
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
              <button className="rounded-sm text-[16px]"><EllipsisIcon /></button>
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
    </div>
  )
}