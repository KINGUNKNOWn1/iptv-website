import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(),
    // Gzip compression for production
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240, // Only compress files > 10KB
      algorithm: 'gzip',
      ext: '.gz',
    }),
    // Brotli compression (better than gzip)
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
    // Image optimization
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 80,
        progressive: true,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false,
          },
          {
            name: 'removeEmptyAttrs',
            active: true,
          },
        ],
      },
    }),
  ],
  server: {
    port: 3000,
    open: true
  },
  build: {
    // Optimize chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React libraries - always loaded
          if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
            return 'react-vendor';
          }
          // Framer Motion - small and used everywhere
          if (id.includes('framer-motion')) {
            return 'animation-vendor';
          }
          // Three.js - LAZY LOAD (don't bundle in main chunk)
          if (id.includes('three') || id.includes('@react-three')) {
            return 'three-vendor-lazy';
          }
          // Icons
          if (id.includes('react-icons')) {
            return 'icons-vendor';
          }
          // Lenis smooth scroll
          if (id.includes('lenis')) {
            return 'lenis-vendor';
          }
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Enable minification with esbuild (faster than terser)
    minify: 'esbuild',
    // Source maps for debugging (disable for production)
    sourcemap: false,
    // Target modern browsers for smaller bundle
    target: 'es2015',
    // CSS code splitting
    cssCodeSplit: true,
  },
  // Performance optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
    exclude: ['three', '@react-three/fiber', '@react-three/drei'], // Don't pre-bundle Three.js
  },
});
