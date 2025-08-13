import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, Smartphone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            ¿Listo para
            <span className="bg-gradient-hero bg-clip-text text-transparent"> revolucionar </span>
            tu clínica?
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Únete a cientos de médicos que ya están ahorrando tiempo y mejorando la atención con nuestra IA.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
              Comenzar Prueba Gratis Ahora
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
              Programar Demostración
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-secondary" />
              <span>Configuración en 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-secondary" />
              <span>Datos 100% seguros</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-secondary" />
              <span>Soporte en español</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;