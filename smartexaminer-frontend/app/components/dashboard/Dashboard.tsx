import Panel from "~/components/dashboard/panel";
import Sidebar from "~/components/dashboard/sidebar";


export default function Dashboard(){

  return(
    <div className="w-full flex min-h-screen">
      <Sidebar />
      <Panel />
    </div>
  )
}