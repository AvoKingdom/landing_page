

## Redesign Problem Section Cards

### What changes
Redesign the 3 problem cards to match the reference image style: image on top with bottom gradient, then title, then body text. Hover glow only on the bottom border.

### Files

**1. Copy images to project**
- `user-uploads://Precio.webp` → `public/images/Precio.webp`
- `user-uploads://Mercado.webp` → `public/images/Mercado.webp`
- `user-uploads://Tiempo.webp` → `public/images/Tiempo.webp`

**2. `src/components/ProblemSection.tsx`**
- Replace `icon` field with `image` path in the problems array (`/images/Precio.webp`, `/images/Mercado.webp`, `/images/Tiempo.webp`)
- Card structure: image container (with `overflow-hidden rounded-t-xl`, image with `object-cover`, and a gradient overlay at the bottom of the image fading from transparent to card background), followed by a padded content area with title and body
- Remove `border-l-4 border-l-primary` left border
- Remove emoji icon rendering

**3. `src/index.css`** (or inline styles)
- Add a new utility class `.glass-card-glow-bottom` that on hover only shows glow on the bottom: `box-shadow: 0 8px 30px hsl(73 100% 50% / 0.15)` and `border-bottom-color: hsl(73 100% 50% / 0.3)` while keeping other borders unchanged
- Or use the existing `.glass-card` base and add a custom hover with bottom-only glow via a new class

### Card layout (per card)
```text
┌──────────────────┐
│                  │
│   Image (h-48)   │
│   + gradient ↓   │
├──────────────────┤
│  Title (bold)    │
│  Body text       │
└──────────────────┘
```

