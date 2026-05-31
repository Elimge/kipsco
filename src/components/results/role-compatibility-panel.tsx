"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AssessmentResult } from "@/types/assessment";

interface Props {
  result: AssessmentResult;
}

export function RoleCompatibilityPanel({ result }: Props) {
  const top = result.roleCompatibility.slice(0, 6);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-lg">Compatibilidad con perfiles laborales</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {top.map((role, index) => (
            <motion.div
              key={role.role}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">{role.role}</span>
                <span
                  className={`text-sm font-semibold ${
                    role.percentage >= 75
                      ? "text-green-600"
                      : role.percentage >= 55
                      ? "text-amber-600"
                      : "text-muted-foreground"
                  }`}
                >
                  {role.percentage}%
                </span>
              </div>
              <Progress
                value={role.percentage}
                className="h-1.5"
              />
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}