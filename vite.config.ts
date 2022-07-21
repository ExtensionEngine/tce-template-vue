import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
	root: './src/sdk/',
	plugins: [
		vue(),
		vuetify({ autoImport: true }),
	],
	build: {
		lib: {
			entry: '../content-element/index.ts',
			name: 'TCE',
			fileName: 'tce-template'
		},
		rollupOptions: {
			output: {
				dir: './dist'
			}
		}
	}
})
