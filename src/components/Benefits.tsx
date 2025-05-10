
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BenefitItem = ({ title, description }: { title: string; description: string }) => (
  <div className="mb-6">
    <div className="flex items-start">
      <div className="mr-4 mt-1">
        <div className="bg-primary-50 p-1 rounded-full">
          <Check className="h-5 w-5 text-primary-600" />
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-1">{title}</h4>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  </div>
);

const testimonials = [
  {
    quote: "Quando recebi meus óculos, foi como se um novo mundo se abrisse. Agora posso ler para meus netos e ver seus sorrisos com clareza. Este programa mudou minha vida de maneiras que eu nunca imaginei.",
    name: "Maria Silva",
    role: "Beneficiária do Programa"
  },
  {
    quote: "Depois de anos enxergando tudo embaçado, finalmente posso apreciar os detalhes do mundo ao meu redor. Recuperei minha independência e voltei a estudar, algo que parecia impossível antes. Sou eternamente grato por esta oportunidade.",
    name: "Ricardo Pereira",
    role: "Beneficiário do Programa"
  }
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Benefícios que vão além da visão
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Quando fornecemos óculos a quem precisa, estamos oferecendo muito mais do que apenas uma ferramenta para enxergar melhor. Estamos proporcionando:
            </h3>
            
            <div className="mt-8">
              <BenefitItem 
                title="Autoestima renovada"
                description="A capacidade de enxergar claramente devolve a confiança e revitaliza a imagem pessoal."
              />
              
              <BenefitItem 
                title="Confiança no dia a dia"
                description="Com uma visão adequada, as atividades diárias se tornam mais seguras e prazerosas."
              />
              
              <BenefitItem 
                title="Senso de pertencimento"
                description="Incluímos pessoas em atividades sociais e culturais que antes eram dificultadas pela baixa visão."
              />
            </div>
          </div>
          
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-50 border-none shadow-sm">
                <CardContent className="p-6">
                  <blockquote className="text-gray-700 italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
