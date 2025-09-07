import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import checker from 'vite-plugin-checker';
import stylelint from 'vite-plugin-stylelint';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        checker({
            // e.g. use TypeScript check
            typescript: true,
        }),
        stylelint({
            include: ['src/**/*.{css,scss}'],
            exclude: ['node_modules', 'dist'],
        }),
    ],
    base: './',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
