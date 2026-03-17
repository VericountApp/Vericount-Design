# Vericount Design

Vericounts designsystem — dokumentation av visuell identitet, komponenter och riktlinjer.

**Live**: [design.vericount.se](https://design.vericount.se)

## Kom igång

```sh
git clone https://github.com/vericount/vericount-design.git
cd vericount-design
npm install
npm run dev
```

Öppna [localhost:8080](http://localhost:8080) i din webbläsare.

## Projektstruktur

```
src/
├── pages/Index.tsx                  # Huvudsida med alla sektioner
├── components/
│   ├── design-system/               # Sektioner: varumärke, färger, typografi, etc.
│   └── ui/                          # shadcn/ui-komponenter
├── hooks/                           # useScrollSpy, useMobile
├── assets/                          # Logotyper
└── index.css                        # Design tokens (CSS-variabler)
```

## Sektioner

| Sektion | Beskrivning |
|---------|-------------|
| Varumärke | Designprinciper, tonalitet och copyguide |
| Logotyp | Logotypanvändning och regler |
| Färger | Färgpalett med WCAG-kontrastinfo |
| Typografi | Typskala, typsnitt (Epilogue + Inter) |
| Avstånd | Spacing-skala, grid, breakpoints |
| Tokens | CSS design tokens dokumentation |
| Komponenter | 45+ interaktiva UI-komponenter |
| Animationer | Transitions och rörelsemönster |
| Mönster | Vanliga UI-patterns |
| Tillgänglighet | WCAG 2.1 AA-riktlinjer |
| Ikoner | Ikonbibliotek (Lucide) |
| Mörkt läge | Light/dark mode tokens |

## Teknikstack

- [Vite](https://vitejs.dev) — Build tool
- [React](https://react.dev) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) — Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com) — Komponentbibliotek
- [Lucide](https://lucide.dev) — Ikoner

## Kommandon

| Kommando | Beskrivning |
|----------|-------------|
| `npm run dev` | Starta utvecklingsserver |
| `npm run build` | Bygg för produktion |
| `npm run lint` | Kör ESLint |
| `npm run test` | Kör tester |

## Licens

© Vericount AB. Alla rättigheter förbehållna.
