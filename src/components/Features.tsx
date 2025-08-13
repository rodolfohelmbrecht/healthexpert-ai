import { Calendar, MessageSquare, FileText, Heart, Clock, Users } from "lucide-react";
import schedulingImage from "@/assets/feature-scheduling.jpg";
import prescriptionsImage from "@/assets/feature-prescriptions.jpg";

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Citas Inteligentes",
      description: "IA programa y reprograma consultas automáticamente, optimizando tu agenda y reduciendo faltas.",
      image: schedulingImage,
    },
    {
      icon: MessageSquare,
      title: "Atención Automatizada",
      description: "Chatbot especializado responde dudas de pacientes 24/7, liberando tu equipo para enfocarse en lo esencial.",
      image: null,
    },
    {
      icon: FileText,
      title: "Recetas Digitales",
      description: "Envío automático de recetas médicas a pacientes vía WhatsApp, email o SMS.",
      image: prescriptionsImage,
    },
    {
      icon: Heart,
      title: "Seguimiento Personalizado",
      description: "Seguimiento post-consulta automatizado para verificar cómo se siente el paciente.",
      image: null,
    },
    {
      icon: Clock,
      title: "Ahorra Tiempo",
      description: "Reduce hasta 60% del tiempo administrativo y enfócate en lo que realmente importa: cuidar pacientes.",
      image: null,
    },
    {
      icon: Users,
      title: "Experiencia del Paciente",
      description: "Mejora la satisfacción de pacientes con atención rápida, eficiente y disponible 24/7.",
      image: null,
    },
  ];

  return (
    <section id="funcionalidades" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Funcionalidades que
            <span className="bg-gradient-hero bg-clip-text text-transparent"> transforman </span>
            tu clínica
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestra IA fue desarrollada especialmente para clínicas de salud, automatizando procesos y mejorando la experiencia de pacientes y profesionales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                </div>
                
                {feature.image && (
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;