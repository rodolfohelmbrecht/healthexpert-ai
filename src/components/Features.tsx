import { Calendar, MessageSquare, FileText, Heart, Clock, Users } from "lucide-react";
import schedulingImage from "@/assets/feature-scheduling.jpg";
import prescriptionsImage from "@/assets/feature-prescriptions.jpg";

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "FAQ Inteligente + RAG",
      description: "Agente IA responde consultas seguras: horarios, coberturas, preparación de exámenes, directorio médico, precios y sedes más cercanas.",
      image: schedulingImage,
    },
    {
      icon: MessageSquare,
      title: "Agendamiento por WhatsApp Flows",
      description: "Integración en tiempo real con sistemas de clínicas. Selectores de sede, médico y fecha dentro del chat + pagos automáticos.",
      image: prescriptionsImage,
    },
    {
      icon: FileText,
      title: "Anti No-Show Automático",
      description: "Confirmaciones 24h antes, recordatorios y check-in por Flow. Reduce no-show hasta 40% con preparación previa de exámenes.",
      image: schedulingImage,
    },
    {
      icon: Heart,
      title: "Entrega Segura Post-Cita",
      description: "Recetas, resultados e indicaciones por WhatsApp con confirmación de lectura. Seguimiento D+3/D+7 de síntomas y adherencia.",
      image: prescriptionsImage,
    },
    {
      icon: Clock,
      title: "ASR + OCR Inteligente",
      description: "Procesa audios de pacientes y fotos de órdenes médicas. Extrae información clave y convierte a texto para mejor atención.",
      image: null,
    },
    {
      icon: Users,
      title: "Upsell Ético + Analytics",
      description: "Chequeos preventivos personalizados según historial. Métricas de conversión, asistencia, CSAT/NPS y ROI por campaña.",
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