module.exports = {
	webpackFinal(config = {}, options = {}) {
		return {
			...config,
			module: {
				...config.module,
				rules: [
					...config.module.rules,
					{
						test: /\.graphql$/,
						use: [
							{
								loader: 'url-loader',
								options: {
									encoding: false,
									mimetype: false,
									generator: (content) => {
										return content
									},
								},
							},
						],
					},
				],
			},
		}
	},
}
