

## Agregar imagen y video a tabs "Hecho para el campo" y "Datos frescos"

### Cambios en `src/components/SolutionSection.tsx`

Expandir la lógica condicional del panel izquierdo (líneas 117-160) de 2 casos a 4:

- **`active === 0`** (Ranking de precios): video actual de Cloudinary — sin cambios
- **`active === 1`** (Búsqueda por región): mockup actual con badges + rows — sin cambios
- **`active === 2`** (Hecho para el campo): mostrar la imagen subida (`APP_AVK.webp`) importada desde `src/assets/`, con `className="w-full rounded-2xl"`
- **`active === 3`** (Datos frescos): video de Cloudinary con autoPlay, muted, playsInline, loop, poster y sources WebM/MP4 del URL proporcionado

### Archivos

1. **Copiar imagen** `user-uploads://APP_AVK.webp` → `src/assets/APP_AVK.webp`
2. **Editar** `src/components/SolutionSection.tsx`:
   - Importar la imagen: `import appAvkImage from "@/assets/APP_AVK.webp"`
   - Reemplazar el bloque condicional `active === 0 ? ... : ...` por un bloque con 4 condiciones usando un helper o ternarios anidados

