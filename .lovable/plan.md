

## Ajustar posición de la imagen Precio

La imagen `Precio.webp` usa `object-cover` que centra la imagen por defecto, mostrando solo la mano. Necesitamos mover el punto focal hacia abajo para que se vean las monedas.

### Cambio en `src/components/ProblemSection.tsx`

- Agregar un campo `objectPosition` al primer problema (Precio) con valor `"center 70%"` para desplazar el foco hacia abajo
- Aplicar `style={{ objectPosition: p.objectPosition || 'center' }}` en el `<img>`

