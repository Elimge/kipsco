import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background p-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold">Kipsco</CardTitle>
            <Badge variant="secondary">Beta</Badge>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="text-muted-foreground">
            Plataforma moderna de evaluación psicométrica y de talento.
          </p>
          <Button className="w-full">Comenzar evaluación</Button>
          <Button variant="outline" className="w-full">Ver demo</Button>
        </CardContent>
      </Card>
    </main>
  );
}