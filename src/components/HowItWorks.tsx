import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Configuración Simple",
      description: "Nuestro equipo configura la IA en 24h con los datos de tu clínica. Sin complicaciones, sin código.",
    },
    {
      number: "02", 
      title: "Entrenamiento Personalizado",
      description: "La IA aprende sobre tu especialidad, protocolos y forma de atención para ser más eficiente.",
    },
    {
      number: "03",
      title: "Integración Completa",
      description: "Conectamos con tu sistema actual (agenda, WhatsApp, SMS) para automatización total.",
    },
    {
      number: "04",
      title: "Resultados Inmediatos",
      description: "Comienza a ahorrar tiempo y mejorar la atención desde el primer día de uso.",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Cómo
            <span className="bg-gradient-hero bg-clip-text text-transparent"> implementamos </span>
            en tu clínica
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proceso simple y rápido para tener tu IA funcionando perfectamente en pocos días.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-button">
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
                
                {index < steps.length - 1 && index % 2 === 0 && (
                  <div className="hidden md:block absolute top-8 -right-4 z-10">
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-card rounded-full border border-border">
            <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-foreground">Implementación promedio: 2-3 días</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;