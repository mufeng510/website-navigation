import { defineConfig } from 'vite';

export default defineConfig({
    root: 'navigation',
    base: './',
    build: {
        outDir: '../dist',
        emptyOutDir: true
    }
});
