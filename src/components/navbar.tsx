"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">Kipsco</span>
            <Badge variant="secondary" className="text-xs">Beta</Badge>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Características
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cómo funciona
            </a>
            <Link href="/tests" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Tests
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">Iniciar sesión</Button>
            <Button size="sm">Comenzar gratis</Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 flex flex-col gap-4 border-t border-border">
            <Link href="#features" className="text-sm text-muted-foreground">
              Características
            </Link>
            <Link href="#how-it-works" className="text-sm text-muted-foreground">
              Cómo funciona
            </Link>
            <Link href="/tests" className="text-sm text-muted-foreground">
              Tests
            </Link>
            <Button size="sm" className="w-full">
              Comenzar gratis
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}