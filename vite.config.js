import path from 'path';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Define __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Adding this to ensure fallback for all routes
  build: {
    rollupOptions: {
      input: './index.html',
    },
  },
  server: {
    // Ensure that history fallback is enabled for SPA routing in dev
    historyApiFallback: true,
  },
  preview: {
    // Ensure the history fallback is also enabled during preview
    historyApiFallback: true,
  }
});
