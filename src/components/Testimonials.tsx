import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Marina Silva",
      role: "Cardiologista",
      clinic: "Clínica CardioVida",
      content: "Reduzi 70% do tempo gasto com agendamentos. Agora posso focar totalmente nos meus pacientes. A IA é incrivelmente precisa!",
      rating: 5,
    },
    {
      name: "Dr. Carlos Mendes",
      role: "Pediatra",
      clinic: "Clínica Infantil Sorriso",
      content: "Os pais adoram receber as receitas automaticamente no WhatsApp. Menos ligações, mais organização. Revolucionou minha prática!",
      rating: 5,
    },
    {
      name: "Dra. Ana Beatriz",
      role: "Dermatologista",
      clinic: "DermaCare",
      content: "O follow-up automático melhorou muito a aderência dos pacientes ao tratamento. Resultados que eu não esperava!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            O que dizem os
            <span className="bg-gradient-hero bg-clip-text text-transparent"> médicos </span>
            que já usam
          </h2>
          <p className="text-xl text-muted-foreground">
            Transformando clínicas em todo o Brasil
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border hover:shadow-card transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                
                <p className="text-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.clinic}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 px-8 py-4 bg-gradient-subtle rounded-full border border-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Clínicas atendidas</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">98%</div>
              <div className="text-sm text-muted-foreground">Satisfação</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">60%</div>
              <div className="text-sm text-muted-foreground">Economia de tempo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;