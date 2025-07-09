import Panel from "~/dashboard/panel";
import Sidebar from "~/dashboard/sidebar";


export default function Dashboard(){

  return(
    <div className="w-full flex min-h-screen">
      <Sidebar />
      <Panel />
    </div>
  )
}