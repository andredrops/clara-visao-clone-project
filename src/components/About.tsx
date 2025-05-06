
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="sobre" className="section-container bg-blue-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-xl overflow-hidden shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1565378435245-4242bc20c90a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
            alt="Equipe de Óticos e Oftalmologistas" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sobre a Ótica Pública Visão Clara</h2>
          
          <p className="text-lg text-gray-700 mb-4">
            Há mais de 15 anos, a Ótica Pública Visão Clara tem se dedicado a oferecer serviços de qualidade em saúde visual para a nossa comunidade.
          </p>
          
          <p className="text-lg text-gray-700 mb-6">
            Nossa missão é garantir que cada cliente receba atendimento personalizado e soluções adequadas às suas necessidades visuais, combinando expertise técnica, tecnologia de ponta e produtos de alta qualidade a preços acessíveis.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-primary-600 font-bold text-2xl mb-2">15+</div>
              <div className="text-gray-700">Anos de experiência</div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-primary-600 font-bold text-2xl mb-2">5000+</div>
              <div className="text-gray-700">Clientes satisfeitos</div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-primary-600 font-bold text-2xl mb-2">10+</div>
              <div className="text-gray-700">Especialistas</div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-primary-600 font-bold text-2xl mb-2">100%</div>
              <div className="text-gray-700">Compromisso</div>
            </div>
          </div>
          
          <Button className="bg-primary-600 hover:bg-primary-700">
            Conheça Nossa Equipe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
