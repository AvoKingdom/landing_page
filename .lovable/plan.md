

## Agregar video de Ranking de Precios en SolutionSection

### Cambio

Reemplazar el mockup estático (las filas con datos) del primer tab ("Ranking de precios", `active === 0`) por el video de Cloudinary. Los demás tabs conservan su mockup actual.

### En `src/components/SolutionSection.tsx`

En el panel izquierdo (líneas ~117-141), envolver el contenido en una condición:
- Si `active === 0`: renderizar el `<video>` con autoPlay, muted, playsInline, loop, poster de Cloudinary, sources WebM y MP4
- Si `active !== 0`: renderizar el mockup actual (badges + mockupRows)

El video usa `className="w-full rounded-2xl"` y se ajusta al contenedor existente.

