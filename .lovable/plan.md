

## Fix Broken Logo

The logo file `public/images/AVK_LOGO.webp` appears corrupted. The user has re-uploaded the correct file (`AVK_LOGO-2.webp`).

### Plan
1. Copy `user-uploads://AVK_LOGO-2.webp` to `public/images/AVK_LOGO.webp`, overwriting the broken file.
2. No code changes needed — Navbar and Footer already reference `/images/AVK_LOGO.webp`.

