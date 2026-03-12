

## Hero Section Redesign

### Changes

1. **Background**: Use `HERO_AVK.webp` as full-cover background image. Add a CSS gradient overlay that fades from solid black on the left to transparent on the right, similar to the Ecoland reference.

2. **Layout**: Switch from centered text to left-aligned, bottom-positioned content. Text sits in the lower-left area of the viewport.

3. **Content updates**:
   - New headline: "El campo que produce el mejor aguacate del mundo merece las mejores herramientas."
   - New subheadline: "AvoKingdom le da al productor de aguacate lo que antes solo tenían los intermediarios: precios reales, herramientas inteligentes y transacciones seguras. Todo en un solo lugar."
   - Remove the trust indicators row (sin tarjeta, empacadoras, actualizado)
   - Keep the two CTA buttons, left-aligned

4. **Remove** the floating price numbers animation (no longer fits with the photo background).

### Files Modified
- Copy `HERO_AVK.webp` → `public/images/HERO_AVK.webp`
- `src/components/HeroSection.tsx` — rewrite layout and content
- `src/index.css` — remove `.floating-number` keyframes (cleanup, optional)

