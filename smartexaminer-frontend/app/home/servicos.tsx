import creationTest from './assets/creationTest.jpg'
import provaImagem from './assets/prova.jpg'
import sessionImagem from './assets/correction.png'
export default function Servicos(){
  return (
    <section className="flex justify-around text-blue-300 p-6" id="servicos">
      <div className="flex flex-col justify-center w-3xs px-4">
        <img 
          src={creationTest}
          alt='Drawing of creation test'
        />
        <h4 className='text-2xl'>
          Monte provas personalizadas com facilidade
        </h4>
        <p className='text-base/6 py-2'>
          Adicione questões com diferentes tipos de resposta, 
          defina pontuação, tempo de execução e publique em poucos cliques.
        </p>
      </div>

      <div className="flex flex-col justify-center w-3xs px-4">
        <img 
          src={provaImagem}
          alt='Drawing of test'
        />
        <h4 className='text-2xl'>
          Avaliação instantânea e precisa
        </h4>
        <p className='text-base/6 py-2'>
          Adicione questões com diferentes tipos de resposta, 
          defina pontuação, tempo de execução e publique em poucos cliques.
        </p>
      </div>

      <div className="flex flex-col justify-center w-3xs px-4">
        <img 
          src={creationTest}
          alt='Drawing of test'
        />
       <h4 className='text-2xl'>
          Aplicação de provas com segurança e integridade
        </h4>
        <p className='text-base/6 py-2'>
          Evite fraudes com recursos de controle de tempo, 
          bloqueio de abas e monitoramento inteligente durante os testes.
        </p>
      </div>
    </section>
  )
}