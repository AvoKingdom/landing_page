

## Rediseño de SolutionSection — Tabs interactivos con contenido expandido

### Concepto
Reemplazar las 4 cards en grid 2x2 + mockup por un diseño tipo tabs horizontal: 4 botones/cards en fila, y al seleccionar uno se muestra abajo un panel con imagen a la izquierda y contenido descriptivo (título, bullet points, botón CTA) a la derecha.

### Cambios en `src/components/SolutionSection.tsx`

**Datos**: Expandir cada feature con:
- `icon` (emoji)
- `title` (nombre corto para el tab)
- `headline` (título descriptivo para el panel expandido)
- `points` (array de 3 bullet points)
- Imagen descriptiva por feature (mockup de la app en contexto)

**Layout**:
1. Badge "La Solución" + título h2 — sin cambios
2. **Barra de tabs horizontal** (4 columnas): cada tab es una card pequeña con icono + título corto. El tab activo tiene borde primary/glow, los inactivos tienen estilo glass-card sutil
3. **Panel de contenido** debajo de los tabs:
   - Grid 2 columnas (md): izquierda = imagen/mockup en glass-card con rounded corners, derecha = headline + bullet points con checkmarks verdes + botón "Comenzar ya"
   - En móvil: stack vertical (imagen arriba, contenido abajo)

**Interacción**: `useState` para el índice activo (default 0). Click en tab cambia el contenido con transición suave.

**Imágenes**: Como no hay imágenes reales para cada feature, reutilizaré el mockup de ranking de la app existente como placeholder visual dentro de una glass-card, adaptado por cada tab.

```text
┌─────────┬─────────┬─────────┬─────────┐
│ 📊 Tab1 │ 🔍 Tab2 │ 📱 Tab3 │ 🔄 Tab4 │  ← activo tiene borde primary
│ (active)│         │         │         │
└─────────┴─────────┴─────────┴─────────┘
┌──────────────────────────────────────────┐
│  ┌──────────┐   Headline descriptivo     │
│  │          │   ✓ Punto 1                │
│  │  Imagen  │   ✓ Punto 2                │
│  │  mockup  │   ✓ Punto 3                │
│  │          │                            │
│  └──────────┘   [Comenzar ya]            │
└──────────────────────────────────────────┘
```

### Estilos
- Tab activo: `border-primary bg-primary/5` con glow sutil
- Tab inactivo: `glass-card` con `cursor-pointer hover:border-primary/30`
- Panel: `glass-card` con padding generoso
- Checkmarks: icono circular verde primary
- Botón CTA: `bg-primary text-primary-foreground`
- Transiciones suaves en el contenido del panel

