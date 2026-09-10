import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

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
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-4">
              Plataforma moderna de evaluación psicométrica y de talento
              para reclutadores y equipos de RRHH.
            </p>
            <a
              href="mailto:elimge@outlook.com"
              className="text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              elimge@outlook.com
            </a>
          </div>

          {/* Producto */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Producto</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/tests" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Tests disponibles
                </Link>
              </li>
              <li>
                <Link href="/recruiter" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Modo reclutador
                </Link>
              </li>
              <li>
                <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Características
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cómo funciona
                </a>
              </li>
            </ul>
          </div>

          {/* Proyecto */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Proyecto</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="https://github.com/elimge/kipsco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:elimge@outlook.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Kipsco. Open source bajo licencia Apache 2.0.
          </p>
          <a
            href="mailto:elimge@outlook.com"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            elimge@outlook.com
          </a>
        </div>
      </div>
    </footer>
  );
}