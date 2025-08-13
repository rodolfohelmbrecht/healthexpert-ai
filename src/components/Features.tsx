import { Calendar, MessageSquare, FileText, Heart, Clock, Users } from "lucide-react";
import schedulingImage from "@/assets/feature-scheduling.jpg";
import prescriptionsImage from "@/assets/feature-prescriptions.jpg";

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Agendamento Inteligente",
      description: "IA agenda e reagenda consultas automaticamente, otimizando sua agenda e reduzindo faltas.",
      image: schedulingImage,
    },
    {
      icon: MessageSquare,
      title: "Atendimento Automatizado",
      description: "Chatbot especializado responde dúvidas dos pacientes 24/7, liberando sua equipe para focar no essencial.",
      image: null,
    },
    {
      icon: FileText,
      title: "Receitas Digitais",
      description: "Envio automático de receitas médicas para pacientes via WhatsApp, email ou SMS.",
      image: prescriptionsImage,
    },
    {
      icon: Heart,
      title: "Follow-up Personalizado",
      description: "Acompanhamento pós-consulta automatizado para verificar como o paciente está se sentindo.",
      image: null,
    },
    {
      icon: Clock,
      title: "Economize Tempo",
      description: "Reduza até 60% do tempo administrativo e foque no que realmente importa: cuidar dos pacientes.",
      image: null,
    },
    {
      icon: Users,
      title: "Experiência do Paciente",
      description: "Melhore a satisfação dos pacientes com atendimento rápido, eficiente e disponível 24/7.",
      image: null,
    },
  ];

  return (
    <section id="funcionalidades" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Funcionalidades que
            <span className="bg-gradient-hero bg-clip-text text-transparent"> transformam </span>
            sua clínica
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa IA foi desenvolvida especialmente para clínicas de saúde, automatizando processos e melhorando a experiência de pacientes e profissionais.
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