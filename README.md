# PuertoChenta Vite Template 🚀

Este template está diseñado específicamente para los proyectos de PuertoChetna, incorporando nuestras mejores prácticas y configuraciones predeterminadas para comenzar rápidamente con nuevos proyectos.

## 🛠️ Tecnologías Incluidas

- ⚡️ [Vite](https://vitejs.dev/) - Build tool ultrarrápido
- ⚛️ [React](https://reactjs.org/) - Biblioteca UI
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- 📝 [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- 🧹 [ESLint](https://eslint.org/) - Linter para JavaScript
- 💅 [Prettier](https://prettier.io/) - Formateador de código
- 🗂️ Importaciones absolutas

## 📁 Estructura del Proyecto

```
├── src/
│   ├── assets/          # Archivos estáticos (imágenes, fuentes, etc.)
│   ├── components/      # Componentes reutilizables
│   ├── pages/          # Páginas/Vistas de la aplicación
│   ├── styles/         # Archivos de estilos globales
│   ├── routes/         # Rutas para la navegación
│   ├── App.tsx         # Componente principal
│   ├── main.tsx        # Punto de entrada
│   └── vite-env.d.ts   # Declaraciones de tipos para Vite
├── public/             # Archivos públicos
├── index.html          # Plantilla HTML
├── tailwind.config.js  # Configuración de Tailwind
├── vite.config.ts      # Configuración de Vite
├── tsconfig.json       # Configuración de TypeScript
├── .eslintrc.json     # Configuración de ESLint
└── .prettierrc        # Configuración de Prettier
```

## ⚙️ Configuración Preestablecida

### Aliases de Importación

```typescript
import Component from '@/components/Component';
import Page from '@pages/Home';
import styles from '@styles/main.css';
import logo from '@assets/logo.svg';
```

### Variables de Entorno

```env
VITE_APP_TITLE=PuertoChenta
VITE_API_URL=https://puertochenta.com
VITE_ENV=development
```

## 🚀 Comenzando

### Crear Nuevo Proyecto

```bash
# Usando degit
npx degit puertochenta/puertochenta-template-base mi-proyecto

# O clonando directamente
git clone https://github.com/viroruga/puertochenta-template-base.git mi-proyecto
```

### Instalación

```bash
cd mi-proyecto
npm install
```

### Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Construcción
npm run build

# Vista previa de la construcción
npm run preview

# Lint
npm run lint

# Formatear código
npm run format
```

## 🎯 Características

- 📱 Diseño responsive por defecto con Tailwind CSS
- 🎨 Tema personalizado de PuertoChetna preconfigurado
- 🔍 Importaciones absolutas configuradas
- 🧩 Componentes base comunes preestablecidos
- 📝 TypeScript estricto activado
- 🔧 ESLint y Prettier configurados con reglas de PuertoChetna
- 🚀 Optimizaciones de rendimiento predeterminadas

## 📦 Componentes Preinstalados

- Layout base
- Navegación responsive
- Footer
- Contenedores de sección
- Botones estilizados
- Cards
- Formularios base

## 🤝 Contribución

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: Amazing Feature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Convenciones de Código

- Usar nombres de componentes en PascalCase
- Archivos de componentes con extensión `.tsx`
- Estilos modularizados con `[nombre].module.css`
- Commits siguiendo [Conventional Commits](https://www.conventionalcommits.org/)

## 🔧 Personalización

### Tema de Tailwind

```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color',
        // ... más colores personalizados
      },
    },
  },
};
```

### Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
VITE_APP_TITLE=Mi App
VITE_API_URL=https://mi-api.com
```

## 📚 Recursos Adicionales

- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de React](https://reactjs.org/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤔 Necesitas Ayuda?

Si tienes preguntas o necesitas ayuda con el template, contacta a:

- Equipo de desarrollo de PuertoChenta
- Abre un issue en el repositorio

---

Desarrollado con ❤️ por PuertoChenta
