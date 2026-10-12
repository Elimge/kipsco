"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BarChart3, FileText, Users, Zap, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

export function FeaturesSection() {
  const { t } = useTranslation();
  const features = [
    { icon: Brain, title: t("features.psychometric.title"), description: t("features.psychometric.description") },
    { icon: Zap, title: t("features.cognitive.title"), description: t("features.cognitive.description") },
    { icon: BarChart3, title: t("features.dashboard.title"), description: t("features.dashboard.description") },
    { icon: FileText, title: t("features.pdf.title"), description: t("features.pdf.description") },
    { icon: Users, title: t("features.profiles.title"), description: t("features.profiles.description") },
    { icon: Shield, title: t("features.privacy.title"), description: t("features.privacy.description") },
  ];

  return (
    <section id="features" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t("features.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("features.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <feature.icon size={20} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}