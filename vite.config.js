import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath, URL} from "node:url";
import {resolve, dirname} from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.js"),
            name: 'file-manager',
            fileName: 'file-manager'
        }
    },
    rollupOptions: {
        external: ["vue", "pinia", 'i18nVue', 'I18n', 'axios'],
        output: {
            globals: {
                vue: "vue",
                pinia: "pinia",
                i18nVue: "i18nVue",
                I18n: 'I18n',
                axios: 'axios'
            }
        }
    },
    plugins: [
        vue(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
