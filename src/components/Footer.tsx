
const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold mb-4">Ótica Pública</h3>
            <p className="text-gray-300">
              Promovendo acesso à saúde visual e inclusão social para todos os brasileiros.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-300 hover:text-white transition-colors">Início</a></li>
              <li><a href="#objetivos" className="text-gray-300 hover:text-white transition-colors">Nossos Objetivos</a></li>
              <li><a href="#impacto" className="text-gray-300 hover:text-white transition-colors">Impacto Real</a></li>
              <li><a href="#beneficios" className="text-gray-300 hover:text-white transition-colors">Benefícios</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Contato</h4>
            <p className="mb-2 text-gray-300">Pedro Tahara</p>
            <p className="mb-4 text-gray-300">Gestor do Programa</p>
            <p className="mb-2 text-gray-300">atendimento@oticapublica.com.br</p>
            <p className="text-gray-300">(11) 91198-9258</p>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <p className="text-center text-gray-400 text-sm">
          © {year} Ótica Pública. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
