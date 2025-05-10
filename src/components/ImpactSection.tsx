
import { Glasses } from "lucide-react";

const ImpactSection = () => {
  return (
    <section id="impacto" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <Glasses className="h-16 w-16 text-primary-600" />
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Impacto Real
        </h3>
        
        <div className="mb-6">
          <span className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary-600 mb-4 block">
            15.330
          </span>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-700">
          Óculos entregues e vidas transformadas
        </p>
      </div>
    </section>
  );
};

export default ImpactSection;
