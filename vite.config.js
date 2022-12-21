/* global __dirname */

import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import EslintPlugin from 'vite-plugin-eslint'
import { VitePluginFonts } from 'vite-plugin-fonts'

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const path = require('path')

export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@css': path.resolve(__dirname, './src/assets/scss')
		}
	},
	plugins: [
		vue(),
		// StylelintPlugin(),
		EslintPlugin(),
		VitePluginFonts({
			google: {
				families: [
					{
						name: 'Nunito Sans',
						styles: 'wght@300;700'
					}
				]
			}
		})
	]
})
