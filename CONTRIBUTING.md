# Contribuir a Kipsco

¡Gracias por tu interés en contribuir! Aquí las pautas básicas.

## ¿Cómo contribuir?

1. Haz fork del repositorio
2. Crea una rama: `git checkout -b feat/nueva-funcionalidad`
3. Haz tus cambios y commit: `git commit -m "feat: descripción"`
4. Push: `git push origin feat/nueva-funcionalidad`
5. Abre un Pull Request

## ¿Qué puedes contribuir?

- Nuevos tests psicométricos o cognitivos
- Traducciones (inglés u otros idiomas)
- Mejoras de accesibilidad
- Corrección de bugs
- Mejoras de documentación
- Nuevos perfiles laborales
- Mejoras al onboarding y la guía de uso

## Internacionalización

La interfaz soporta español e inglés mediante `src/i18n/locales/es.json` y `src/i18n/locales/en.json`.

Al añadir una vista o componente:

1. No hardcodees texto visible; agrega la clave en ambos catálogos.
2. Mantén los mismos placeholders en español e inglés.
3. Para preguntas y opciones de tests, conserva los IDs y `correctOptionId`.
4. Agrega la traducción inglesa en `src/i18n/content.ts` y verifica que el significado y el scoring no cambien.
5. Comprueba el cambio de idioma en la vista donde se usa el contenido y en cualquier PDF o resumen derivado.

El idioma seleccionado se guarda en `localStorage` como `kipsco_lang`. El onboarding usa `kipsco_onboarded`; no dependas de esas claves para autorización o seguridad.

## Validación local

Antes de abrir un Pull Request ejecuta:

```bash
pnpm lint
pnpm build
```

El proyecto usa `output: "export"` en Next.js. Un cambio se considera listo para despliegue cuando el build estático genera correctamente `out/` y las rutas nuevas están incluidas en la exportación.

## Convenciones de commits

Seguimos Conventional Commits:

- `feat:` nueva funcionalidad
- `fix:` corrección de bug
- `docs:` documentación
- `style:` cambios visuales sin lógica
- `refactor:` refactorización
- `chore:` tareas de mantenimiento

## Contacto

Miguel Canedo Vanegas — elimge@outlook.com