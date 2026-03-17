

## Changes

### 1. Add logo image to project
Copy `AVK_LOGO.webp` to `public/images/AVK_LOGO.webp`.

### 2. Navbar (`src/components/Navbar.tsx`)
- Replace emoji+text logo with `<img>` tag using the uploaded logo (height ~36px)
- Replace "Entrar a la app →" CTA with two items: a text link "Iniciar Sesión" + a filled button "Crear cuenta →"
- Same changes in mobile menu

### 3. Footer (`src/components/Footer.tsx`)
- Replace emoji+text logo with the same `<img>` tag

### 4. Hero buttons (`src/components/HeroSection.tsx`)
- Primary button: "Comenzar gratis →" (add arrow)
- Secondary button: "Ver planes" (remove arrow)

