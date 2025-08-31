import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageSquare, FileText, Heart } from "lucide-react";
import heroImage from "@/assets/hero-humanized-medical.jpg";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Transforma tu clínica con
                <span className="bg-gradient-hero bg-clip-text text-transparent"> IA conversacional </span>
                en WhatsApp
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Automatiza agendamiento, reduce no-show hasta 40% y mejora la experiencia del paciente con Agentes IA que trabajan 24/7 por WhatsApp.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6 h-auto"
                onClick={() => window.open('https://wa.me/14158147249?text=Quiero%20una%20demo%20de%20MedAssist%20para%20mi%20clínica', '_blank')}
              >
                Solicitar Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 h-auto"
                onClick={() => window.open('https://wa.me/14158147249?text=Hola%2C%20quiero%20conocer%20más%20sobre%20MedAssist', '_blank')}
              >
                Contactar por WhatsApp
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Agendamiento por WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Flows + Agentes IA</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-hero rounded-3xl opacity-20 blur-3xl transform rotate-6"></div>
            <img 
              src={heroImage} 
              alt="IA para clínicas médicas"
              className="relative rounded-3xl shadow-glow w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;