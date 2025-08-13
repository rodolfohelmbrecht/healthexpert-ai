import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Marina Silva",
      role: "Cardióloga",
      clinic: "Clínica CardioVida",
      content: "Reduje 70% del tiempo dedicado a citas. Ahora puedo enfocarme totalmente en mis pacientes. ¡La IA es increíblemente precisa!",
      rating: 5,
    },
    {
      name: "Dr. Carlos Mendes",
      role: "Pediatra",
      clinic: "Clínica Infantil Sonrisa",
      content: "Los padres adoran recibir las recetas automáticamente por WhatsApp. Menos llamadas, más organización. ¡Revolucionó mi práctica!",
      rating: 5,
    },
    {
      name: "Dra. Ana Beatriz",
      role: "Dermatóloga",
      clinic: "DermaCare",
      content: "El seguimiento automático mejoró mucho la adherencia de pacientes al tratamiento. ¡Resultados que no esperaba!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Lo que dicen los
            <span className="bg-gradient-hero bg-clip-text text-transparent"> médicos </span>
            que ya la usan
          </h2>
          <p className="text-xl text-muted-foreground">
            Transformando clínicas en toda Latinoamérica
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
              <div className="text-sm text-muted-foreground">Satisfacción</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">60%</div>
              <div className="text-sm text-muted-foreground">Ahorro de tiempo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;