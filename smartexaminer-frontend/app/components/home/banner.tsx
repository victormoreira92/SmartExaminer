export default function Banner(){
  return (
    <section className=" py-6" id="home">
          <div className="flex justify-between">
            <div className="w-2xl px-12">
              <h2 className="text-3xl text-blue-800 py-3 stroke-1">
                Simplifique a aplicação de provas com o <span className="font-bold">SmartExaminer</span>
              </h2>
              <h3 className="text-1xl text-blue-400">
                Crie, gerencie e acompanhe testes de forma inteligente e eficiente. A solução ideal para instituições e professores que desejam modernizar seus processos de avaliação.
              </h3>
            </div>
            <div className="w-2xl">
              <button className="text-green-600">
                Entre
              </button>
            </div>
          </div>
        </section>
  )
}