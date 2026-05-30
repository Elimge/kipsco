import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg font-bold">Kipsco</span>
              <Badge variant="secondary" className="text-xs">Beta</Badge>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Plataforma moderna de evaluación psicométrica y de talento
              para reclutadores y equipos de RRHH.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Producto</h4>
            <ul className="flex flex-col gap-2">
              {["Características", "Tests disponibles", "Cómo funciona", "Demo empresarial"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Empresa</h4>
            <ul className="flex flex-col gap-2">
              {["Acerca de", "Contacto", "Privacidad", "Términos"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Kipsco. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Hecho con Next.js, TypeScript y shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
}