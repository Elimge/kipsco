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
          "Modern psychometric and talent assessment platform for recruiters and HR teams.",
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
          "Modern psychometric and talent assessment platform.",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is a psychometric test?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A psychometric test is a scientific assessment that measures psychological characteristics such as personality, cognitive skills and work behavior to support recruitment decisions.",
            },
          },
          {
            "@type": "Question",
            name: "How long does the work personality test take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Kipsco's work personality test takes between 10 and 15 minutes to complete.",
            },
          },
          {
            "@type": "Question",
            name: "Are the results confidential?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "This version processes results in the browser and does not use a first-party backend to store them. Review Kipsco's privacy policy before sharing results.",
            },
          },
          {
            "@type": "Question",
            name: "Can I download my results?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. When you finish the assessment, you can download a professional PDF report with your dimensions, strengths and job profile compatibility.",
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