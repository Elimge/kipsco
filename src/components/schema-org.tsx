export function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": "https://kipsco.com/#webapp",
        name: "Kipsco",
        url: "https://kipsco.com",
        description:
          "Plataforma moderna de evaluación psicométrica y de talento para reclutadores y equipos de RRHH.",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "COP",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://kipsco.com/#organization",
        name: "Kipsco",
        url: "https://kipsco.com",
        description:
          "Plataforma de evaluación psicométrica y de talento moderna.",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Qué es una prueba psicométrica?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Una prueba psicométrica es una evaluación científica que mide características psicológicas como personalidad, aptitudes cognitivas y comportamiento laboral para apoyar decisiones de reclutamiento.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cuánto tiempo toma el test de personalidad laboral?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "El test de personalidad laboral de Kipsco toma entre 10 y 15 minutos en completarse.",
            },
          },
          {
            "@type": "Question",
            name: "¿Los resultados son confidenciales?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Todo el procesamiento ocurre directamente en tu navegador. Ningún dato personal se envía a servidores externos.",
            },
          },
          {
            "@type": "Question",
            name: "¿Puedo descargar mis resultados?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Al finalizar la evaluación puedes descargar un reporte profesional en PDF con tus dimensiones, fortalezas y compatibilidad con perfiles laborales.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}