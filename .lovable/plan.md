

## Normalizar altura del panel de contenido y mejorar responsive

### Problema
La imagen de "Hecho para el campo" tiene una relación de aspecto diferente a los videos, lo que hace que el panel cambie de altura al cambiar de tab. Además, se necesita asegurar buen responsive en móviles.

### Cambios en `src/components/SolutionSection.tsx`

1. **Contenedor de media con altura fija**: Envolver todos los elementos del panel izquierdo (videos, imagen, mockup) en un `div` con altura fija y `overflow-hidden`, para que todos los tabs tengan la misma altura:
   - Desktop: `md:h-[400px]` (o similar)
   - La imagen usa `object-cover` y `object-center` para recortarse y llenar el contenedor sin deformar
   - Los videos también usan `object-cover` para consistencia

2. **Mejoras responsive**:
   - En móvil, el contenedor de media usa una altura proporcional (`h-[280px]` o `aspect-video`)
   - El grid del content panel ya usa `md:grid-cols-2` (1 col en móvil) — verificar que funcione bien
   - Reducir padding en móvil si es necesario
   - Las tabs ya son `grid-cols-2 md:grid-cols-4` — correcto para móvil

### Detalle técnico

- Agregar al contenedor de media: `className="w-full h-[280px] md:h-[400px] rounded-2xl overflow-hidden"`
- Imagen: `className="w-full h-full object-cover object-top rounded-2xl"`
- Videos: `className="w-full h-full object-cover rounded-2xl"`
- Mockup (tab 1): `className="w-full h-full ... overflow-auto"`

