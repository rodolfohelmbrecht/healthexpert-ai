import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">AI</span>
          </div>
          <span className="font-bold text-xl text-foreground">MedAssist</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#funcionalidades" className="text-muted-foreground hover:text-foreground transition-colors">
            Funcionalidades
          </a>
          <a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors">
            Cómo Funciona
          </a>
          <a href="#precos" className="text-muted-foreground hover:text-foreground transition-colors">
            Precios
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button 
            variant="cta" 
            size="lg" 
            onClick={() => window.open('https://wa.me/14158147249?text=Hola%2C%20quiero%20conocer%20más%20sobre%20MedAssist', '_blank')}
          >
            Contactar por WhatsApp
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;