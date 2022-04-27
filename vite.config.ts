import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import path from 'path';

svgLoader({
    svgoConfig: {
        multipass: true,
    },
});

const injectNpmVersion = () => {
    return {
        name: 'inject-npm-version',
        config: () => ({ define: { 'import.meta.env.VERSION': JSON.stringify(process.env.npm_package_version) } }),
    };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        target: 'es2020',
        sourcemap: true,
        minify: mode === 'production',
    },
    test: {
        globals: true,
        environment: 'jsdom',
    },
    // Uncomment to see rollup script breakdowns when building.
    plugins: [vue(), injectNpmVersion(), svgLoader()], //, analyze({ showExports: true }), visualizer({ template: "treemap", sourcemap: true })],
}));
