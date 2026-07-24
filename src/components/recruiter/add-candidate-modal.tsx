"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
  onAdd: (name: string, encodedData: string) => boolean;
}

export function AddCandidateModal({ open, onClose, onAdd }: Props) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function handleSubmit() {
    setError("");
    if (!name.trim()) {
      setError("El nombre es obligatorio.");
      return;
    }
    if (!url.trim()) {
      setError("La URL del perfil es obligatoria.");
      return;
    }

    // Extrae el hash de la URL
    let encoded = "";
    try {
      const hashIndex = url.indexOf("#data=");
      if (hashIndex === -1) {
        setError("URL inválida. Asegúrate de copiar la URL completa del perfil.");
        return;
      }
      encoded = url.substring(hashIndex + 6);
    } catch {
      setError("URL inválida.");
      return;
    }

    const success = onAdd(name.trim(), encoded);
    if (!success) {
      setError("No se pudo leer el perfil. Verifica la URL.");
      return;
    }

    setName("");
    setUrl("");
    setError("");
    onClose();
  }

  function handleClose() {
    setName("");
    setUrl("");
    setError("");
    onClose();
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-50"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            <div className="bg-background text-foreground rounded-2xl border border-border shadow-[0_25px_60px_rgba(0,0,0,0.3)] w-full max-w-md p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold">Agregar candidato</h2>
                <button
                  onClick={handleClose}
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Fields */}
              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    Nombre del candidato
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej: Juan Pérez"
                    className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    URL del perfil Kipsco
                  </label>
                  <textarea
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://kipsco.com/profile#data=..."
                    rows={3}
                    className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none font-mono"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Pide al candidato que comparta su URL desde la página de perfil.
                  </p>
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 rounded-lg px-3 py-2">
                    <AlertCircle size={14} className="shrink-0" />
                    <p className="text-xs">{error}</p>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-6">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={handleClose}
                >
                  Cancelar
                </Button>
                <Button className="flex-1" onClick={handleSubmit}>
                  Agregar candidato
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}