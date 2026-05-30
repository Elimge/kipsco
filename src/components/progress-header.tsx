import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { X } from "lucide-react";

interface ProgressHeaderProps {
  title: string;
  currentIndex: number;
  total: number;
  progress: number;
  answeredCount: number;
}

export function ProgressHeader({
  title,
  currentIndex,
  total,
  progress,
  answeredCount,
}: ProgressHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-2xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-xs text-muted-foreground">{title}</p>
            <p className="text-sm font-medium">
              Pregunta {currentIndex + 1} de {total}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground">
              {answeredCount}/{total} respondidas
            </span>
            <Link
              href="/tests"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={18} />
            </Link>
          </div>
        </div>
        <Progress value={progress} className="h-1.5" />
      </div>
    </header>
  );
}