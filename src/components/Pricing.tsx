import { Button } from "@/components/ui/button";
import { Check, Zap, Crown, Users } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "$97",
      period: "/mes",
      description: "Perfecto para clínicas pequeñas",
      features: [
        "Hasta 500 citas/mes",
        "Atención automatizada básica",
        "Recetas digitales",
        "Seguimiento simple",
        "Soporte por email",
        "Integración WhatsApp",
      ],
      popular: false,
    },
    {
      name: "Professional", 
      icon: Crown,
      price: "$197",
      period: "/mes",
      description: "Ideal para clínicas en crecimiento",
      features: [
        "Citas ilimitadas",
        "IA avanzada personalizada",
        "Recetas + informes digitales",
        "Seguimiento completo",
        "Soporte prioritario",
        "Integración completa (WhatsApp, SMS, Email)",
        "Reportes detallados",
        "API personalizada",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      icon: Users,
      price: "Bajo consulta",
      period: "",
      description: "Para redes de clínicas",
      features: [
        "Todo lo del Professional",
        "Múltiples clínicas",
        "IA especializada por área médica",
        "Integración con sistemas propios",
        "Soporte 24/7 dedicado",
        "Entrenamiento del equipo",
        "Manager de éxito",
        "SLA garantizado",
      ],
      popular: false,
    },
  ];

  return (
    <section id="precos" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Planes que se ajustan a tu
            <span className="bg-gradient-hero bg-clip-text text-transparent"> presupuesto </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Elige el plan ideal para tu clínica. Todos incluyen prueba gratis de 14 días.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 ${
                plan.popular 
                  ? 'bg-gradient-hero text-white border-primary shadow-glow' 
                  : 'bg-card border-border hover:shadow-card'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                    plan.popular ? 'bg-white/20' : 'bg-gradient-primary'
                  }`}>
                    <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-white'}`} />
                  </div>
                  <h3 className={`text-2xl font-bold ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="text-center">
                  <div className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                    {plan.price}
                    <span className={`text-lg font-normal ${plan.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className={`w-5 h-5 ${plan.popular ? 'text-white' : 'text-secondary'}`} />
                      <span className={`text-sm ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.popular ? "secondary" : "cta"}
                  size="lg" 
                  className="w-full"
                >
                  {plan.name === "Enterprise" ? "Hablar con Ventas" : "Comenzar Prueba Gratis"}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 space-y-4">
          <p className="text-muted-foreground">
            💳 Sin tarjeta de crédito necesaria para la prueba
          </p>
          <p className="text-sm text-muted-foreground">
            Cancelación en cualquier momento • Soporte en español • Datos seguros
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;