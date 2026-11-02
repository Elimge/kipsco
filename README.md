# Kipsco — Plataforma de Evaluación de Talento

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)
![License](https://img.shields.io/badge/License-Apache%202.0-green)
![Deploy](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-orange)

Plataforma moderna de evaluación psicométrica y psicotécnica orientada al mercado laboral colombiano. Open source, 100% frontend, sin backend requerido.

🌐 **[kipsco.com](https://kipsco.com)**

---

## ¿Qué es Kipsco?

Kipsco permite a reclutadores, equipos de RRHH y candidatos realizar evaluaciones de talento completas directamente desde el navegador, sin registros ni servidores externos.

### Funcionalidades

- **Test de Personalidad Laboral** — Big Five adaptado al contexto profesional colombiano
- **Test de Aptitud Cognitiva** — Razonamiento lógico, numérico, verbal y atención al detalle
- **Dashboard de resultados** — Gráficos radar, barras de progreso y compatibilidad con perfiles laborales
- **Perfil compartible** — URL única con resultados codificados, sin backend
- **Exportación PDF** — Reporte profesional descargable
- **Recruiter Mode** — Panel para comparar candidatos lado a lado
- **Guía de uso** — Manual disponible en `/guide` con acceso al tour de bienvenida
- **Onboarding** — Tour de cuatro pasos para usuarios nuevos, reabrible desde el botón de ayuda
- **Español ↔ inglés** — Catálogos de interfaz y localización de preguntas, opciones, dimensiones, fortalezas y roles
- **Modo oscuro** — Tema claro/oscuro/sistema
- **SEO estático** — SSG, schema.org, sitemap y OpenGraph; la metadata prerenderizada usa una variante por defecto y el contenido visible cambia en el cliente

---

## Stack técnico

```
Frontend:     Next.js 15 (App Router, Static Export)
Lenguaje:     TypeScript 5
Estilos:      Tailwind CSS v4
Componentes:  shadcn/ui (Nova preset, Radix)
Animaciones:  Framer Motion
Gráficos:     Recharts
PDF:          jsPDF + html2canvas
Temas:        next-themes
Package mgr:  pnpm
Deploy:       Cloudflare Pages
```

---

## Arquitectura

```
src/
 ├── app/                  # Rutas Next.js (App Router)
 │    ├── page.tsx         # Landing page
 │    ├── guide/            # Guía de uso y onboarding
 │    ├── tests/           # Lista de tests y flujo
 │    ├── results/         # Dashboard de resultados
 │    ├── profile/         # Perfil profesional compartible
 │    └── recruiter/       # Panel de reclutadores
 ├── components/           # Componentes globales (navbar, footer, etc.)
 │    └── results/         # Componentes del dashboard
 │    └── recruiter/       # Componentes del recruiter mode
 ├── data/                 # Datasets de preguntas por test
 ├── i18n/                 # Configuración, catálogos y adaptadores ES/EN
 ├── features/             # Módulos por dominio (futuro)
 ├── hooks/                # Custom hooks (useAssessment, useCandidates)
 ├── lib/                  # Utilidades core (scoring, utils)
 ├── services/             # Servicios (pdf-export)
 ├── types/                # Tipos TypeScript globales
 └── utils/                # Utilidades (share, encode)
```

---

## Cómo funciona el scoring

El motor de evaluación es 100% frontend. Cada respuesta suma puntos a dimensiones específicas. Al finalizar el test:

1. Se calcula el porcentaje por dimensión
2. Se identifican fortalezas (≥70%) y áreas de mejora (<50%)
3. Se calcula compatibilidad con perfiles laborales colombianos usando distancia ponderada
4. Los resultados se codifican para la URL compartible

No se envía ningún dato a servidores externos.

> **Privacidad:** el enlace compartible contiene los resultados codificados. Compártelo únicamente con las personas autorizadas a verlos. El enlace no constituye autenticación ni control de acceso.

### Persistencia local

Kipsco utiliza estas claves de `localStorage`:

- `kipsco_lang`: idioma seleccionado (`es` o `en`)
- `kipsco_result`: último resultado generado en el dispositivo
- `kipsco_onboarded`: indica que el tour inicial fue omitido o completado

---

## Cómo correr el proyecto localmente

### Prerrequisitos

- Node.js 20+
- pnpm

```bash
# Clonar el repositorio
git clone https://github.com/elimge/kipsco.git
cd kipsco

# Instalar dependencias
pnpm install

# Correr en desarrollo
pnpm run dev

# Build de producción
pnpm build

# Validar lint
pnpm lint
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

El build genera el sitio estático en `out/`. Para revisar la exportación localmente usa un servidor estático; `pnpm start` no es el flujo principal de despliegue porque el proyecto está configurado con `output: "export"`.

---

## Cómo agregar un nuevo test

1. Crea el dataset en `src/data/tu-test.ts` siguiendo la estructura de `personality-test.ts`. Conserva IDs estables para preguntas, opciones y respuestas correctas.
2. Agrega los perfiles de compatibilidad en `src/lib/scoring.ts` si el test utiliza esos perfiles.
3. Registra el test en `src/app/tests/[slug]/test-page-client.tsx`.
4. Agrega el slug a `generateStaticParams` en `src/app/tests/[slug]/page.tsx`.
5. Activa el test en `src/app/tests/page.tsx`.
6. Agrega las preguntas y opciones traducidas al inglés en `src/i18n/content.ts` y valida que la traducción conserve el significado y el scoring.
7. Actualiza los catálogos `src/i18n/locales/es.json` y `src/i18n/locales/en.json` si incorporas textos de interfaz.

---

## Cómo construir tu propio backend

Kipsco está diseñado para ser agnóstico al backend. Para añadir persistencia:

1. Reemplaza el almacenamiento local de resultados en las vistas correspondientes con llamadas a tu API
2. Reemplaza la codificación base64 en `src/utils/share.ts` con IDs de base de datos
3. El motor de scoring en `src/lib/scoring.ts` puede migrarse a cualquier backend

Si se incorpora autenticación o datos sensibles, el enlace compartible debe dejar de exponer resultados codificados en el fragmento de URL y pasar a un mecanismo con autorización.

Endpoints mínimos sugeridos:
```
POST /api/results          # Guardar resultado
GET  /api/results/:id      # Obtener resultado por ID
POST /api/candidates       # Guardar candidato (recruiter mode)
GET  /api/candidates       # Listar candidatos
```

---

## Implementación empresarial

¿Tu empresa necesita una versión personalizada de Kipsco con:
- Autenticación y gestión de usuarios
- Panel administrativo multiempresa
- Tests personalizados para tu industria
- Integración con tu ATS
- Backend propio (Django, FastAPI, Node.js)

Contáctame: **elimge@outlook.com**

---

## Créditos y licencia

Desarrollado por **Miguel Canedo Vanegas** — [GitHub](https://github.com/elimge)

Licencia Apache 2.0 — libre para uso personal y comercial con atribución.
Ver [LICENSE](./LICENSE) para más detalles.
