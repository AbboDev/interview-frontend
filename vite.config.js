/* global __dirname */

import { defineConfig } from 'vite'

import EslintPlugin from 'vite-plugin-eslint'
import { VitePluginFonts } from 'vite-plugin-fonts'
import StylelintPlugin from 'vite-plugin-stylelint'

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
		StylelintPlugin(),
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
