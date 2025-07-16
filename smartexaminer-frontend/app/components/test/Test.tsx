import { Button, Card, Popover } from "flowbite-react";
import SidebarDashboard from "../dashboard/sidebar";
import SidebarTest from "./SidebarTest";
import { ArrowBigLeft, Badge, Book, BookIcon, EllipsisIcon, Play } from "lucide-react";
import { Outlet, useLocation, useParams } from "react-router";
import type { Test } from "~/types/Test";
import { useEffect, useState } from "react";
import { showTest } from "~/services/testService";
import ShowTest from "./ShowTest";

type LocationState = {
  test: Test;
};

export default function Test(){

  const location = useLocation();
  const { id } = useParams();
  const [test, setTest] = useState<Test>();
  const showCard = !location.pathname.includes("basic-settings");


    useEffect(() => {
      if (!test && id){
        showTest(id).then(setTest).catch(console.error)
      }
    }), []

  return (
    <div className="w-full flex min-h-screen bg-gray-100">
      <SidebarDashboard />
       {showCard && (
        <ShowTest 
          test={test}
          id={id}
        />
      )}
      <Outlet />
    </div>
  )
}