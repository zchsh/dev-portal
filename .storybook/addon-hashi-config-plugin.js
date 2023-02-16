const path = require('path')
const webpack = require('webpack')
const { getHashiConfig } = require('../config/index')

module.exports = function HashiConfigPlugin() {
	const env = process.env.HASHI_ENV || 'development'
	const envConfigPath = path.join(process.cwd(), 'config', `${env}.json`)

	return new webpack.DefinePlugin({
		...Object.fromEntries(
			Object.entries(getHashiConfig(envConfigPath)).map(([key]) => {
				return [
					`__config.${key}`,
					webpack.DefinePlugin.runtimeValue(
						() => {
							return JSON.stringify(getHashiConfig(envConfigPath)[key])
						},
						/**
						 * version is set to env here to ensure that webpack's persistent cache
						 * does not cache the wrong config values across builds with different HASHI_ENV values
						 */
						{ fileDependencies: [envConfigPath], version: env }
					),
				]
			})
		),
	})
}
