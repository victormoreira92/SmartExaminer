import { Database, File, House, LogOut, Notebook, PanelLeftClose, Settings, Users } from "lucide-react";
import SidebarItem from "./SidebarItem";

export default function SidebarDashboard(){
  return (
    <aside className="sticky top-0 left-0 h-full p-6  w-1/5 border-r-2 bg-[#ffffff] text-blue-500 flex flex-col justify-between">
      <div className="h-3/4">
        <div className="w-28 py-6">
          <h2 className="text-blue-400">SmartExaminer</h2>
        </div>
        <ul>
          <SidebarItem icon={<House />} label="Dashboard" to="/dashboard" />
          <SidebarItem icon={<File />} label="Testes" to="/testes" />
          <SidebarItem icon={<Database />} label="Banco de Questões" to="/banco" />
          <SidebarItem icon={<Users />} label="Grupos" to="/grupos" />
        </ul>
        <div className="pt-30 h-1/4">
          <SidebarItem icon={<Settings />} label="Minha Conta" to="/conta" />
          <SidebarItem icon={<LogOut />} label="Log out" to="/logout" />
          <SidebarItem icon={<PanelLeftClose />} label="Hide" to="#" />
        </div>
      </div>
    </aside>
  )
}