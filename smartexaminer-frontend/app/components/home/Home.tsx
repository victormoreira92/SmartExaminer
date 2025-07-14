import Banner from "~/components/home/banner";
import Contato from "~/components/home/contato";
import Header from "~/components/home/header";
import Servicos from "~/components/home/servicos";
import Testmonials from "~/components/home/testmonials";

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
