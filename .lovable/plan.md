

## Crear componente FeatureCards.tsx con iconos SVG animados

### Contexto
El código pegado perdió todas las etiquetas JSX (fueron interpretadas como HTML). Reconstruiré el componente completo basándome en la estructura visible del código y la imagen de referencia.

### Archivo: `src/components/FeatureCards.tsx`

Componente con 4 cards animadas con SVG icons:
1. **Ranking de precios** — Barras de gráfico que crecen en hover + etiqueta "$24.10"
2. **Búsqueda por región** — Radar con sweep rotativo, ping rings y blips
3. **Hecho para el campo** — Barras de señal que crecen + ping animado
4. **Datos frescos** — Calendario con flecha refresh que gira en hover

Cada card:
- Fondo `#1a1a1a`, borde `#2a2a2a`, rounded-2xl
- Hover: borde primary (`#c8f135`), translate-y -1, glow verde
- SVG animado dentro, título debajo
- Keyframes globales inyectados via `<style>` tag

### Integración con SolutionSection
- Reemplazar los emojis en los tabs por el componente `FeatureCards` o sus iconos SVG individuales
- Los tabs actuales en `SolutionSection.tsx` usarán los SVGs en lugar de `feat.icon` (emoji)

### Plan
1. Crear `src/components/FeatureCards.tsx` con el componente completo (cards + SVGs animados + keyframes)
2. Actualizar `SolutionSection.tsx` para importar y usar los iconos SVG de FeatureCards en los tabs, reemplazando los emojis

