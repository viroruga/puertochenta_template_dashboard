import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import Logger from './plugins/Logger';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), Logger()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
    },
  },
  server: {
    port: 3000, // Puerto de inicializacion
    open: true, // True para abrir de forma automatica en el navegador
    strictPort: true, // En el caso que el puerto ya se encuentra utiliza no utiliza otra de forma aleatoria

    // Configuración de seguridad
    cors: {
      origin: ['http://localhost:3000', 'https://tu-dominio.com'], // Dominios permitidos
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
      maxAge: 600, // Cache preflight requests por 10 minutos
    },

    // Headers de seguridad
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Resource-Policy': 'same-site',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    },
  },

  // Configuración de build para producción
  build: {
    // Sanitizar nombres de salida
    rollupOptions: {
      output: {
        sanitizeFileName: (name) => name.replace(/[^a-z0-9]+/gi, '-'),
      },
    },

    // Evitar código malicioso en sourcemaps
    sourcemap: process.env.NODE_ENV !== 'production',

    // Minimizar el código en producción
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Eliminar console.logs en producción
        drop_debugger: true, // Eliminar debugger statements
      },
    },
  },
});
