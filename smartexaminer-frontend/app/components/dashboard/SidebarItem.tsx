import type { ReactNode } from "react"
import { Link } from "react-router"

interface SidebarItemProps {
  icon: ReactNode,
  label: string,
  to: string
}

export default function SidebarItem({ icon, label, to }: SidebarItemProps){
  return (
     <li className="flex items-center py-3 font-bold text-gray-500 hover:text-blue-500">
      {icon}
      <Link className="px-2" to={to}>
        {label}
      </Link>
    </li>
  )
}