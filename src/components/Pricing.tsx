import { Button } from "@/components/ui/button";
import { Check, Zap, Crown, Users } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "R$ 297",
      period: "/mês",
      description: "Perfeito para clínicas pequenas",
      features: [
        "Até 500 agendamentos/mês",
        "Atendimento automatizado básico",
        "Receitas digitais",
        "Follow-up simples",
        "Suporte por email",
        "Integração WhatsApp",
      ],
      popular: false,
    },
    {
      name: "Professional", 
      icon: Crown,
      price: "R$ 597",
      period: "/mês",
      description: "Ideal para clínicas em crescimento",
      features: [
        "Agendamentos ilimitados",
        "IA avançada personalizada",
        "Receitas + laudos digitais",
        "Follow-up completo",
        "Suporte prioritário",
        "Integração completa (WhatsApp, SMS, Email)",
        "Relatórios detalhados",
        "API personalizada",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      icon: Users,
      price: "Sob consulta",
      period: "",
      description: "Para redes de clínicas",
      features: [
        "Tudo do Professional",
        "Múltiplas clínicas",
        "IA especializada por área médica",
        "Integração com sistemas próprios",
        "Suporte 24/7 dedicado",
        "Treinamento da equipe",
        "Manager de sucesso",
        "SLA garantido",
      ],
      popular: false,
    },
  ];

  return (
    <section id="precos" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Planos que cabem no seu
            <span className="bg-gradient-hero bg-clip-text text-transparent"> orçamento </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para sua clínica. Todos incluem teste grátis de 14 dias.
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
                  {plan.name === "Enterprise" ? "Falar com Vendas" : "Começar Teste Grátis"}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 space-y-4">
          <p className="text-muted-foreground">
            💳 Sem cartão de crédito necessário para o teste
          </p>
          <p className="text-sm text-muted-foreground">
            Cancelamento a qualquer momento • Suporte em português • Dados seguros no Brasil
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;