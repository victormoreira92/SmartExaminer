import SidebarDashboard from "../dashboard/sidebar";
import SidebarTest from "./SidebarTest";

export default function Test(){
  return (
    <div className="w-full flex min-h-screen">
      <SidebarDashboard />
      <SidebarTest />
    </div>
  )
}