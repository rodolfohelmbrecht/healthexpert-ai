import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, Smartphone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Pronto para
            <span className="bg-gradient-hero bg-clip-text text-transparent"> revolucionar </span>
            sua clínica?
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Junte-se a centenas de médicos que já estão economizando tempo e melhorando o atendimento com nossa IA.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
              Começar Teste Grátis Agora
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
              Agendar Demonstração
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-secondary" />
              <span>Configuração em 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-secondary" />
              <span>Dados 100% seguros</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-secondary" />
              <span>Suporte em português</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;