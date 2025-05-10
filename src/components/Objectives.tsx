
import { Users, Book, Cpu, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const objectiveItems = [
  {
    icon: <Users className="h-12 w-12" />,
    title: "Inclusão Social",
    description: "Promovemos o acesso igualitário a recursos visuais, independente da condição socioeconômica."
  },
  {
    icon: <Book className="h-12 w-12" />,
    title: "Acesso à Educação",
    description: "Facilitamos o aprendizado através da melhoria da visão, crucial para o desenvolvimento educacional."
  },
  {
    icon: <Cpu className="h-12 w-12" />,
    title: "Produtividade Pessoal",
    description: "Ajudamos a melhorar o desempenho no trabalho e nas atividades diárias com uma visão adequada."
  },
  {
    icon: <Heart className="h-12 w-12" />,
    title: "Saúde Visual Comunitária",
    description: "Incentivamos o cuidado preventivo com a saúde dos olhos em comunidades de todo o país."
  }
];

const Objectives = () => {
  return (
    <section id="objetivos" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nossos Objetivos</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Trabalhamos para criar um impacto positivo duradouro na vida das pessoas através de quatro pilares principais:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {objectiveItems.map((item, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="text-primary-600 p-4 rounded-full bg-primary-50">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
