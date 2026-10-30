import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwind from '@tailwindcss/vite';
export default defineConfig({base:'/RhythmRootRecords_Store/',plugins:[react(),tailwind()]});
