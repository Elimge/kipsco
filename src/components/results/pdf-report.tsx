import { AssessmentResult } from "@/types/assessment";

interface Props {
  result: AssessmentResult;
}

export function PDFReport({ result }: Props) {
  const date = new Date(result.completedAt).toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      id="pdf-report"
      style={{
        width: "794px",
        minHeight: "1123px",
        position: "relative",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        padding: "40px 60px 100px 60px",
        fontFamily: "Arial, sans-serif",
        color: "#18181b",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "32px",
          paddingBottom: "24px",
          borderBottom: "2px solid #18181b",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              margin: 0,
              color: "#18181b",
            }}
          >
            Kipsco
          </h1>
          <p
            style={{ fontSize: "13px", color: "#71717a", margin: "4px 0 0 0" }}
          >
            Plataforma de Evaluación de Talento
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <p style={{ fontSize: "12px", color: "#71717a", margin: 0 }}>
            Reporte generado el
          </p>
          <p
            style={{
              fontSize: "12px",
              fontWeight: "600",
              color: "#18181b",
              margin: "2px 0 0 0",
            }}
          >
            {date}
          </p>
        </div>
      </div>

      {/* Title */}
      <div style={{ marginBottom: "28px" }}>
        <h2
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            margin: "0 0 6px 0",
            color: "#18181b",
          }}
        >
          Test de Personalidad Laboral
        </h2>
        <p style={{ fontSize: "13px", color: "#71717a", margin: 0 }}>
          Evaluación basada en el modelo Big Five aplicado al contexto
          profesional.
        </p>
      </div>

      {/* Overall profile */}
      <div
        style={{
          backgroundColor: "#18181b",
          borderRadius: "12px",
          padding: "20px 24px",
          marginBottom: "32px",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            color: "#a1a1aa",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            margin: "0 0 6px 0",
          }}
        >
          Perfil general
        </p>
        <p
          style={{
            fontSize: "14px",
            fontWeight: "500",
            color: "#ffffff",
            margin: 0,
          }}
        >
          {result.overallProfile}
        </p>
      </div>

      {/* Dimensions */}
      <div style={{ marginBottom: "32px" }}>
        <h3
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            margin: "0 0 16px 0",
            color: "#18181b",
          }}
        >
          Dimensiones de personalidad
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {result.dimensions.map((dim) => (
            <div key={dim.dimension}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "4px",
                }}
              >
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#18181b",
                  }}
                >
                  {dim.label}
                </span>
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: "bold",
                    color: "#18181b",
                  }}
                >
                  {dim.percentage}%
                </span>
              </div>
              <div
                style={{
                  width: "100%",
                  backgroundColor: "#f4f4f5",
                  borderRadius: "999px",
                  height: "8px",
                }}
              >
                <div
                  style={{
                    width: `${dim.percentage}%`,
                    backgroundColor: "#18181b",
                    borderRadius: "999px",
                    height: "8px",
                  }}
                />
              </div>
              <p
                style={{
                  fontSize: "11px",
                  color: "#71717a",
                  margin: "3px 0 0 0",
                }}
              >
                {dim.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Strengths and areas */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
          marginBottom: "32px",
        }}
      >
        <div>
          <h3
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              margin: "0 0 12px 0",
              color: "#18181b",
            }}
          >
            Principales fortalezas
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {result.topStrengths.length > 0 ? (
              result.topStrengths.map((s) => (
                <div
                  key={s}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: "#f0fdf4",
                    borderRadius: "8px",
                    padding: "8px 12px",
                  }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "#16a34a",
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: "12px", color: "#15803d" }}>
                    {s}
                  </span>
                </div>
              ))
            ) : (
              <p style={{ fontSize: "12px", color: "#71717a" }}>
                Perfil equilibrado.
              </p>
            )}
          </div>
        </div>
        <div>
          <h3
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              margin: "0 0 12px 0",
              color: "#18181b",
            }}
          >
            Áreas de desarrollo
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {result.areasToGrow.length > 0 ? (
              result.areasToGrow.map((a) => (
                <div
                  key={a}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: "#fffbeb",
                    borderRadius: "8px",
                    padding: "8px 12px",
                  }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "#d97706",
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: "12px", color: "#b45309" }}>
                    {a}
                  </span>
                </div>
              ))
            ) : (
              <p style={{ fontSize: "12px", color: "#71717a" }}>
                Sin áreas críticas.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Role compatibility */}
      <div style={{ marginBottom: "40px" }}>
        <h3
          style={{
            fontSize: "15px",
            fontWeight: "bold",
            margin: "0 0 14px 0",
            color: "#18181b",
          }}
        >
          Compatibilidad con perfiles laborales
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
          }}
        >
          {result.roleCompatibility.slice(0, 6).map((role) => (
            <div
              key={role.role}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#fafafa",
                borderRadius: "8px",
                padding: "10px 14px",
              }}
            >
              <span style={{ fontSize: "12px", color: "#18181b" }}>
                {role.role}
              </span>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  color:
                    role.percentage >= 75
                      ? "#16a34a"
                      : role.percentage >= 55
                        ? "#d97706"
                        : "#a1a1aa",
                }}
              >
                {role.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "60px",
          right: "60px",
          borderTop: "2px solid #e4e4e7",
          paddingTop: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "13px",
              fontWeight: "700",
              color: "#18181b",
              margin: "0 0 2px 0",
            }}
          >
            Kipsco
          </p>
          <p style={{ fontSize: "11px", color: "#a1a1aa", margin: 0 }}>
            kipsco.com
          </p>
        </div>
        <p
          style={{
            fontSize: "11px",
            color: "#a1a1aa",
            margin: 0,
            textAlign: "right",
          }}
        >
          Este reporte es de carácter orientativo.
          <br />© 2026 Kipsco. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}
