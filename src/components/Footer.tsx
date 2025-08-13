import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <span className="font-bold text-xl">MedAssist</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              IA especializada para clínicas de salud. Automatiza citas, recetas y seguimientos para enfocarte en lo que realmente importa: cuidar pacientes.
            </p>
          </div>

          {/* Produto */}
          <div>
            <h4 className="font-semibold mb-4">Producto</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#funcionalidades" className="hover:text-background transition-colors">Funcionalidades</a></li>
              <li><a href="#como-funciona" className="hover:text-background transition-colors">Cómo Funciona</a></li>
              <li><a href="#precos" className="hover:text-background transition-colors">Precios</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Demostración</a></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Acerca de</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Carreras</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm text-background/80">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contacto@medassist.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Miami, FL</span>
              </div>
            </div>
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