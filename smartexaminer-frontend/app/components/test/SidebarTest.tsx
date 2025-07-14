import { Sidebar, SidebarCollapse, SidebarItem, SidebarItemGroup, SidebarItems, ThemeConfig } from "flowbite-react";
import { CogIcon, FileSlidersIcon, HelpingHandIcon, Hourglass, Square, SquareActivity, SquareActivityIcon, SquareMenuIcon } from "lucide-react";
import { Link, Outlet, Route, Routes, useNavigate } from "react-router";
import BasicsSettings from "./BasicSettings";

export default function SidebarTest(){
    const navigate = useNavigate();

  return (
    <div className="w-full flex min-h-screen">
      <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <SidebarItems >
        <SidebarItemGroup>
          <SidebarCollapse className="font-bold text-[18px]" label="Test Configuration">
            <Link to={{pathname: "/test/basic-settings"}}>
              <SidebarItem icon={CogIcon}  href="#">Basics Settings</SidebarItem>
            </Link> 
            <Link to={{pathname: "/test/question-manager"}}>
              <SidebarItem icon={SquareMenuIcon} href="#">Questions Settings</SidebarItem>
            </Link>
            <SidebarItem icon={SquareActivityIcon} href="#">Basics Settings</SidebarItem>
          </SidebarCollapse>
          <SidebarCollapse className="font-bold text-[18px]" label="Test Application & Results">
            <SidebarItem icon={CogIcon} href="#">Basics Settings</SidebarItem>
            <SidebarItem icon={CogIcon} href="#">Basics Settings</SidebarItem>
          </SidebarCollapse>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
    <div className="flex-1 p-6 bg-white">
        <Outlet />
      </div>
    </div>
  )
}