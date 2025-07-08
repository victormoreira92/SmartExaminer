import { Link } from "react-router"
export default function Header(){
  return (
     <header className="w-screen">
          <nav className="flex justify-around px-2 py-2.5">
            <div className="p-3 text-amber-600">
              SmartExaminer
            </div>
            <ul className="flex justify-between p-2">
              <li>
                <a className="text-green-600 hover:text-green-800 px-3" href="#Home">Home</a>
              </li>
              <li>
                <a className="text-green-600 hover:text-green-800 px-3" href="#sobre">Sobre</a>
              </li>
              <li>
                <a className="text-green-600 hover:text-green-800 px-3" href="#servicos">Serviços</a>
              </li>
              <li>
                <a className="text-green-600 hover:text-green-800 px-3" href="#contato">Contato</a>
              </li>
            </ul>
            <button  className="bg-green-600 text-amber-100 text-1xl rounded-lg px-2">
              <Link to="/dashboard">Entrar</Link>
            </button>
          </nav>
        </header>
  )
}