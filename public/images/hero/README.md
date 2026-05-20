# Hero Section Images

Sarah — drop these 7 files in this folder and set `hasImages = true` in `components/home/HeroSection.tsx`.

| Filename | Slot | Description | Recommended size |
|---|---|---|---|
| `tumbler.png` | `data-slot="tumbler"` | Pink tumbler with sunflower design — center-left of collage | 320×400px |
| `pillow.png` | `data-slot="pillow"` | White pillow with floral design — right side of collage | 280×280px |
| `keychain.png` | `data-slot="keychain"` | Custom keychain — right side, below pillow | 160×200px |
| `mug.png` | `data-slot="mug"` | Mug with custom design — lower center of collage | 240×240px |
| `floral-left.png` | `data-slot="floral-left"` | Floral/botanical illustration — left edge overlay | 240×400px |
| `floral-right.png` | `data-slot="floral-right"` | Floral illustration — bottom-right corner overlay | 240×320px |
| `floral-top-right.png` | `data-slot="floral-top-right"` | Small floral sprig — top-right accent | 160×160px |

**Notes:**
- Use PNG with transparent background so images layer naturally over the cream background
- Export at 2× resolution for retina screens (e.g. 640×800px for the tumbler)
- After adding images, open `components/home/HeroSection.tsx`, find `const hasImages = false` on line 6, and change it to `const hasImages = true`
