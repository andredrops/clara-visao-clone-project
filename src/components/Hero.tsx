
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="inicio" className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Sua visão merece <span className="text-primary-600">nosso melhor cuidado</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Na Ótica Pública Visão Clara, combinamos tecnologia avançada e profissionais experientes para proporcionar a melhor experiência em cuidados com sua visão.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary-600 hover:bg-primary-700 text-lg py-6 px-8">
                Agendar Consulta
              </Button>
              <Button variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-50 text-lg py-6 px-8">
                Nossos Serviços
              </Button>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1617373310678-e3ef6c8e744a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
              alt="Exame de visão sendo realizado" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
