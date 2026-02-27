# S3A Industrial - Sitio Web Profesional

Sitio web corporativo para **S3A Industrial**, empresa especializada en reparación y mantenimiento de sopladores industriales.

## 🚀 Stack Tecnológico

- **Astro** - Framework principal para máxima velocidad
- **Tailwind CSS** - Sistema de diseño para layouts y utilidades
- **CSS Puro** - Animaciones y efectos personalizados
- **TypeScript** - Tipado estático
- **100% Responsive** - Diseño mobile-first

## 📁 Estructura del Proyecto

```
/
├── public/
│   ├── favicon.svg
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.astro         # Navegación principal
│   │   ├── Hero.astro           # Sección hero con CTA
│   │   ├── About.astro          # Quiénes somos
│   │   ├── Services.astro       # Servicios principales
│   │   ├── Coverage.astro       # Cobertura de servicio
│   │   ├── ContactForm.astro    # Formulario de contacto
│   │   └── Footer.astro         # Footer con links
│   ├── layouts/
│   │   └── Layout.astro         # Layout base HTML
│   ├── pages/
│   │   └── index.astro          # Página principal
│   └── styles/
│       ├── global.css           # Variables CSS y estilos base
│       ├── animations.css       # Keyframes y animaciones
│       ├── hero.css             # Estilos específicos del hero
│       ├── services.css         # Efectos de las cards de servicios
│       └── contact.css          # Estilos del formulario
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── tsconfig.json
```

## 🎨 Estrategia de Estilos

### Tailwind CSS - Para:
- Sistema de grid y layouts (`grid`, `flex`)
- Espaciado (`p-*`, `m-*`, `gap-*`)
- Responsive breakpoints (`sm:`, `md:`, `lg:`, `xl:`)
- Utilidades comunes (`text-*`, `bg-*`, `rounded-*`)

### CSS Puro - Para:
- Animaciones personalizadas (`@keyframes`)
- Efectos hover y transitions únicos
- Gradientes complejos
- Efectos visuales personalizados
- Backdrop filters y sombras especiales

## 🎯 Paleta de Colores

```css
--color-primary: #313d49    /* Azul oscuro industrial */
--color-secondary: #575757  /* Gris carbón */
--color-steel: #4b5860      /* Gris acero */
--color-rust: #644239       /* Marrón óxido */
--color-bg-cream: #f5f2eb   /* Beige claro */
--color-bg-sand: #e3d9cd    /* Arena */
```

## 🧞 Comandos

```bash
# Instalar dependencias
npm install

# Desarrollo (localhost:4321)
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📦 Deployment en Vercel

### Opción 1: Desde la CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Opción 2: Desde GitHub

1. Push tu código a GitHub
2. Importa el repositorio en [vercel.com](https://vercel.com)
3. Vercel detectará automáticamente Astro
4. Deploy automático ✨

### Configuración Vercel

El proyecto ya está configurado para Vercel. Asegúrate de:
- **Framework Preset:** Astro
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

## 🔧 Personalización

### Cambiar Colores

Edita las variables CSS en `src/styles/global.css` y `tailwind.config.mjs`

### Agregar Nuevas Secciones

1. Crea un nuevo componente en `src/components/`
2. Importa y usa en `src/pages/index.astro`
3. Agrega estilos específicos en `src/styles/` si es necesario

### Integrar Formulario con Backend

En `src/components/ContactForm.astro`, reemplaza el `setTimeout` simulado por una llamada real:

```javascript
// Ejemplo con fetch
const formData = new FormData(form);
const response = await fetch('/api/contact', {
  method: 'POST',
  body: formData
});
```

## ⚡ Optimizaciones Incluidas

- ✅ Lazy loading de imágenes
- ✅ Animaciones en scroll con Intersection Observer
- ✅ CSS crítico inline
- ✅ Preconnect a Google Fonts
- ✅ SEO meta tags
- ✅ Accesibilidad (ARIA labels, focus states)
- ✅ Mobile-first responsive design

## 📊 Performance

Objetivo: **Lighthouse Score 90+**

- First Contentful Paint (FCP) < 1.8s
- Time to Interactive (TTI) < 3.8s
- Cumulative Layout Shift (CLS) < 0.1

## 📝 Notas

- Las imágenes actuales usan placeholders de Unsplash
- Reemplaza con imágenes reales de sopladores industriales
- Actualiza información de contacto en `Header.astro` y `Footer.astro`
- Personaliza textos según necesidades específicas

## 📞 Información de Contacto (para actualizar)

- **Teléfono:** +1 (234) 567-890
- **Email:** info@s3aindustrial.com
- **Horario:** Lun-Vie 8:00-18:00

## 👀 Más Información

Documentación de Astro: [docs.astro.build](https://docs.astro.build)

## 📄 Licencia

© 2026 S3A Industrial. Todos los derechos reservados.
