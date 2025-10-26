import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import { nitroV2Plugin } from '@tanstack/nitro-v2-vite-plugin'

const config = defineConfig({
  plugins: [
    nitroV2Plugin({
      // Configure security headers for healthcare data protection
      nitro: {
        routeRules: {
          '/**': {
            headers: {
              // Content Security Policy
              'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com; frame-src 'none';",
              
              // HTTP Strict Transport Security
              'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
              
              // X-Frame-Options
              'X-Frame-Options': 'DENY',
              
              // X-Content-Type-Options
              'X-Content-Type-Options': 'nosniff',
              
              // X-XSS-Protection
              'X-XSS-Protection': '1; mode=block',
              
              // Referrer Policy
              'Referrer-Policy': 'strict-origin-when-cross-origin',
              
              // Permissions Policy
              'Permissions-Policy': 'geolocation=(), microphone=(), camera=(), payment=()'
            }
          }
        }
      }
    }),
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
})

export default config
