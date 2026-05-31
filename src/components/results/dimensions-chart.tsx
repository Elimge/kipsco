"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AssessmentResult } from "@/types/assessment";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

interface Props {
  result: AssessmentResult;
}

export function DimensionsChart({ result }: Props) {
  const radarData = result.dimensions.map((d) => ({
    dimension: d.label,
    value: d.percentage,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Dimensiones de personalidad</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Radar chart */}
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis
                    dataKey="dimension"
                    tick={{ fontSize: 11, fill: "#6b7280" }}
                  />
                  <Radar
                    name="Perfil"
                    dataKey="value"
                    stroke="#18181b"
                    fill="#18181b"
                    fillOpacity={0.15}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* Progress bars */}
            <div className="flex flex-col gap-4">
              {result.dimensions.map((dim, index) => (
                <motion.div
                  key={dim.dimension}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">{dim.label}</span>
                    <span className="text-sm text-muted-foreground">
                      {dim.percentage}%
                    </span>
                  </div>
                  <Progress value={dim.percentage} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">
                    {dim.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}