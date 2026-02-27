/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Colores personalizados S3A Industrial - Nueva paleta del logo
        primary: '#1e313f',       // Azul mar profundo
        secondary: '#223546',     // Azul océano  
        steel: '#334c60',         // Azul acero
        rust: '#7b5433',          // Marrón tierra
        'golden': '#aa7e56',      // Dorado-marrón suave (NUEVO)
        'golden-light': '#cca373', // Dorado claro (NUEVO)
        'golden-dark': '#8b6644',  // Dorado oscuro (NUEVO)
        'golden-warm': '#aa7e56',  // Alias
        'gray-medium': '#aa7e56',  // Compatibilidad
        'gray-light': '#cca373',   // Compatibilidad
        'bg-cream': '#f4f1ec',     // Crema dorado muy suave
        'bg-sand': '#ebe5dc',      // Arena dorada
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          md: '2rem',
          lg: '2.5rem',
          xl: '3rem',
          '2xl': '4rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [],
}
