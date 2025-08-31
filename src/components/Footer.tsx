import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <span className="font-bold text-xl">MedAssist</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Incrementa conversión de leads, reduce no-show y mejora CSAT con Agentes IA + WhatsApp Flows para clínicas.
            </p>
            <button 
              className="inline-flex items-center px-4 py-2 bg-gradient-hero text-white rounded-lg hover:opacity-90 transition-opacity text-sm"
              onClick={() => window.open('https://wa.me/14158147249?text=Hola%2C%20quiero%20conocer%20más%20sobre%20MedAssist', '_blank')}
            >
              Contactar por WhatsApp
            </button>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold mb-4">Beneficios Clave</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>✓ +20-30% conversión de leads a citas</li>
              <li>✓ -20-40% reducción de no-show</li>
              <li>✓ -50-60% tiempo de respuesta</li>
              <li>✓ +10pp mejora en CSAT/NPS</li>
              <li>✓ Integración con WhatsApp Flows</li>
              <li>✓ ASR + OCR + Agentes IA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-background/60">
              © 2024 MedAssist. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-background/60">
              <a href="#" className="hover:text-background transition-colors">Privacidad</a>
              <a href="#" className="hover:text-background transition-colors">Términos</a>
              <a href="#" className="hover:text-background transition-colors">Política de Datos</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;