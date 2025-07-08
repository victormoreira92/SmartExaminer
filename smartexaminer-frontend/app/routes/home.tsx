import Banner from "~/home/banner";
import Contato from "~/home/contato";
import Header from "~/home/header";
import Servicos from "~/home/servicos";
import Testmonials from "~/home/testmonials";

export default function Home() {
  return (
    <div className="bg-white">
      <Header></Header>
      <Banner></Banner>
      <Servicos></Servicos>
      <Testmonials></Testmonials>  
      <Contato></Contato>
    </div>
  )
}
