import { defineConfig } from 'vite';

export default defineConfig({
    root: 'navigation',
    base: './',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        minify: 'esbuild',
        esbuild: {
            drop: ['console', 'debugger'],
            legalComments: 'none',
        },
        rollupOptions: {
            output: {
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
                assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
            },
        },
        cssCodeSplit: true,
        sourcemap: false,
        target: 'es2015',
        assetsInlineLimit: 4096,
    },
});
