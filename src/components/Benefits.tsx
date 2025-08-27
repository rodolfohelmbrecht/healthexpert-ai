import { TrendingUp, Clock, Users, DollarSign, Heart, Shield } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "+30% Conversión",
      description: "Incrementa la conversión de leads a citas agendadas",
      stat: "20-30% más citas"
    },
    {
      icon: Clock,
      title: "-40% No-Show",
      description: "Reduce ausencias con recordatorios automáticos inteligentes",
      stat: "40% menos faltas"
    },
    {
      icon: Users,
      title: "-60% Tiempo Respuesta",
      description: "Atiende consultas al instante, 24 horas al día",
      stat: "Respuesta inmediata"
    },
    {
      icon: DollarSign,
      title: "ROI Comprobado",
      description: "Aumenta ingresos con upsell ético post-consulta",
      stat: "+25% ingresos"
    },
    {
      icon: Heart,
      title: "+10 puntos CSAT",
      description: "Mejora satisfacción del paciente con atención personalizada",
      stat: "Pacientes más felices"
    },
    {
      icon: Shield,
      title: "100% Seguro",
      description: "Cumple normativas de privacidad y consentimiento médico",
      stat: "Datos protegidos"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Resultados
            <span className="bg-gradient-hero bg-clip-text text-transparent"> comprobados </span>
            en clínicas reales
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestros clientes han transformado su operación y mejorado significativamente sus métricas de conversión y satisfacción.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:shadow-card hover:bg-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  <div className="text-sm font-medium text-primary">{benefit.stat}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <Heart className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Más de 50 clínicas ya confían en nosotros</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;