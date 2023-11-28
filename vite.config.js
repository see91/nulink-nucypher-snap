import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'index.js'),
            name: 'nulink-nucypher-snap',
            fileName: (format) => `nulink-nucypher-snap.${format}.js` // 打包后的文件名
        },
        sourcemap: true,
        rollupOptions: {
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
})
