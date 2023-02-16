const path = require('path')
const HashiConfigPlugin = require('./addon-hashi-config-plugin')

module.exports = {
	staticDirs: ['../public'],
	stories: [
		'../src/stories/**/*.stories.mdx',
		'../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'storybook-addon-next',
		path.resolve('./.storybook/transpile-hashicorp-modules'),
		path.resolve('./.storybook/handle-graphql-files'),
	],
	framework: '@storybook/react',
	core: {
		builder: 'webpack5',
	},
	// Note: resolve stuff below is duplicative of baseUrl in tsconfig.
	// It's necessary due to a bug in Storybook
	// ref: https://github.com/storybookjs/storybook/issues/16461
	webpackFinal: (config) => {
		config.resolve.modules = [...(config.resolve.modules || []), './src']
		config.plugins.push(HashiConfigPlugin())
		return config
	},
}
